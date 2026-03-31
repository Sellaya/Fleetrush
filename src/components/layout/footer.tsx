import Link from 'next/link';
import { Truck } from 'lucide-react';
import { navLinks } from '@/lib/constants';

const campaignLinks = [
  { href: '/lp/same-day', label: 'Same-day (ads)' },
  { href: '/lp/business', label: 'Business' },
  { href: '/lp/healthcare', label: 'Healthcare' },
  { href: '/lp/ecommerce', label: 'E-commerce' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-secondary/60">
      <div className="container px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-headline text-lg font-bold tracking-tight"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Truck className="h-4 w-4" />
              </span>
              FleetRush
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              Professional same-day courier across the UK, insured, tracked, and
              built for businesses that need proof, not promises.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Navigate
              </h3>
              <ul className="mt-4 space-y-3">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {navLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Campaign pages
              </h3>
              <ul className="mt-4 space-y-3">
                {campaignLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Terms of service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/80 pt-8 text-center text-xs text-muted-foreground sm:text-sm">
          <p>© {new Date().getFullYear()} FleetRush. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
