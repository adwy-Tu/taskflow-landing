"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Twitter } from 'lucide-react'

/**
 * Footer with logo, quick links, and social icons.
 * Uses id="contact" for smooth scroll target.
 */
export default function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="TaskFlow Logo" width={24} height={24} />
            <span className="font-semibold">TaskFlow</span>
          </div>
          <p className="max-w-xs text-sm text-gray-600">
            Plan smarter. Focus deeper. Ship faster.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#features" className="text-gray-700 hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Follow Us</h3>
          <div className="mt-3 flex items-center gap-3">
            <Link
              href="#"
              aria-label="Twitter"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
          <p className="text-xs text-gray-500">
            {'\u00A9'} {new Date().getFullYear()} TaskFlow. All rights reserved 2025.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
