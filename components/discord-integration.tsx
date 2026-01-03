import { MessageCircle, ExternalLink, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DiscordIntegration() {
  const channels = [
    { name: "Global General", members: "12.4k", active: "2.1k", description: "All-region hangout" },
    { name: "Elite Strategists", members: "1.2k", active: "450", description: "High-rank coordination", elite: true },
    { name: "NA-EU Scrims", members: "3.5k", active: "890", description: "Cross-Atlantic practice" },
    { name: "Asia-Pacific Hub", members: "5.8k", active: "1.4k", description: "East meets West" },
  ]

  return (
    <Card className="border-slate-800 bg-[#5865F2]/5 backdrop-blur-md transition-all hover:bg-[#5865F2]/10">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5865F2] text-white shadow-lg">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Join the HQ Discord</CardTitle>
            <CardDescription className="text-slate-400">
              Sync your account and unlock regional channels.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="group relative rounded-xl border border-slate-800 bg-slate-950/50 p-4 transition-all hover:border-[#5865F2]/50"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="flex items-center gap-1.5 font-bold text-slate-200">
                    #{channel.name}
                    {channel.elite && <Sparkles className="h-3.5 w-3.5 text-amber-400" />}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">{channel.description}</p>
                </div>
                <Badge variant="outline" className="border-slate-800 bg-slate-900 text-slate-400">
                  <Users className="mr-1 h-3 w-3" />
                  {channel.active}
                </Badge>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-950/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Button size="sm" variant="secondary" className="bg-white text-black hover:bg-slate-200">
                  Jump to Channel
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-dashed border-slate-800 p-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h5 className="font-semibold text-slate-300">Need a Private Channel?</h5>
            <p className="text-sm text-slate-500">Elite members can create temporary cross-region voice hubs.</p>
          </div>
          <Button className="bg-[#5865F2] hover:bg-[#4752C4]">Link Discord Account</Button>
        </div>
      </CardContent>
    </Card>
  )
}
