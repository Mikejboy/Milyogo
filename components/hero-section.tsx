import Image from "next/image"
import { Star, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 self-center rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground lg:self-start">
            <Leaf className="size-4" />
            Proudly made in Nigeria
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Fresh yogurt that loves you back.
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Milyogo blends creamy, all-natural yogurt with real fruit and live
            cultures. No artificial nonsense, just bold, wholesome goodness in
            every spoon.
          </p>

          <div className="flex flex-col gap-3 self-stretch sm:flex-row sm:self-auto">
            <Button
              nativeButton={false}
              render={<a href="#flavors" />}
              size="lg"
              className="h-12 rounded-full px-8 text-base font-semibold"
            >
              Explore Flavors
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-2 px-8 text-base font-semibold"
            >
              Find a Store
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-accent text-accent"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Loved by 12,000+ happy customers
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-secondary/40 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <Image
              src="/hero-yogurt.png"
              alt="A bowl of fresh Milyogo yogurt topped with strawberries, blueberries, mango and granola"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg ring-1 ring-border">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Leaf className="size-5" />
            </span>
            <div className="text-left">
              <p className="font-heading text-sm font-bold text-foreground">
                100% Natural
              </p>
              <p className="text-xs text-muted-foreground">No preservatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
