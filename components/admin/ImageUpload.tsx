"use client";

import { useEffect, useRef, useState } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import {
  processImageFile,
  resolveOfferImageSrc,
  saveOfferImageBlob,
  deleteOfferImageBlob,
  localImageRef,
} from "@/lib/imageStorage";
import type { Offer } from "@/lib/cmsTypes";

type ImageUploadProps = {
  offer: Pick<Offer, "id" | "image">;
  onStored: (imageRef: string) => void;
};

export default function ImageUpload({ offer, onStored }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPreview(resolveOfferImageSrc(offer as Offer));
  }, [offer.id, offer.image]);

  const handleFile = async (file: File | null) => {
    if (!file) return;
    setError(null);
    setLoading(true);
    try {
      const dataUrl = await processImageFile(file);
      saveOfferImageBlob(offer.id, dataUrl);
      const ref = localImageRef(offer.id);
      setPreview(dataUrl);
      onStored(ref);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    deleteOfferImageBlob(offer.id);
    setPreview("");
    onStored("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="sm:col-span-2">
      <span className="text-xs text-brand-cream-muted uppercase tracking-wider block mb-2">
        Offer image
      </span>
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <div className="relative w-full sm:w-40 h-32 rounded-xl overflow-hidden bg-brand-dark border border-brand-border shrink-0">
          {preview ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={clearImage}
                className="absolute top-2 right-2 p-1 rounded-lg bg-black/60 text-white hover:bg-red-500/80 transition-colors"
                aria-label="Remove image"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-brand-cream-muted gap-1">
              <ImageIcon className="w-8 h-8 opacity-40" />
              <span className="text-xs">No image</span>
            </div>
          )}
        </div>

        <div className="flex-1 w-full">
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />
          <button
            type="button"
            disabled={loading}
            onClick={() => inputRef.current?.click()}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl border border-dashed border-brand-orange/40 text-brand-orange hover:bg-brand-orange/10 text-sm font-medium transition-colors disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            {loading ? "Uploading…" : "Upload image"}
          </button>
          <p className="text-brand-cream-muted text-xs mt-2">
            JPG, PNG, or WebP · max 2MB · stored in this browser
          </p>
          {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
}
