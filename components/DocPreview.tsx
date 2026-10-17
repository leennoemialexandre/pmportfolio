"use client";

import { useState } from "react";
import type { Material } from "@/content/materials";

/** A lightweight page-by-page preview of a PDF, using pre-rendered page images. */
export function DocPreview({ material }: { material: Material }) {
  const p = material.preview!;
  const [page, setPage] = useState(1);
  const unit = material.kind === "deck" ? "Slide" : "Page";
  const src = `/previews/${p.dir}/${String(page).padStart(2, "0")}.webp`;
  const go = (n: number) => setPage(Math.min(p.pages, Math.max(1, n)));

  return (
    <div
      className={`doc-preview doc-preview--${p.orientation}`}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(page + 1);
        if (e.key === "ArrowLeft") go(page - 1);
      }}
    >
      <div className="doc-stage">
        {/* Plain img keeps pre-rendered previews light and avoids re-encoding. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${unit} ${page} of ${p.pages} from “${material.title}”`} loading="lazy" />
      </div>
      <div className="doc-controls">
        <button type="button" className="btn btn--small btn--light" onClick={() => go(page - 1)} disabled={page === 1} aria-label={`Previous ${unit.toLowerCase()}`}>
          ←
        </button>
        <label className="doc-page">
          <span className="sr-only">{unit} number</span>
          <input
            type="range"
            min={1}
            max={p.pages}
            value={page}
            onChange={(e) => go(Number(e.target.value))}
            aria-valuetext={`${unit} ${page} of ${p.pages}`}
          />
          <span aria-hidden="true">
            {page} / {p.pages}
          </span>
        </label>
        <button type="button" className="btn btn--small btn--light" onClick={() => go(page + 1)} disabled={page === p.pages} aria-label={`Next ${unit.toLowerCase()}`}>
          →
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {unit} {page} of {p.pages}
      </p>
      <p className="doc-open">
        <a href={`${material.href}#page=${page}`} target="_blank" rel="noopener noreferrer">
          Open this {unit.toLowerCase()} in the PDF<span className="sr-only"> (opens in a new tab)</span> ↗
        </a>
      </p>
    </div>
  );
}
