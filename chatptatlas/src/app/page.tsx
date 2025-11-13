import { Hero } from "@/components/Hero";
import { AtlasExplorer } from "@/components/AtlasExplorer";
import { SignalDeck } from "@/components/SignalDeck";
import { ComparativeStacks } from "@/components/ComparativeStacks";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="space-y-24 pb-32">
      <Hero />
      <AtlasExplorer />
      <ComparativeStacks />
      <SignalDeck />
      <FooterCTA />
    </main>
  );
}
