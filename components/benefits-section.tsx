import { HeartPulse, Sparkles, Wheat, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: HeartPulse,
    title: "Gut-friendly cultures",
    description:
      "Billions of live probiotics in every cup to support healthy digestion.",
  },
  {
    icon: Wheat,
    title: "High in protein",
    description:
      "A naturally protein-rich snack that keeps you full and energized.",
  },
  {
    icon: Sparkles,
    title: "No artificial additives",
    description:
      "Zero preservatives, no artificial colors or flavors. Ever.",
  },
  {
    icon: ShieldCheck,
    title: "Rich in calcium",
    description:
      "Supports strong bones and teeth with every wholesome serving.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
              Health Benefits
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-5xl">
              Goodness you can feel in every spoon
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              We believe great taste and great nutrition belong together. That's
              why every batch of Milyogo is crafted to nourish your body
              naturally.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <benefit.icon className="size-6" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
