import Image from "next/image"

const flavors = [
  {
    name: "Strawberry Burst",
    description: "Sweet, sun-ripened strawberries swirled into creamy yogurt.",
    image: "/flavor-strawberry.png",
    tag: "Bestseller",
  },
  {
    name: "Golden Mango",
    description: "Juicy tropical mango with a smooth, velvety finish.",
    image: "/flavor-mango.png",
    tag: "New",
  },
  {
    name: "Wild Blueberry",
    description: "Tangy blueberries packed with antioxidant goodness.",
    image: "/flavor-blueberry.png",
    tag: null,
  },
  {
    name: "Natural & Honey",
    description: "Pure Greek-style yogurt finished with golden honey.",
    image: "/flavor-natural.png",
    tag: "Classic",
  },
]

export function FlavorsSection() {
  return (
    <section id="flavors" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Our Flavors
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-5xl">
            A flavor for every craving
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Made fresh in small batches with real fruit. Pick your favorite, or
            collect them all.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flavors.map((flavor) => (
            <article
              key={flavor.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/20">
                {flavor.tag && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {flavor.tag}
                  </span>
                )}
                <Image
                  src={flavor.image || "/placeholder.svg"}
                  alt={`Milyogo ${flavor.name} yogurt`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {flavor.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {flavor.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
