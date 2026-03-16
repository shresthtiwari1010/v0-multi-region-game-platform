```
"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2, XCircle, AlertCircle, TrendingUp, Zap, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEligibilityCheck } from "@/hooks/useEligibilityCheck"

export function MatchmakingCriteria() {
  const { isChecking, eligibility, handleCheck, resetEligibility } = useEligibilityCheck()

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Check Your Eligibility</h2>
        <p className="mt-4 text-slate-400">
          Cross-region play requires meeting minimum performance benchmarks to ensure game quality for everyone.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <CriteriaCard
          title="Competitive Rank"
          value={eligibility ? `${eligibility.rank}%` : "--"}
          description="Top 20% of regional leaderboard"
          icon={<Trophy className="h-5 w-5 text-amber-400" />}
          progress={eligibility?.rank || 0}
          status={eligibility ? (eligibility.rank >= 80? "pass" : "fail") : "pending"}
        />
        <CriteriaCard
          title="Network Latency"
          value={eligibility ? `${eligibility.latency}ms` : "--"}
          description="Consistent sub-50ms regional ping"
          icon={<Zap className="h-5 w-5 text-cyan-400" />}
          progress={eligibility ? 100 - eligibility.latency : 0}
          status={eligibility ? (eligibility.latency <= 50? "pass" : "fail") : "pending"}
        />
        <CriteriaCard
          title="Player Reputation"
          value={eligibility ? `${eligibility.reputation}/100` : "--"}
          description="Clean history and sportsmanship"
          icon={<TrendingUp className="h-5 w-5 text-emerald-400" />}
          progress={eligibility?.reputation || 0}
          status={eligibility ? (eligibility.reputation >= 90? "pass" : "fail") : "pending"}
        />
      </div>

      <div className="flex flex-col items-center justify-center pt-8">
        {!eligibility ? (
          <Button
            size="lg"
            onClick={handleCheck}
            disabled={isChecking}
            className="h-12 min-w-[200px] bg-cyan-600 hover:bg-cyan-500"
          >
            {isChecking ? "Scanning Profile..." : "Run Eligibility Scan"}
          </Button>
        ) : (
          <div className="flex flex-col items-center gap-6 text-center">
            {eligibility.isEligible ? (
              <>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400">Eligibility Confirmed</h3>
                  <p className="mt-2 text-slate-400">You've met all criteria for the Multi-Region Access Program.</p>
                </div>
                <Button size="lg" className="bg-cyan-600 px-10 hover:bg-cyan-500">
                  Enter Global Hub
                </Button>
              </>
            ) : (
              <>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                  <XCircle className="h-12 w-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-rose-400">Criteria Not Met</h3>
                  <p className="mt-2 text-slate-400">Keep playing to improve your rank and reputation.</p>
                </div>
                <Button
                  variant="outline"
                  onClick={resetEligibility}
                  className="border-slate-800 bg-transparent"
                >
                  Try Again
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function CriteriaCard({
  title,
  value,
  description,
  icon,
  progress,
  status,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  progress: number
  status: "pass" | "fail" | "pending"
}) {
  return (
    <Card className="border-slate-800 bg-slate-900/40 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle className="text-sm font-medium text-slate-300">{title}</CardTitle>
          </div>
          {status === "pass" && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
          {status === "fail" && <XCircle className="h-4 w-4 text-rose-500" />}
          {status === "pending" && <AlertCircle className="h-4 w-4 text-slate-600" />}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold">{value}</div>
        <Progress value={progress} className="h-1.5 bg-slate-800" />
        <p className="text-xs text-slate-500">{description}</p>
      </CardContent>
    </Card>
  )
}

// hooks/useEligibilityCheck.ts
import { useState } from "react"

export function useEligibilityCheck() {
  const [isChecking, setIsChecking] = useState(false)
  const [eligibility, setEligibility] = useState<{
    rank: number
    latency: number
    reputation: number
    isEligible: boolean
  } | null>(null)

  const handleCheck = () => {
    setIsChecking(true)
    setTimeout(() => {
      setEligibility({
        rank: 85,
        latency: 24,
        reputation: 98,
        isEligible: true,
      })
      setIsChecking(false)
    }, 2000)
  }

  const resetEligibility = () => {
    setEligibility(null)
  }

  return { isChecking, eligibility, handleCheck, resetEligibility }
}
```