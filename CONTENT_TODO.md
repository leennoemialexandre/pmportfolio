# CONTENT_TODO (private, not served by the site)

Unresolved items, source conflicts, and missing assets. Nothing in this file appears on a page.
Note: if this repository is public on GitHub, this file is visible there. Move it or make the repo private if that matters.

## Assets still needed

| Item | Where it's used | Current state |
|---|---|---|
| Résumé PDF | `/resume` download button | No file supplied. The page shows an HTML résumé; the download button stays hidden until `site.resumePdf` in `content/site.ts` points to a file in `/public`. |
| Headshot or personal photo (optional) | About page | None supplied. I didn't crop the team slide photo without your OK. |
| Production domain | Social previews, sitemap | Set `NEXT_PUBLIC_SITE_URL` in Vercel once known. |
| Loopify interface screenshot | Loopify page | Not supplied. The page uses a simulation of its loop logic plus a real code excerpt. |
| Original micro:bit pillbox photo | TAFIA story | Not supplied. |
| Entry-Preneur blog example or archive | Entry-Preneur page | Not supplied. |
| Paramount memo or deck excerpt | Paramount page | Not supplied. |

## Links to confirm

- Live project URLs (TAFIA on Lovable, Concentration 64 and Loopify on GitHub Pages, Jobaholic on Vercel) were supplied by you and are linked. This environment's network policy blocked them, so I couldn't load them myself. Worth a click-through before sharing. The Jobaholic Vercel URL also settles the old site's github.io link.

- Email `leenalexia@outlook.com` and LinkedIn `linkedin.com/in/leennoemialexandre/` confirmed by you. GitHub `github.com/leennoemialexandre` confirmed by cloning its repos.

## Facts to confirm or recover

### TAFIA
- **~25% engagement increase:** now published. Source (from you): a session timer added in Lovable that logged time in the app until exit, comparing the medication-only version with the games + chatbot version. Still unknown, and worth having ready for interviews: how many seniors and sessions; whether the 25% is the average or the median; whether the same people used both versions; the raw before/after times; and whether participants knew about the timer. The public wording deliberately says "session timer", not "secret".
- **Marketing results conflict:** the deck says $100 of Meta ads produced 98 page views and 11 sign-ups (~11% conversion), plus a 49- or 50-second average session and 0% waitlist drop-off. The draft says four creatives and 1,000+ impressions in three days, with ~3% conversion. The public page says only that game-focused messaging drew the stronger early interest.
- **Team size:** the deck's team slide shows three co-founders; the draft says four people. The public page uses four.
- **Games:** the deck shows Memory Match; the draft names word searches and puzzles. The `tafiaonline` repo has both, plus others. The walkthrough uses a memory game (labeled illustrative); the story uses the draft's wording.
- Medium-tier trigger examples and complete matching logic.
- Interview recruitment, the senior/caregiver split, and unique participant count (50+ is interviews, not unique people).
- Reflection paragraphs come from your draft's *proposed* reflections. Please approve or rewrite them, since they're in first person.
- Privacy: the medication name and your name are blurred in the screenshots. The Customer Story slide (family photo and health details) and the team photos are not used.

### Concentration 64
- **Dataset counts:** the draft says 194 countries and 108,000+ names. The actual files have **196** non-empty country lines and **107,973** name lines, about 10,400 of which are case-only duplicates. The site says "196" and "about 108,000".
- Calendar dates and version history for the five iterations and three versions.
- The two of the four bugs that aren't identified.
- Grades rising from C/D to A/B and a ~3-hour TikTok reduction are **excluded** pending measurement context.
- One addition to the ported game: it stops if the visitor switches tabs. This is disclosed on the page.

### Jobaholic
- Origin story: what prompted the build.
- One concrete feedback → change → result example.
- Supabase row-level security policies (not in the repo).
- Active user count. The old site said ~20 users; that isn't published.

### Pinterest
- The 3% commission rationale and who pays it.
- Course name, dates, team size, and the division of work.
- The deck's indirect upside scenarios ($250M–$500M ad revenue) are not presented, because they aren't bottom-up modeled.
- The draft said upstream inputs weren't recoverable. The deck supplies them (25%, 1.5%, $50, 50%), so the page uses the deck's chain.

### Hospital analysis
- Source-field verification for net income ÷ net patient revenue. The site calls it the "analyzed margin ratio" and notes the paper's "operating margin" label.
- Row counts at each filter step (not recorded; none are shown).
- **Observation count:** the final sample is 3,103, but the model-2 output shows 3,033 observations. The page explains this as listwise deletion of missing predictors. Please confirm.
- **Ownership labels in the paper differ:** the SQL text calls type 5 "Proprietary–Partnership"; the chart text calls it "for-profit chain". The site uses the SQL description.
- The draft didn't know about the multivariate OLS, Ridge, and train/test work. The supplied paper documents them, so the site includes them.

### Entry-Preneur
- Role title and dates. The old site says "Product Management Intern, Aug 2023 – Feb 2024"; the draft says to confirm.
- The ~10% sales figure is excluded; the public page makes no causal sales claim.
- Recruitment, interview guide, and the competitor matrix.

### Paramount
- Dates, team size, original sources, and the memo itself.

### About and résumé
- Roles and dates come from your previous portfolio. Crisis Text Line metrics (100+ conversations, 90%+ positive feedback) and the BlackGen "leading minority-owned" description were left out until confirmed.
- The previous site described TAFIA as "Sep 2025 – Present"; the site follows the draft (Sep–Dec 2025).
- The previous site's TAFIA claims ("AI virtual care companion", "escalation logic", "~11% conversion") conflict with the draft and were not used.

