// Project materials: the actual files and links behind each case study.
// Only list things Leen-Noemi has supplied. `origin` separates original project work
// from material made later for the portfolio; `authorship` separates team and individual work.

export type MaterialKind = "deck" | "report" | "live" | "source";

export interface Material {
  id: string;
  project: string;
  title: string;
  kind: MaterialKind;
  /** Button label, e.g. "View presentation". */
  cta: string;
  /** Format line, e.g. "PDF · 18 slides". */
  format: string;
  description: string;
  authorship: "Team deliverable" | "Individual work";
  origin: "Original project material" | "Made later for the portfolio";
  href: string;
  external?: boolean;
  download?: boolean;
  /** Preview images (one per page) generated from the PDF. */
  preview?: { dir: string; pages: number; orientation: "landscape" | "portrait" };
}

const previews = (dir: string, pages: number, orientation: "landscape" | "portrait" = "landscape") => ({ dir, pages, orientation });

export const materials: Material[] = [
  // ---------- TAFIA ----------
  {
    id: "tafia-live",
    project: "tafia",
    title: "TAFIA prototype (Lovable build)",
    kind: "live",
    cta: "Open live project",
    format: "Live website",
    description: "The working prototype our team built: games, in-site medication prompts, the companion, and the caregiver dashboard.",
    authorship: "Team deliverable",
    origin: "Original project material",
    href: "https://tafiaonline.lovable.app/",
    external: true,
  },

  // ---------- Concentration 64 ----------
  {
    id: "c64-live",
    project: "concentration-64",
    title: "Concentration 64 (original deployed version)",
    kind: "live",
    cta: "Open live project",
    format: "Live website · GitHub Pages",
    description: "The game as students played it, untouched by this portfolio.",
    authorship: "Individual work",
    origin: "Original project material",
    href: "https://leennoemialexandre.github.io/minigamelibrary/games/concentration-64/index.html",
    external: true,
  },
  {
    id: "c64-source",
    project: "concentration-64",
    title: "minigamelibrary repository",
    kind: "source",
    cta: "View source code",
    format: "GitHub repository",
    description: "HTML, CSS, and JavaScript for the game, plus the animal, country, and name word lists.",
    authorship: "Individual work",
    origin: "Original project material",
    href: "https://github.com/leennoemialexandre/minigamelibrary",
    external: true,
  },

  // ---------- Jobaholic ----------
  {
    id: "jobaholic-live",
    project: "jobaholic",
    title: "Jobaholic (live app)",
    kind: "live",
    cta: "Open live project",
    format: "Live web app · Vercel · account required",
    description: "The deployed tracker. You'll need to create an account; the sample workspace above needs none.",
    authorship: "Individual work",
    origin: "Original project material",
    href: "https://jobaholic.vercel.app/",
    external: true,
  },
  {
    id: "jobaholic-source",
    project: "jobaholic",
    title: "jobaholic repository",
    kind: "source",
    cta: "View source code",
    format: "GitHub repository · Next.js",
    description: "The tracker and interview-prep pages, including the dashboard formulas and deadline rules discussed on this page.",
    authorship: "Individual work",
    origin: "Original project material",
    href: "https://github.com/leennoemialexandre/jobaholic",
    external: true,
  },

  // ---------- Pinterest ----------
  {
    id: "pinterest-deck",
    project: "pinterest",
    title: "Pinsionaries: Innovating Pinterest's Creator Program",
    kind: "deck",
    cta: "View presentation",
    format: "PDF · 18 slides",
    description: "The team's final presentation: problem, competitive landscape, the in-house affiliate program, and the financial projections behind the $18.15M estimate.",
    authorship: "Team deliverable",
    origin: "Original project material",
    href: "/docs/pinterest-pinsionaries-team-deck.pdf",
    download: true,
    preview: previews("pinterest-pinsionaries-team-deck", 18),
  },

  // ---------- Hospital ----------
  {
    id: "hospital-report",
    project: "hospital-analysis",
    title: "Operational and Financial Drivers of Hospital Operating Margin",
    kind: "report",
    cta: "Read original analysis",
    format: "PDF · 15 pages · 2 March 2026",
    description: "My final report: schema, cleaning SQL, exploratory queries, OLS and Ridge models, diagnostics, and the code behind each chart. It uses the label \"operating margin\" for what is really a net margin; see the correction on this page.",
    authorship: "Individual work",
    origin: "Original project material",
    href: "/docs/hospital-operating-margin-analysis.pdf",
    download: true,
    preview: previews("hospital-operating-margin-analysis", 15, "portrait"),
  },
  {
    id: "hospital-deck",
    project: "hospital-analysis",
    title: "The Economics of Care",
    kind: "deck",
    cta: "Explore research findings",
    format: "PDF · 17 slides",
    description: "A visual summary of the study built from the final report and my database notes: sample sizes at each step, ownership groups, model results, and limits. Like the paper, it still says \"operating margin\" for net income ÷ net patient revenue.",
    authorship: "Individual work",
    origin: "Made later for the portfolio",
    href: "/docs/economics-of-care-deck.pdf",
    download: true,
    preview: previews("economics-of-care-deck", 17),
  },

  // ---------- Paramount ----------
  {
    id: "paramount-deck",
    project: "paramount",
    title: "Paramount+: The Next Story Starts Here",
    kind: "deck",
    cta: "Read strategic recommendation",
    format: "PDF · 16 slides",
    description: "My synthesis of the team project and my individual strategic-action memo: the recommendation, the financial constraint, the audience, funding, and how to judge it.",
    authorship: "Individual work",
    origin: "Made later for the portfolio",
    href: "/docs/paramount-plus-strategy-deck.pdf",
    download: true,
    preview: previews("paramount-plus-strategy-deck", 16),
  },

  // ---------- Loopify ----------
  {
    id: "loopify-live",
    project: "loopify",
    title: "Loopify (live tool)",
    kind: "live",
    cta: "Open live project",
    format: "Live website · GitHub Pages",
    description: "Paste a YouTube video or playlist link and it loops.",
    authorship: "Individual work",
    origin: "Original project material",
    href: "https://leennoemialexandre.github.io/loopify/",
    external: true,
  },
  {
    id: "loopify-source",
    project: "loopify",
    title: "loopify repository",
    kind: "source",
    cta: "View source code",
    format: "GitHub repository · single HTML file",
    description: "The whole tool, including the loop logic shown in the simulation above.",
    authorship: "Individual work",
    origin: "Original project material",
    href: "https://github.com/leennoemialexandre/loopify",
    external: true,
  },
];

export function materialsFor(project: string) {
  return materials.filter((m) => m.project === project);
}

export function getMaterial(id: string) {
  const m = materials.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown material: ${id}`);
  return m;
}
