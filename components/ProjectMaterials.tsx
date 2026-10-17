import type { Material } from "@/content/materials";
import { getMaterial } from "@/content/materials";
import { DocPreview } from "./DocPreview";

const KIND_ICON: Record<Material["kind"], string> = { deck: "▤", report: "¶", live: "↗", source: "</>" };

function MaterialActions({ m }: { m: Material }) {
  const isPdf = m.kind === "deck" || m.kind === "report";
  return (
    <div className="material-actions">
      <a className="btn btn--small" href={m.href} target="_blank" rel="noopener noreferrer">
        {isPdf ? "Open PDF" : m.cta}
        <span className="sr-only"> (opens in a new tab)</span> ↗
      </a>
      {m.download ? (
        <a className="btn btn--small btn--light" href={m.href} download>
          Download
        </a>
      ) : null}
    </div>
  );
}

function Badges({ m }: { m: Material }) {
  return (
    <div className="material-badges">
      <span className="tag" data-variant={m.authorship === "Team deliverable" ? "team" : "solo"}>
        {m.authorship}
      </span>
      <span className="tag" data-variant={m.origin === "Original project material" ? "original" : "later"}>
        {m.origin}
      </span>
    </div>
  );
}

/** The consolidated "Project materials" section at the end of a project page. */
export function ProjectMaterials({ items }: { items: Material[] }) {
  const docs = items.filter((m) => m.preview);
  const links = items.filter((m) => !m.preview);
  return (
    <div className="materials">
      {docs.map((m) => (
        <article key={m.id} id={`material-${m.id}`} className="material-doc" aria-labelledby={`material-${m.id}-h`}>
          <div className="material-meta">
            <span className="kicker">
              <span aria-hidden="true">{KIND_ICON[m.kind]}</span> {m.cta}
            </span>
            <h3 id={`material-${m.id}-h`}>{m.title}</h3>
            <p className="material-format">{m.format}</p>
            <p>{m.description}</p>
            <Badges m={m} />
            <MaterialActions m={m} />
          </div>
          <DocPreview material={m} />
        </article>
      ))}
      {links.length ? (
        <ul className="material-links">
          {links.map((m) => (
            <li key={m.id} id={`material-${m.id}`}>
              <a className="material-link" href={m.href} target="_blank" rel="noopener noreferrer">
                <span className="material-link-icon" aria-hidden="true">
                  {KIND_ICON[m.kind]}
                </span>
                <span>
                  <span className="kicker">{m.cta}</span>
                  <strong>{m.title}</strong>
                  <span className="material-format">{m.format}</span>
                  <span className="material-desc">{m.description}</span>
                  <Badges m={m} />
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/** A small evidence chip placed beside the claim it supports. */
export function MaterialChip({ id, page, pages, note }: { id: string; page?: number; pages?: string; note?: string }) {
  const m = getMaterial(id);
  const href = page ? `${m.href}#page=${page}` : m.href;
  return (
    <a className="material-chip" href={href} target="_blank" rel="noopener noreferrer">
      <span className="material-chip-icon" aria-hidden="true">
        {KIND_ICON[m.kind]}
      </span>
      <span>
        <strong>{m.cta}</strong>
        <span>
          {m.title}
          {pages ? ` · ${m.kind === "deck" ? "slides" : "pages"} ${pages}` : ""}
          {note ? ` · ${note}` : ""}
        </span>
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
