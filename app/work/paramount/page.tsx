import type { Metadata } from "next";
import { ProjectShell } from "@/components/ProjectShell";
import { getProject } from "@/content/projects";
import { paramountStory } from "@/content/stories/supporting";

const meta = getProject("paramount");

export const metadata: Metadata = {
  title: "Paramount",
  description: "A team strategy analysis of Paramount's traditional TV and streaming tension, plus an individually written memo on new creative voices.",
  openGraph: { title: "Paramount · Leen-Noemi Alexandre", description: meta.summary },
};

export default function ParamountPage() {
  return (
    <ProjectShell
      meta={meta}
      headline={
        <>
          Building for <span className="hl">future</span> audiences while managing the business you have
        </>
      }
      lede={
        <p>
          An NYU Stern corporate strategy project on the pull between traditional TV and streaming. Alongside the team&rsquo;s recommendations, I wrote my
          own memo on new creative talent and mentorship.
        </p>
      }
      facts={[
        { term: "Context", detail: "NYU Stern group project" },
        { term: "My part", detail: "Research, audience analysis, recommendations, presentation" },
        { term: "Individual", detail: "Strategic-action memo" },
        { term: "Status", detail: "Academic recommendation only" },
      ]}
      experience={{
        title: "The recommendation, and what it costs",
        intro: "The short version of the trade our team proposed. The full story covers the evidence and its gaps.",
        content: (
          <div className="table-wrap" role="region" aria-label="Recommendation summary" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Question</th>
                  <th scope="col">Our answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">The tension</th>
                  <td>Traditional TV still carried major revenue but faced structural decline; streaming was growing with direct-to-consumer losses.</td>
                </tr>
                <tr>
                  <th scope="row">The diagnosis</th>
                  <td>An older-skewing audience and a content slate leaning heavily on nostalgia, reboots, and spinoffs.</td>
                </tr>
                <tr>
                  <th scope="row">The recommendation</th>
                  <td>Shift investment toward new creative voices and original storytelling for future streaming audiences, backed by mentorship to develop that talent.</td>
                </tr>
                <tr>
                  <th scope="row">What it costs</th>
                  <td>Funding original content while streaming was losing money, which is why divestitures and funding choices came into the discussion.</td>
                </tr>
                <tr>
                  <th scope="row">What we didn&rsquo;t prove</th>
                  <td>That original content would outperform familiar franchises financially, or what the right mix between them is.</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      }}
      story={paramountStory}
      storyIntro="The tension, our analysis, the portfolio tradeoff, my memo, and what the work doesn't prove."
    />
  );
}
