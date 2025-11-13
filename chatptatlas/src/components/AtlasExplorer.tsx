"use client";

import { useMemo, useState } from "react";
import type { AtlasNode, AtlasStage, AtlasSegment } from "@/data/atlas";
import { atlasNodes, atlasSegments, atlasStages } from "@/data/atlas";

const sorters: Record<
  "signal" | "adoption" | "differentiation",
  (a: AtlasNode, b: AtlasNode) => number
> = {
  signal: (a, b) => b.metrics.velocity - a.metrics.velocity,
  adoption: (a, b) => b.metrics.adoption - a.metrics.adoption,
  differentiation: (a, b) => b.metrics.differentiation - a.metrics.differentiation,
};

const stagePalette: Record<AtlasStage, string> = {
  Incubating: "bg-amber-500/20 text-amber-200 border border-amber-500/30",
  Ascending: "bg-sky-500/20 text-sky-100 border border-sky-500/30",
  Mature: "bg-emerald-500/20 text-emerald-100 border border-emerald-500/40",
};

export function AtlasExplorer() {
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState<AtlasSegment | "all">("all");
  const [stage, setStage] = useState<AtlasStage | "all">("all");
  const [sortKey, setSortKey] = useState<"signal" | "adoption" | "differentiation">(
    "signal",
  );
  const [region, setRegion] = useState("");

  const filtered = useMemo(() => {
    return atlasNodes
      .filter((node) => {
        const needle = search.trim().toLowerCase();
        if (
          needle &&
          ![
            node.name,
            node.tagline,
            node.segment,
            node.category,
            node.aiSurface.modelStack,
          ]
            .join(" ")
            .toLowerCase()
            .includes(needle)
        ) {
          return false;
        }
        if (segment !== "all" && node.segment !== segment) return false;
        if (stage !== "all" && node.stage !== stage) return false;
        if (region.trim()) {
          return node.regions.some((r) =>
            r.toLowerCase().includes(region.trim().toLowerCase()),
          );
        }
        return true;
      })
      .sort(sorters[sortKey]);
  }, [search, segment, stage, region, sortKey]);

  const marketMoments = useMemo(() => {
    const stageCounts = atlasStages.map((label) => ({
      label,
      count: atlasNodes.filter((node) => node.stage === label).length,
    }));
    const avgVelocity = Math.round(
      atlasNodes.reduce((acc, node) => acc + node.metrics.velocity, 0) /
        atlasNodes.length,
    );
    const frontier = [...atlasNodes]
      .sort((a, b) => b.metrics.differentiation - a.metrics.differentiation)
      .slice(0, 2);

    return { stageCounts, avgVelocity, frontier };
  }, []);

  return (
    <section className="atlas-container space-y-12" id="atlas">
      <div className="space-y-6 text-center lg:text-left">
        <span className="badge mx-auto lg:mx-0">Atlas Explorer</span>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-end">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Map the ChatPT landscape in a single pane
            </h2>
            <p className="text-lg text-slate-300">
              Filter by product segment, track regional expansion, and surface
              teams with the sharpest AI differentiation. Scores blend public
              traction signals with shipping velocity to spotlight momentum.
            </p>
          </div>
          <div className="card-glass p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Market Pulse
            </p>
            <div className="mt-4 grid gap-4">
              <div>
                <p className="text-3xl font-semibold text-slate-100">
                  {marketMoments.avgVelocity}
                  <span className="ml-2 text-sm font-normal text-slate-400">
                    avg shipping velocity
                  </span>
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Based on shipped launches and cadence in the last 90 days.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {marketMoments.stageCounts.map(({ label, count }) => (
                  <div key={label} className="rounded-2xl bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-100">
                      {count}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Frontier Picks
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {marketMoments.frontier.map((node) => (
                    <span
                      key={node.id}
                      className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-100"
                    >
                      {node.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-glass glow-ring border-white/10 bg-slate-900/60 p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
          <label className="flex flex-col gap-2 sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.26em] text-slate-400">
              Search
            </span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-indigo-400/40 focus:ring-indigo-400/30"
              placeholder="Search by product, segment, or capability"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.26em] text-slate-400">
              Segment
            </span>
            <select
              className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent focus:border-indigo-400/40 focus:ring-indigo-400/30"
              value={segment}
              onChange={(event) => setSegment(event.target.value as AtlasSegment | "all")}
            >
              <option value="all">All segments</option>
              {atlasSegments.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.26em] text-slate-400">
              Stage
            </span>
            <select
              className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent focus:border-indigo-400/40 focus:ring-indigo-400/30"
              value={stage}
              onChange={(event) => setStage(event.target.value as AtlasStage | "all")}
            >
              <option value="all">All maturity levels</option>
              {atlasStages.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.26em] text-slate-400">
              Region
            </span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent focus:border-indigo-400/40 focus:ring-indigo-400/30"
              placeholder="Filter by city or market"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.26em] text-slate-400">
              Sort By
            </span>
            <select
              className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent focus:border-indigo-400/40 focus:ring-indigo-400/30"
              value={sortKey}
              onChange={(event) =>
                setSortKey(event.target.value as "signal" | "adoption" | "differentiation")
              }
            >
              <option value="signal">Signal momentum</option>
              <option value="adoption">Adoption strength</option>
              <option value="differentiation">Differentiation</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid-auto-fit">
        {filtered.map((node) => (
          <article key={node.id} className="card-glass border-white/10 bg-slate-900/65 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">{node.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{node.tagline}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${stagePalette[node.stage]}`}>
                {node.stage}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full bg-white/5 px-3 py-1">
                {node.segment}
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                {node.category}
              </span>
              {node.regions.map((place) => (
                <span key={place} className="rounded-full bg-white/5 px-3 py-1">
                  {place}
                </span>
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-3 py-4">
                <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-indigo-200">
                  Adoption
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-indigo-100">
                  {node.metrics.adoption}
                </dd>
              </div>
              <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 px-3 py-4">
                <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-sky-100">
                  Velocity
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-sky-50">
                  {node.metrics.velocity}
                </dd>
              </div>
              <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-4">
                <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-fuchsia-100">
                  Edge
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-fuchsia-50">
                  {node.metrics.differentiation}
                </dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-4 rounded-2xl border border-white/5 bg-slate-950/40 p-4 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Orchestration
                </p>
                <p className="mt-1 leading-relaxed text-slate-200">
                  {node.aiSurface.orchestration}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {node.aiSurface.modalities.map((modality) => (
                  <span
                    key={modality}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {modality}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Model Stack
                </p>
                <p className="mt-1 text-slate-200">{node.aiSurface.modelStack}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                {node.lastSignal.title}
              </span>
              <span className="text-slate-500">{node.lastSignal.date}</span>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="rounded-3xl border border-dashed border-white/10 bg-slate-900/40 p-10 text-center text-sm text-slate-400">
          No teams match your filters just yet. Loosen the criteria to keep exploring the atlas.
        </p>
      )}
    </section>
  );
}
