"use client"

/**
 * Injects global CSS to enable smooth scrolling for in-page anchor links.
 */
export default function SmoothScroll() {
  return (
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
    `}</style>
  )
}
