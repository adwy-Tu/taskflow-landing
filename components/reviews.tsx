"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * Reviews/testimonials with responsive layout and soft shadows.
 */
export default function Reviews() {
  const testimonials = [
    {
      name: "Alex Johnson",
      quote:
        "TaskFlow has completely transformed how I plan my week. I finish work earlier and feel in control.",
      avatar: "/alex-johnson-portrait.png",
      fallback: "AJ",
    },
    {
      name: "Priya Sharma",
      quote:
        "The focus sessions and smart scheduling are game-changers. I finally ship consistently!",
      avatar: "/portrait-priya-sharma.png",
      fallback: "PS",
    },
    {
      name: "Marcus Lee",
      quote:
        "Beautiful design and speedy performance. TaskFlow is the only tool I recommend to my team.",
      avatar: "/marcus-lee-portrait.png",
      fallback: "ML",
    },
  ]

  return (
    <section id="reviews" className="relative mx-auto max-w-7xl px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by Our Users</h2>
        <p className="mt-3 text-gray-600">Real stories from people doing their best work with TaskFlow.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="h-full border-gray-200 shadow-sm transition hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={t.avatar || "/placeholder.svg"} alt={`${t.name} avatar`} />
                    <AvatarFallback>{t.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{t.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{`"${t.quote}"`}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
