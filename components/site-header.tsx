"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Flavors", href: "#flavors" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground">
            M
          </span>
          <span className="font-heading text-xl font-extrabold tracking-tight text-foreground">
            Milyogo
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className="rounded-full font-semibold"
          >
            Order Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              render={<a href="#contact" onClick={() => setOpen(false)} />}
              className="mt-2 rounded-full font-semibold"
            >
              Order Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
