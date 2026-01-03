import {
  Globe,
  ShieldCheck,
  MessageSquare,
  Zap,
  ChevronRight,
  Activity,
  Users,
  Gamepad2,
  Headphones,
  Sword,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MatchmakingCriteria } from "@/components/matchmaking-criteria"
import { GlobalChat } from "@/components/global-chat"
import { PlayerProfile } from "@/components/player-profile"
import { DiscordIntegration } from "@/components/discord-integration"

function GamingBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Immersive Orbs - Inspired by Design Inspiration Image 1 & 3 */}
      <div className="absolute top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-accent-neon/10 blur-[120px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating Gamer Motifs */}
      <div className="absolute top-[15%] left-[10%] opacity-10 animate-float">
        <Gamepad2 className="w-24 h-24 text-primary" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[20%] right-[15%] opacity-10 animate-float" style={{ animationDelay: "1s" }}>
        <Headphones className="w-20 h-20 text-accent-neon" strokeWidth={1} />
      </div>
      <div className="absolute top-[40%] right-[10%] opacity-5 animate-float" style={{ animationDelay: "3s" }}>
        <Sword className="w-16 h-16 text-accent-lime" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[10%] left-[20%] opacity-5 animate-float" style={{ animationDelay: "4s" }}>
        <Trophy className="w-28 h-28 text-primary" strokeWidth={1} />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/abstract-grid.png')] bg-repeat opacity-[0.02] mix-blend-overlay" />

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent bg-[length:100%_4px] pointer-events-none" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      <GamingBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Globe className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              GLOBAL<span className="text-primary">HUB</span>
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#eligibility"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Eligibility
            </a>
            <a
              href="#community"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Community
            </a>
            <a
              href="#regions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Network
            </a>
            <Button variant="outline" size="sm" className="border-white/10 bg-white/5 hover:bg-white/10">
              Launch App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative h-[600px] w-[600px]">
            <div
              className="absolute inset-0 rounded-full border border-primary/20 animate-spin"
              style={{ animationDuration: "30s" }}
            />
            <div
              className="absolute inset-4 rounded-full border border-accent-neon/20 animate-spin"
              style={{ animationDuration: "20s", animationDirection: "reverse" }}
            />
            <div
              className="absolute inset-12 rounded-full border border-accent-lime/10 animate-spin"
              style={{ animationDuration: "40s" }}
            />
          </div>
        </div>

        <div className="container relative z-10 flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-8 border-primary/30 bg-primary/10 px-6 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md glow-primary"
          >
            <Zap className="mr-2 h-3.5 w-3.5 fill-current" />
            V4 Network Architecture Now Live
          </Badge>
          <h1 className="max-w-5xl text-balance text-7xl font-black tracking-tighter sm:text-9xl md:leading-[0.85] uppercase italic">
            LIMITLESS{" "}
            <span className="bg-gradient-to-r from-primary via-accent-neon to-accent-lime bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              FRONTIERS
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg font-medium text-muted-foreground sm:text-xl">
            Experience ultra-low latency cross-region play. Our intelligent bridge connects elite players through a
            high-performance mesh network.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              size="xl"
              className="h-14 rounded-full bg-primary px-10 text-lg font-bold hover:scale-105 transition-transform"
            >
              Join the Network <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="h-14 rounded-full border-white/10 bg-white/5 px-10 text-lg font-bold backdrop-blur-sm hover:bg-white/10"
            >
              Live Global Map
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-24 grid w-full max-w-4xl grid-cols-2 gap-8 border-y border-white/5 py-12 md:grid-cols-4">
            {[
              { label: "Active Regions", value: "24+", icon: Globe },
              { label: "Elite Players", value: "1.2M", icon: Users },
              { label: "Avg Latency", value: "18ms", icon: Activity },
              { label: "Up-time", value: "99.9%", icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="h-5 w-5 text-primary/60" />
                <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Profile and Chat Section */}
      <section id="community" className="relative border-y border-white/5 bg-white/[0.01] py-32 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic sm:text-7xl">
              <span className="text-primary">01</span> ELITE HUB
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Access the global nerve center once you meet our performance standards.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <PlayerProfile />
            </div>
            <div className="lg:col-span-8 flex flex-col gap-12">
              <GlobalChat />
              <DiscordIntegration />
            </div>
          </div>
        </div>
      </section>

      {/* Matchmaking Criteria Section */}
      <section id="eligibility" className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-[2rem] p-8 md:p-12">
            <MatchmakingCriteria />
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="mb-20 flex flex-col items-end justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl uppercase">Node Status</h2>
              <p className="mt-4 text-muted-foreground">
                Real-time health monitoring of our global edge infrastructure.
              </p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
              View Network Status <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                region: "North America",
                city: "Virginia, USA",
                ping: "12ms",
                status: "Operational",
                load: "42%",
                color: "text-primary",
              },
              {
                region: "Europe Central",
                city: "Frankfurt, GER",
                ping: "8ms",
                status: "Optimal",
                load: "18%",
                color: "text-accent-neon",
              },
              {
                region: "Asia Pacific",
                city: "Tokyo, JPN",
                ping: "22ms",
                status: "Operational",
                load: "65%",
                color: "text-accent-lime",
              },
              {
                region: "Oceania",
                city: "Sydney, AUS",
                ping: "15ms",
                status: "Operational",
                load: "29%",
                color: "text-primary",
              },
            ].map((item) => (
              <Card
                key={item.region}
                className="group relative overflow-hidden glass-card transition-all hover:scale-105 hover:border-primary/40"
              >
                {/* Added background glow on hover for cards */}
                <div
                  className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0`}
                />
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-tighter"
                    >
                      {item.ping}
                    </Badge>
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
                  </div>
                  <CardTitle className="mt-6 text-xl font-bold tracking-tight">{item.region}</CardTitle>
                  <CardDescription className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.city}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Server Load</span>
                      <span className="font-bold">{item.load}</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <div className="h-full bg-primary transition-all duration-1000" style={{ width: item.load }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Elite Criteria</h3>
              <p className="leading-relaxed text-slate-400">
                To maintain high-quality matches, cross-region play is reserved for players who meet specific skill and
                stability benchmarks.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Smart Matchmaking</h3>
              <p className="leading-relaxed text-slate-400">
                Our algorithm intelligently pairs players from different regions based on latency tolerance and
                competitive balance.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Global Chat & Discord</h3>
              <p className="leading-relaxed text-slate-400">
                Once qualified, gain access to our integrated global chat or jump into dedicated Discord channels to
                coordinate with your new allies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 px-8 py-20 text-center">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
          <h2 className="z-10 text-4xl font-bold sm:text-5xl">Ready to Go Global?</h2>
          <p className="z-10 mt-6 max-w-xl text-lg text-slate-400">
            Check your eligibility and start connecting with players from every corner of the world.
          </p>
          <div className="z-10 mt-10 flex gap-4">
            <Button size="lg" className="bg-cyan-600 px-8 hover:bg-cyan-500">
              Check Eligibility
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 py-12">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>© 2026 Global Gaming Hub. All rights reserved. Connecting the world, one frame at a time.</p>
        </div>
      </footer>
    </div>
  )
}
