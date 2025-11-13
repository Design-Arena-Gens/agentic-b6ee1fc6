const signals = [
  {
    title: "Governance layers move from policy docs to executable guardrails",
    description:
      "Enterprises now expect deterministic pathways that describe what an agent can pull, trigger, or write. Platforms exposing policy visualizers see faster security approvals.",
    stat: "72% of mature platforms ship governance SDKs",
    date: "May 28, 2024",
  },
  {
    title: "Context windows converge on graph-style memory",
    description:
      "Teams are moving from raw RAG pipelines to graph-based memory condensers that balance freshness and safety. Providers with timeline-aware search are winning complex deals.",
    stat: "3.2× increase in graph queries QoQ",
    date: "May 14, 2024",
  },
  {
    title: "Revenue workflows demand closed-loop telemetry",
    description:
      "RevOps copilots now bundle scoring, execution, and measurement. Platforms integrating BI hooks prove ROI faster and see higher paid conversion.",
    stat: "38 new telemetry connectors this quarter",
    date: "April 30, 2024",
  },
];

export function SignalDeck() {
  return (
    <section id="signals" className="atlas-container space-y-8">
      <div className="space-y-4">
        <span className="badge">Signal Briefing</span>
        <div className="space-y-3">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-50">
            Weekly pulse across the ChatPT ecosystem
          </h2>
          <p className="text-lg text-slate-300">
            Curated operating notes summarizing what product leaders are
            shipping, which governance patterns land, and how AI surfaces are
            evolving.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <div className="space-y-6">
          {signals.map((signal) => (
            <article key={signal.title} className="card-glass p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {signal.date}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-100">
                {signal.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {signal.description}
              </p>
              <p className="mt-4 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-medium text-emerald-100">
                {signal.stat}
              </p>
            </article>
          ))}
        </div>
        <aside className="card-glass flex flex-col gap-4 p-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Operator Notebook
            </p>
            <p className="mt-3 text-base text-slate-300">
              Deep dives on go-to-market playbooks, procurement blockers, and
              compliance architecture — distilled down to actionable patterns.
            </p>
          </div>
          <div className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-100">
              Atlas Research Drop
            </p>
            <p className="mt-3 text-base text-fuchsia-50">
              Next briefing focuses on multi-agent QA trails with transparent
              audit logs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Upcoming Sessions
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>June 12 — Buyer panel on AI trustworthiness</li>
              <li>June 20 — Playbook teardown: support agent swarms</li>
              <li>June 27 — Live benchmark lab (Workspace OS)</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
