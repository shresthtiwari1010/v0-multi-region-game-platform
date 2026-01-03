"use client"

import { useState } from "react"
import { Send, Globe, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: string
  user: string
  region: string
  text: string
  time: string
  isElite: boolean
}

export function GlobalChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: "ShadowStriker",
      region: "NA-East",
      text: "Anyone for a cross-region tournament tonight?",
      time: "10:05 AM",
      isElite: true,
    },
    {
      id: "2",
      user: "Yuki_Kaze",
      region: "Asia-Tokyo",
      text: "I'm down, ping is looking solid today!",
      time: "10:06 AM",
      isElite: true,
    },
    {
      id: "3",
      user: "Hans_Gruber",
      region: "EU-Central",
      text: "Need a support player for the Frankfurt cluster.",
      time: "10:08 AM",
      isElite: false,
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    const newMessage: Message = {
      id: Date.now().toString(),
      user: "ElitePlayer_01",
      region: "EU-West",
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isElite: true,
    }
    setMessages([...messages, newMessage])
    setInputValue("")
  }

  return (
    <Card className="h-[600px] border-slate-800 bg-slate-900/50 backdrop-blur-md">
      <CardHeader className="border-b border-slate-800 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Globe className="h-4 w-4" />
            </div>
            <CardTitle className="text-lg">Global Bridge Chat</CardTitle>
          </div>
          <Badge variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
            1,248 Online
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex h-[calc(600px-74px)] flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="group flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-500">{msg.region}</span>
                  <span className={`text-sm font-bold ${msg.isElite ? "text-cyan-400" : "text-slate-300"}`}>
                    {msg.user}
                  </span>
                  {msg.isElite && <Shield className="h-3 w-3 text-cyan-500" />}
                  <span className="text-[10px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {msg.time}
                  </span>
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-slate-800/50 px-3 py-2 text-sm text-slate-200">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t border-slate-800 p-4">
          <div className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="border-slate-800 bg-slate-950 text-slate-200 focus-visible:ring-cyan-500/50"
            />
            <Button size="icon" onClick={handleSendMessage} className="bg-cyan-600 hover:bg-cyan-500">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
