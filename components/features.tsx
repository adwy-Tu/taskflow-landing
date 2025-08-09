"use client"

import { motion } from "framer-motion"
import { CalendarCheck2, ListChecks, Timer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: CalendarCheck2,
    title: "Smart Scheduling",
    desc: "Automatically plan your day with intelligent prioritization and calendar sync.",
  },
  {
    icon: ListChecks,
    title: "Organize Anything",
    desc: "Projects, subtasks, labels, and filters—keep everything tidy and searchable.",
  },
  {
    icon: Timer,
    title: "Stay in Flow",
    desc: "Focus sessions, reminders, and progress insights keep you moving forward.",
  },
]

/**
 * Features section with motion-on-scroll cards.
 */
export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose TaskFlow?</h2>
        <p className="mt-3 text-gray-600">
          Designed to be fast, intuitive, and delightful—so you can focus on great work.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="h-full border-gray-200 shadow-sm transition hover:shadow-md">
              <CardHeader>
                <div className="inline-flex items-center justify-center rounded-md bg-emerald-50 p-2 ring-1 ring-emerald-100">
                  <f.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle className="mt-3 text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
