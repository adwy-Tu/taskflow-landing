"use client"

import { motion } from "framer-motion"
import Link from "next/link"

/**
 * Hero section with centered headline, tagline, and CTA.
 */
export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-16 sm:pt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200"
        >
          New: Smart scheduling and AI suggestions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          TaskFlow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-4 max-w-xl text-balance text-base text-gray-600 sm:text-lg"
        >
          Organize tasks effortlessly, focus on what matters, and ship work faster. Your day, in perfect flow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#pricing"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:from-emerald-600 hover:to-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="inline-flex items-center rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient bar */}
      <div className="mx-auto mt-12 h-[2px] w-40 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
    </section>
  )
}
