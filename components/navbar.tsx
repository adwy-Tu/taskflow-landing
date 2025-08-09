"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"

/**
 * Responsive Navbar with logo and anchor links.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="TaskFlow Logo"
            width={28}
            height={28}
            priority
          />
          <span className="font-semibold text-lg tracking-tight">TaskFlow</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/tasks" className="text-sm text-gray-700 hover:text-gray-900">
            Tasks
          </Link>
          <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">
            Features
          </a>
          <a href="#reviews" className="text-sm text-gray-700 hover:text-gray-900">
            Reviews
          </a>
          <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">
            Pricing
          </a>
          <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900">
            Contact
          </a>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow hover:from-emerald-600 hover:to-teal-700">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            <Link
              onClick={() => setOpen(false)}
              href="/tasks"
              className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Tasks
            </Link>
            <a
              onClick={() => setOpen(false)}
              href="#features"
              className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Features
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#reviews"
              className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Reviews
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#pricing"
              className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Pricing
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
            <Button className="mt-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow hover:from-emerald-600 hover:to-teal-700">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