## Not included by design
- GuardAI legal memo (not in the requested work list).
- Tradeparency (separate project in this repository).

## After the competition review (Oct 17)

Fixed in the site without new evidence:
- **Hospital:** the metric is relabeled "net margin on patient revenue" (net income ÷ net patient revenue is not operating margin), with a "what I got wrong" decision note. Three overreaching sentences were tightened (mean vs median, sample size vs stability, R² vs omitted factors).
- **Concentration 64:** confirmed from the original code that a normal game always ends in a DRAW, because the CPU always scores after you and can't time out. This is now disclosed, with two proposed fixes.
- **Jobaholic:** the sample opens on a populated application, and empty prep offers a jump to the example. The "response rate" flaw is shown next to a proposed history-based fix (sample only; the live app is unchanged).
- **TAFIA:** a new lead decision note confronts delivery versus engagement as two hypotheses we bundled.
- **Pinterest:** added a "what the model leaves out" section (creator participation, merchant coverage, attributable purchases) and a single $50 transaction under two readings of who pays the 3%.
- **Paramount:** replaced the unweighted levers with a plain recommendation and cost table.
- **Loopify:** states the competitive question (YouTube's native looping) honestly.
- **About/Contact:** removed "close seconds".
- **Résumé:** project inventory reduced to a link row; title fixed.

**Please approve the new first-person analysis** (TAFIA "decision I'd challenge", the C64 flaw, the Jobaholic fix, the Pinterest gaps and transaction). I wrote these from the code and the existing materials; they need your voice and agreement.

Still needs you (the review's remaining asks):
1. **Hospital:** the original CSV and notebook, so I can rebuild the true operating-margin measure, reconcile row counts per filter, check join cardinality, and run threshold sensitivity, then update the paper and charts.
2. **TAFIA:** reminder timing (how long after opening a prompt appeared); baseline and after session times; how many people or sessions; whether the groups were comparable; whether more people actually saw and answered reminders; why delivery outside the site wasn't feasible; and who the 50+ interviewees were and how they were recruited.
3. **Jobaholic:** one real feedback → change → result example; whether you verified Supabase row-level security. If you want the response-rate fix in the live app, add the jobaholic repo to a session and I can implement it.
4. **Original artifacts** for 2–3 lead cases: a research synthesis, a requirement with acceptance criteria, a MoSCoW board, a Jira excerpt, a before/after screen.
5. **Pinterest:** your decision criteria (what would make you recommend or reject it) and why build rather than partner.
6. **Entry-Preneur:** interviewee segments, how trust showed up in the interviews, a blog example, and what you personally wrote.
7. **Paramount:** the memo itself, plus dated audience and financial exhibits.
8. **Résumé:** the PDF and real accomplishment bullets for Residential Life, BlackGen, and Crisis Text Line.
9. **Concentration 64:** student age range and setting, the version chronology, and how you observed students researching answers.

## Project materials tracker

| Project | Materials on the site | Still welcome |
|---|---|---|
| TAFIA | Live prototype | Research synthesis, MoSCoW board, requirements/Jira excerpt (the final deck is held back: its customer-story slide shows a family member's photo and health details) |
| Concentration 64 | Live original game, source repo | Version history or screenshots of earlier versions |
| Jobaholic | Live app, source repo | A feedback → change example |
| Pinterest | Original team deck (18 slides) | The financial model spreadsheet |
| Hospital | Original final report (15 pp), "The Economics of Care" deck (17 slides) | Original CSV and notebook |
| Paramount | "The Next Story Starts Here" deck (16 slides) | The original team deck, script, planner, and the individual strategic-action memo |
| Entry-Preneur | None yet | Research synthesis, blog example, competitor matrix |
| Loopify | Live tool, source repo | — |

### Discrepancies and questions from batch 1
- **Origin of the two new decks.** Paramount+ "The Next Story Starts Here" cites the "original team deck", "script", "planner", and "Alexandre strategic action" in its footers, and "The Economics of Care" cites the "final report" and "database working notes". Both are labeled **"Made later for the portfolio"**. If either was an original class deliverable, tell me and I'll relabel it.
- **"Operating margin" in both hospital files.** The paper and the Economics of Care deck still call net income ÷ net patient revenue "operating margin". The site explains the correction, and both material descriptions point it out. Consider updating the deck.
- **Hospital sample sizes resolved by the deck:** 3,123 screened, 3,103 analytic, 3,033 in the baseline OLS, and all 3,103 in the ownership model. My earlier caption guessed that rows were dropped for missing predictors; it now just reports the counts. The reason the baseline used 3,033 is still unknown.
- **Paramount date and context added:** Spring 2024, written as Bob Bakish's exit was reported.
- **What came from the original Paramount work vs. the later deck.** The deck marks these as proposed later additions: the discover/support/commission pipeline, commissioning criteria, staged funding, the first-year plan, and the scorecard. The site presents them as "What I added later". The 18–34 audience and the non-core asset sales are attributed to the original planner.
- **Paramount deck images:** Paramount's logo, Variety and LA Times headline screenshots, and show posters (iCarly, Frasier, BoJack Horseman, Stranger Things). This is normal for an academic case study, but it's third-party imagery. Fine to keep for a portfolio; just be aware.
- **Privacy check:** no participant data, credentials, or personal information in this batch. The hospital paper names your instructor (surname only), which is normal for coursework.
- **The individual Paramount memo** isn't among the files, so the page doesn't link to it. Send it and I'll place it beside the "My memo" section.
