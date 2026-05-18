"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2, RotateCcw } from "lucide-react";
import type { Review } from "@/lib/cmsTypes";
import { createId } from "@/lib/cmsStorage";
import { useReviews } from "@/hooks/useCmsData";
import AdminModal from "@/components/admin/AdminModal";

const avatarGradients = [
  "from-purple-500 to-blue-600",
  "from-pink-500 to-rose-600",
  "from-orange-500 to-red-600",
  "from-teal-500 to-emerald-600",
  "from-amber-500 to-yellow-600",
  "from-indigo-500 to-violet-600",
];

const emptyReview = (): Review => ({
  id: "",
  name: "",
  handle: "",
  avatar: "",
  avatarBg: avatarGradients[0],
  rating: 5,
  date: "",
  text: "",
  dish: "",
  verified: true,
});

function initialsFromName(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AdminReviewsPanel() {
  const { items, persist, resetToDefaults } = useReviews();
  const [editing, setEditing] = useState<Review | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => {
    setEditing({ ...emptyReview(), id: createId("review") });
    setIsNew(true);
  };

  const openEdit = (review: Review) => {
    setEditing({ ...review });
    setIsNew(false);
  };

  const closeForm = () => {
    setEditing(null);
    setIsNew(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const payload = {
      ...editing,
      avatar: editing.avatar || initialsFromName(editing.name),
      handle: editing.handle.startsWith("@")
        ? editing.handle
        : `@${editing.handle.replace(/^@/, "")}`,
    };
    const next = isNew
      ? [...items, payload]
      : items.map((r) => (r.id === payload.id ? payload : r));
    persist(next);
    closeForm();
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this review?")) return;
    persist(items.filter((r) => r.id !== id));
    if (editing?.id === id) closeForm();
  };

  const updateField = <K extends keyof Review>(key: K, value: Review[K]) => {
    setEditing((prev) => {
      if (!prev) return prev;
      const next = { ...prev, [key]: value };
      if (key === "name" && !prev.avatar) {
        next.avatar = initialsFromName(String(value));
      }
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-brand-cream-muted text-sm">
          {items.length} review{items.length !== 1 ? "s" : ""} · saved in this
          browser
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              if (confirm("Reset all reviews to defaults?")) resetToDefaults();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-border text-brand-cream-muted hover:text-brand-cream text-sm transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset defaults
          </button>
          <button
            type="button"
            onClick={openNew}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange-light transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add review
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {items.map((review) => (
          <div
            key={review.id}
            className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-brand-card border border-brand-border"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}
              >
                {review.avatar}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-brand-cream truncate">
                  {review.name}
                </p>
                <p className="text-brand-cream-muted text-sm truncate">
                  {review.rating}★ · {review.dish}
                </p>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={() => openEdit(review)}
                className="p-2 rounded-lg border border-brand-border text-brand-cream-muted hover:text-brand-orange hover:border-brand-orange/30 transition-colors"
                aria-label="Edit review"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(review.id)}
                className="p-2 rounded-lg border border-brand-border text-brand-cream-muted hover:text-red-400 hover:border-red-500/30 transition-colors"
                aria-label="Delete review"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AdminModal
        open={!!editing}
        title={isNew ? "New review" : "Edit review"}
        onClose={closeForm}
      >
        {editing && (
          <form onSubmit={handleSave} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Name
              </span>
              <input
                required
                value={editing.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="mt-1 w-full admin-input"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Handle
              </span>
              <input
                required
                value={editing.handle}
                onChange={(e) => updateField("handle", e.target.value)}
                className="mt-1 w-full admin-input"
                placeholder="@username"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Avatar initials
              </span>
              <input
                maxLength={2}
                value={editing.avatar}
                onChange={(e) =>
                  updateField("avatar", e.target.value.toUpperCase())
                }
                className="mt-1 w-full admin-input"
                placeholder="MJ"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Avatar gradient
              </span>
              <select
                value={editing.avatarBg}
                onChange={(e) => updateField("avatarBg", e.target.value)}
                className="mt-1 w-full admin-input"
              >
                {avatarGradients.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Rating
              </span>
              <select
                value={editing.rating}
                onChange={(e) =>
                  updateField("rating", Number(e.target.value))
                }
                className="mt-1 w-full admin-input"
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n} stars
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Date label
              </span>
              <input
                required
                value={editing.date}
                onChange={(e) => updateField("date", e.target.value)}
                className="mt-1 w-full admin-input"
                placeholder="2 weeks ago"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Dish ordered
              </span>
              <input
                required
                value={editing.dish}
                onChange={(e) => updateField("dish", e.target.value)}
                className="mt-1 w-full admin-input"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Review text
              </span>
              <textarea
                required
                rows={4}
                value={editing.text}
                onChange={(e) => updateField("text", e.target.value)}
                className="mt-1 w-full admin-input resize-y"
              />
            </label>
            <label className="flex items-center gap-2 sm:col-span-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editing.verified}
                onChange={(e) => updateField("verified", e.target.checked)}
                className="w-4 h-4 accent-brand-orange"
              />
              <span className="text-sm text-brand-cream">Show verified badge</span>
            </label>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors"
            >
              Save review
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="px-6 py-2.5 rounded-xl border border-brand-border text-brand-cream-muted hover:text-brand-cream text-sm transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
        )}
      </AdminModal>
    </div>
  );
}
