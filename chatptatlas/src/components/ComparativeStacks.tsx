const stackComparisons = [
  {
    title: "Orchestration",
    description:
      "Most platforms converge on policy-aware routers. Frontier teams expose SDKs so customers can swap reasoning engines while keeping governance intact.",
    items: [
      { label: "Policy router", coverage: "84%" },
      { label: "Action sandbox", coverage: "62%" },
      { label: "Human handoff", coverage: "91%" },
    ],
  },
  {
    title: "Memory + Retrieval",
    description:
      "Graph-centric memory is overtaking naive vector search. Expect hybrid stores with freshness scoring and temporal pivots.",
    items: [
      { label: "Graph memory", coverage: "58%" },
      { label: "Realtime sync", coverage: "46%" },
      { label: "Data residency controls", coverage: "72%" },
    ],
  },
  {
    title: "Surface Area",
    description:
      "Winning products layer AI into rituals users already run: standups, pipeline reviews, retros, incident rooms.",
    items: [
      { label: "Docs", coverage: "93%" },
      { label: "Automations", coverage: "68%" },
      { label: "Analytics loop", coverage: "54%" },
    ],
  },
];

export function ComparativeStacks() {
  return (
    <section className="atlas-container space-y-8">
      <div className="space-y-3">
        <span className="badge">Stack Benchmarks</span>
        <h2 className="text-4xl font-semibold tracking-tight text-slate-50">
          How leading ChatPT platforms architect their AI stack
        </h2>
        <p className="text-lg text-slate-300">
          Compare orchestration patterns, memory strategies, and surface area
          coverage to understand how differentiated each product is today.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {stackComparisons.map((segment) => (
          <article key={segment.title} className="card-glass p-6">
            <h3 className="text-xl font-semibold text-slate-100">
              {segment.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {segment.description}
            </p>
            <ul className="mt-6 space-y-4">
              {segment.items.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">{item.label}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {item.coverage}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
