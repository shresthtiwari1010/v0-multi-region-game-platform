import { Trophy, Zap, Shield, Star, Globe2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PlayerProfile() {
  return (
    <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-md overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-slate-900/40" />
      <CardHeader className="relative -mt-12">
        <div className="flex items-end justify-between">
          <Avatar className="h-24 w-24 border-4 border-slate-950 bg-slate-900 shadow-xl">
            <AvatarImage src="/player-avatar.jpg" />
            <AvatarFallback>EP</AvatarFallback>
          </Avatar>
          <div className="flex gap-2">
            <Badge className="bg-cyan-600">Elite Rank</Badge>
            <Badge variant="outline" className="border-slate-700 bg-slate-900 text-slate-400">
              Verified
            </Badge>
          </div>
        </div>
        <div className="mt-4">
          <CardTitle className="text-2xl font-bold">ElitePlayer_01</CardTitle>
          <p className="text-sm text-slate-400">Competitive Multi-Region Specialist</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Trophy className="h-3 w-3 text-amber-500" />
              Win Rate
            </div>
            <div className="mt-1 text-lg font-bold">68.4%</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Zap className="h-3 w-3 text-cyan-500" />
              Matches
            </div>
            <div className="mt-1 text-lg font-bold">1,240</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Enabled Regions</h4>
          <div className="flex flex-wrap gap-2">
            {["NA-East", "EU-West", "Asia-Tokyo"].map((region) => (
              <Badge key={region} variant="secondary" className="bg-slate-800 text-slate-300">
                <Globe2 className="mr-1 h-3 w-3" />
                {region}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Achievements</h4>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 shadow-inner">
              <Star className="h-5 w-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 shadow-inner">
              <Shield className="h-5 w-5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
