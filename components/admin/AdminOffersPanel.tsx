"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2, RotateCcw } from "lucide-react";
import type { Offer, OfferIcon } from "@/lib/cmsTypes";
import { DEFAULT_OFFER_BADGE_COLOR } from "@/lib/cmsConstants";
import { createId } from "@/lib/cmsStorage";
import {
  deleteOfferImageBlob,
  resolveOfferImageSrc,
} from "@/lib/imageStorage";
import { useOffers } from "@/hooks/useCmsData";
import ImageUpload from "@/components/admin/ImageUpload";
import AdminModal from "@/components/admin/AdminModal";

const emptyOffer = (): Offer => ({
  id: "",
  title: "",
  subtitle: "",
  description: "",
  originalPrice: "",
  salePrice: "",
  savings: "",
  badge: "",
  badgeColor: DEFAULT_OFFER_BADGE_COLOR,
  image: "",
  icon: "gift",
  timeLeft: "",
});

const badgeColors = [
  { label: "Orange (theme)", value: "bg-brand-orange" },
  { label: "Yellow", value: "bg-yellow-500" },
  { label: "Red", value: "bg-red-500" },
  { label: "Green", value: "bg-green-500" },
];

export default function AdminOffersPanel() {
  const { items, persist, resetToDefaults } = useOffers();
  const [editing, setEditing] = useState<Offer | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => {
    setEditing({ ...emptyOffer(), id: createId("offer") });
    setIsNew(true);
  };

  const openEdit = (offer: Offer) => {
    setEditing({ ...offer });
    setIsNew(false);
  };

  const closeForm = () => {
    setEditing(null);
    setIsNew(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (!editing.image) {
      alert("Please upload an image for this offer.");
      return;
    }
    const resolved = resolveOfferImageSrc(editing);
    if (!resolved) {
      alert("Please upload an image for this offer.");
      return;
    }
    const next = isNew
      ? [...items, editing]
      : items.map((o) => (o.id === editing.id ? editing : o));
    persist(next);
    closeForm();
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this offer?")) return;
    deleteOfferImageBlob(id);
    persist(items.filter((o) => o.id !== id));
    if (editing?.id === id) closeForm();
  };

  const updateField = <K extends keyof Offer>(key: K, value: Offer[K]) => {
    setEditing((prev) => (prev ? { ...prev, [key]: value } : prev));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-brand-cream-muted text-sm">
          {items.length} offer{items.length !== 1 ? "s" : ""} · saved in this
          browser
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              if (confirm("Reset all offers to defaults?")) resetToDefaults();
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
            Add offer
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {items.map((offer) => {
          const thumb = resolveOfferImageSrc(offer);
          return (
            <div
              key={offer.id}
              className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-brand-card border border-brand-border"
            >
              <div className="flex items-center gap-3 min-w-0">
                {thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumb}
                    alt=""
                    className="w-12 h-12 rounded-lg object-cover shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-brand-dark border border-brand-border shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="font-semibold text-brand-cream truncate">
                    {offer.title}
                  </p>
                  <p className="text-brand-cream-muted text-sm truncate">
                    {offer.subtitle} · {offer.salePrice}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => openEdit(offer)}
                  className="p-2 rounded-lg border border-brand-border text-brand-cream-muted hover:text-brand-orange hover:border-brand-orange/30 transition-colors"
                  aria-label="Edit offer"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(offer.id)}
                  className="p-2 rounded-lg border border-brand-border text-brand-cream-muted hover:text-red-400 hover:border-red-500/30 transition-colors"
                  aria-label="Delete offer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <AdminModal
        open={!!editing}
        title={isNew ? "New offer" : "Edit offer"}
        onClose={closeForm}
      >
        {editing && (
          <form onSubmit={handleSave} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Title
              </span>
              <input
                required
                value={editing.title}
                onChange={(e) => updateField("title", e.target.value)}
                className="mt-1 w-full admin-input"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Subtitle
              </span>
              <input
                required
                value={editing.subtitle}
                onChange={(e) => updateField("subtitle", e.target.value)}
                className="mt-1 w-full admin-input"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Description
              </span>
              <textarea
                required
                rows={3}
                value={editing.description}
                onChange={(e) => updateField("description", e.target.value)}
                className="mt-1 w-full admin-input resize-y"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Sale price
              </span>
              <input
                required
                value={editing.salePrice}
                onChange={(e) => updateField("salePrice", e.target.value)}
                className="mt-1 w-full admin-input"
                placeholder="$18.99"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Original price
              </span>
              <input
                required
                value={editing.originalPrice}
                onChange={(e) => updateField("originalPrice", e.target.value)}
                className="mt-1 w-full admin-input"
                placeholder="$26.97"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Savings label
              </span>
              <input
                required
                value={editing.savings}
                onChange={(e) => updateField("savings", e.target.value)}
                className="mt-1 w-full admin-input"
                placeholder="Save $7.98"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Time label
              </span>
              <input
                required
                value={editing.timeLeft}
                onChange={(e) => updateField("timeLeft", e.target.value)}
                className="mt-1 w-full admin-input"
                placeholder="Limited Time"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Badge text
              </span>
              <input
                required
                value={editing.badge}
                onChange={(e) => updateField("badge", e.target.value)}
                className="mt-1 w-full admin-input"
              />
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Badge color
              </span>
              <select
                value={editing.badgeColor}
                onChange={(e) => updateField("badgeColor", e.target.value)}
                className="mt-1 w-full admin-input"
              >
                {badgeColors.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-brand-cream-muted uppercase tracking-wider">
                Icon
              </span>
              <select
                value={editing.icon}
                onChange={(e) =>
                  updateField("icon", e.target.value as OfferIcon)
                }
                className="mt-1 w-full admin-input"
              >
                <option value="gift">Gift</option>
                <option value="zap">Zap</option>
                <option value="tag">Tag</option>
              </select>
            </label>

            <ImageUpload
              offer={editing}
              onStored={(imageRef) => updateField("image", imageRef)}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors"
            >
              Save offer
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
