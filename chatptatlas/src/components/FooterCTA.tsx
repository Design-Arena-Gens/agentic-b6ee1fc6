import Link from "next/link";

export function FooterCTA() {
  return (
    <section className="atlas-container">
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-indigo-500/20 p-10 text-center lg:text-left">
        <div className="absolute inset-y-0 -right-10 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" aria-hidden />
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-100">
            Stay in the loop
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Get the ChatPT Atlas weekly signal drop
          </h2>
          <p className="text-sm text-indigo-100/90">
            Every Friday we ship fresh benchmarks, procurement intel, and
            architecture breakdowns sourced from operators building the next
            wave of AI-native collaboration platforms.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-indigo-700 transition hover:bg-slate-100"
            >
              Join the briefing
            </button>
          </form>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-indigo-100/60">
            No spam. Cancel anytime.
          </p>
        </div>
      </div>
      <footer className="mt-12 flex flex-col items-center gap-3 text-center text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ChatPT Atlas. Curated by operator analysts.</p>
        <div className="flex gap-4">
          <Link href="#atlas" className="underline-offset-2 hover:underline">
            Atlas
          </Link>
          <Link href="#signals" className="underline-offset-2 hover:underline">
            Signals
          </Link>
          <a
            href="mailto:hello@chatptatlas.com"
            className="underline-offset-2 hover:underline"
          >
            Tips
          </a>
        </div>
      </footer>
    </section>
  );
}
