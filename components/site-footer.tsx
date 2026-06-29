const footerLinks = [
  {
    title: "Product",
    links: ["Flavors", "Where to buy", "Nutrition", "Bulk orders"],
  },
  {
    title: "Company",
    links: ["Our story", "Sustainability", "Careers", "Press"],
  },
  {
    title: "Support",
    links: ["Contact", "FAQ", "Wholesale", "Distributors"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground">
                M
              </span>
              <span className="font-heading text-xl font-extrabold tracking-tight text-foreground">
                Milyogo
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Fresh, natural yogurt crafted with love in Nigeria. Real fruit,
              live cultures, bold flavor.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-sm font-bold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Milyogo Foods Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with fresh milk in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}
