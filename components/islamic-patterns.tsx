"use client"

import type React from "react"

export function IslamicPattern({ className = "", opacity = 0.1 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="islamic-star" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <g fill="currentColor" className="text-emerald-600">
              <path d="M50 10 L60 30 L80 30 L66 42 L72 62 L50 50 L28 62 L34 42 L20 30 L40 30 Z" />
              <circle cx="50" cy="50" r="3" />
            </g>
          </pattern>
          <pattern id="geometric-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-500">
              <circle cx="30" cy="30" r="20" />
              <circle cx="30" cy="30" r="10" />
              <path d="M10 30 L50 30 M30 10 L30 50" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
      </svg>
    </div>
  )
}

export function IslamicBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-lg border-2 border-emerald-200">
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-emerald-600 rounded-full"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-600 rounded-full"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-emerald-600 rounded-full"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-600 rounded-full"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function IslamicArch({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute top-0 left-0 w-full h-8"
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 40 Q100 0 200 40 L200 40 L0 40 Z" className="text-emerald-600 opacity-20" />
      </svg>
      <div className="pt-6">{children}</div>
    </div>
  )
}
