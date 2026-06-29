"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const details = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "Abesan Estate, Ipaja, Lagos, Nigeria",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "07075049214",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "3596jamesmichael@gmail.com",
  },
  {
    icon: Clock,
    label: "Open hours",
    value: "Mon – Sat, 8:00am – 7:00pm",
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="bg-secondary p-8 text-secondary-foreground md:p-12">
              <p className="font-heading text-sm font-bold uppercase tracking-widest">
                Get in touch
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
                Let's bring Milyogo to you
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-pretty">
                Want to stock Milyogo, place a bulk order, or just say hi? Reach
                out and our team will get back to you within 24 hours.
              </p>

              <ul className="mt-8 space-y-5">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-background/40 text-secondary-foreground">
                      <detail.icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold">
                        {detail.label}
                      </p>
                      <p className="text-sm leading-relaxed">{detail.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-8" />
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Thank you!
                  </h3>
                  <p className="max-w-sm leading-relaxed text-muted-foreground">
                    Your message is on its way. We'll be in touch with you very
                    soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-foreground"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:ring-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-foreground"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 ..."
                        className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:ring-2"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:ring-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us how we can help..."
                      className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:ring-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full text-base font-semibold"
                  >
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
