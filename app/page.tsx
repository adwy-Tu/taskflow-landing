import { Inter } from 'next/font/google'
import Image from "next/image"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Reviews from "@/components/reviews"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"

// Load Inter font for modern look
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function Page() {
  return (
    <main className={inter.className}>
      {/* Global smooth scrolling */}
      <SmoothScroll />
      {/* Page wrapper with light background */}
      <div className="relative min-h-screen bg-white text-gray-900">
        {/* Decorative blurred gradient blobs in the background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/30 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl"></div>
          <div className="absolute -right-10 top-1/3 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl"></div>
        </div>

        <Navbar />
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
        <Footer />
      </div>
    </main>
  )
}
