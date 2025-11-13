import Link from "next/link";

const keySignals = [
  {
    title: "Benchmarks mapped",
    value: "64",
    meta: "+18 QoQ",
  },
  {
    title: "Agent surfaces tracked",
    value: "212",
    meta: "Modalities + orchestrators",
  },
  {
    title: "Enterprise-ready",
    value: "42%",
    meta: "Atlas companies with SOC2",
  },
];

export function Hero() {
  return (
    <header className="atlas-container">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/65 px-8 pb-12 pt-16 shadow-[0_0_150px_rgba(99,102,241,0.15)]">
        <div className="absolute inset-0 -z-10 dot-grid opacity-40" aria-hidden />
        <div className="space-y-10 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 lg:justify-start">
            <span className="badge bg-indigo-500/20 text-indigo-100">Atlas v0.7</span>
            <span className="badge bg-white/10 text-slate-200">Updated weekly</span>
            <span className="badge bg-fuchsia-500/20 text-fuchsia-100">
              Agent landscape live
            </span>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 lg:mx-0">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              ChatPT Atlas maps the AI-native collaboration stack in real time
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              A living market map for builders and investors tracking how teams
              weave copilots into workflows. Compare orchestrations, maturity
              signals, and adoption velocity — all in one signal-rich atlas.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#atlas"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(79,70,229,0.45)] transition hover:bg-indigo-400"
            >
              Explore the Atlas
            </Link>
            <Link
              href="#signals"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium text-slate-100 transition hover:border-white/40 hover:bg-white/10"
            >
              See latest signals
            </Link>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:grid-cols-3">
            {keySignals.map((signal) => (
              <div key={signal.title} className="rounded-2xl bg-slate-950/60 p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
                  {signal.title}
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-50">
                  {signal.value}
                </p>
                <p className="mt-2 text-xs text-slate-400">{signal.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
