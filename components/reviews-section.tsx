import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "Milyogo is now part of my morning routine. The strawberry flavor tastes like real fruit, not sugar. Absolutely love it!",
    name: "Adaeze Okonkwo",
    location: "Lagos",
    initials: "AO",
  },
  {
    quote:
      "Finally a Nigerian yogurt brand that's both healthy and delicious. My kids ask for the mango one every single day.",
    name: "Ibrahim Bello",
    location: "Abuja",
    initials: "IB",
  },
  {
    quote:
      "Creamy, fresh and not too sweet. You can tell there are no artificial additives. Milyogo has earned a loyal customer.",
    name: "Chidinma Eze",
    location: "Port Harcourt",
    initials: "CE",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground/80">
            Customer Reviews
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
            Nigeria can't get enough
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col gap-4 rounded-3xl bg-background p-6 text-foreground shadow-lg"
            >
              <div className="flex" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-pretty">
                {`"${review.quote}"`}
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary font-heading text-sm font-bold text-secondary-foreground">
                  {review.initials}
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
