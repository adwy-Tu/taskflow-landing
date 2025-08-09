"use client"

import { motion } from "framer-motion"
import { Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["Unlimited tasks", "1 project", "Basic reminders"],
    cta: "Choose Plan",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mo",
    features: ["Unlimited projects", "Focus sessions", "Calendar sync", "Priority support"],
    cta: "Choose Plan",
    highlight: true,
  },
  {
    name: "Team",
    price: "$19",
    period: "/user/mo",
    features: ["Team workspaces", "Permissions", "Advanced analytics", "SAML SSO"],
    cta: "Choose Plan",
    highlight: false,
  },
]

/**
 * Pricing section with three plans and highlighted Pro plan.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple Pricing</h2>
        <p className="mt-3 text-gray-600">Start free. Upgrade anytime as your needs grow.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card
              className={[
                "h-full border-gray-200 shadow-sm transition hover:shadow-md",
                p.highlight ? "ring-2 ring-emerald-500/60" : "",
              ].join(" ")}
            >
              <CardHeader className="relative">
                <CardTitle className="flex items-center justify-between">
                  <span>{p.name}</span>
                  {p.highlight && (
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      Recommended
                    </Badge>
                  )}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500">{p.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={[
                    "mt-6 w-full",
                    p.highlight
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
                      : "",
                  ].join(" ")}
                  variant={p.highlight ? "default" : "outline"}
                >
                  {p.cta}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
