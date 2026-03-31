'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Phone, Truck } from 'lucide-react';

import { navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/45 bg-background/70 shadow-[0_1px_0_0_hsl(var(--border)/0.4)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/55 dark:border-border/35 dark:shadow-[0_1px_0_0_hsl(0_0%_100%/0.07)]">
      <div className="container flex h-14 min-h-[56px] w-full items-center justify-between gap-2 px-4 sm:h-[4.25rem] sm:gap-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:justify-normal lg:gap-4">
        <div className="min-w-0 lg:justify-self-start">
          <Link
            href="/"
            className="group flex max-w-full items-center gap-2 rounded-xl outline-none ring-offset-background transition-opacity hover:opacity-[0.97] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:gap-2.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 ring-1 ring-inset ring-white/15 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-active:scale-[1] sm:h-10 sm:w-10">
              <Truck className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2.25} />
            </span>
            <span className="truncate font-headline text-base font-bold tracking-tight text-foreground sm:text-lg">
              FleetRush
            </span>
          </Link>
        </div>

        <nav
          className="hidden min-w-0 lg:flex lg:justify-center lg:justify-self-stretch"
          aria-label="Primary"
        >
          <ul className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-border/55 bg-muted/45 px-1 py-1 [scrollbar-width:none] dark:bg-muted/25 [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className={cn(
                      'block whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold tracking-tight transition-all duration-200',
                      active
                        ? 'bg-primary/12 text-primary shadow-sm ring-1 ring-primary/25'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-1.5 md:gap-2 lg:justify-self-end">
          <a
            href="tel:08001234567"
            className="hidden items-center gap-2 rounded-full border border-border/55 bg-muted/40 px-3.5 py-2 text-[13px] font-semibold tabular-nums text-foreground transition-colors hover:border-primary/25 hover:bg-muted/60 lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.25} />
            <span>0800 123 4567</span>
          </a>

          <Button
            asChild
            className="hidden h-10 min-h-0 rounded-full px-5 text-[13px] font-semibold shadow-md shadow-primary/20 lg:inline-flex"
          >
            <Link href="/pricing">Get quote</Link>
          </Button>

          <a
            href="tel:08001234567"
            aria-label="Call FleetRush on 0800 123 4567"
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border/60 bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/35 hover:bg-muted/50 lg:hidden"
          >
            <Phone className="h-[1.125rem] w-[1.125rem] text-primary" strokeWidth={2.25} />
          </a>

          <Button
            asChild
            size="sm"
            className="hidden h-10 min-h-[44px] rounded-full px-4 text-[13px] font-semibold sm:inline-flex lg:hidden"
          >
            <Link href="/pricing">Quote</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 rounded-full border-border/60 bg-background/90 shadow-sm backdrop-blur-sm lg:hidden"
              >
                <Menu className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[min(100vw,22rem)] max-w-full flex-col border-l border-border/45 bg-background/95 p-0 backdrop-blur-xl"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Main menu</SheetTitle>
                <SheetDescription>
                  FleetRush navigation, quote, and phone contact.
                </SheetDescription>
              </SheetHeader>

              <div className="border-b border-border/40 px-5 pb-5 pt-14">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  FleetRush
                </p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  UK courier · Same-day · 24/7 dispatch
                </p>
              </div>

              <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Mobile primary">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'rounded-xl px-4 py-3.5 text-[15px] font-semibold leading-snug tracking-tight transition-colors',
                        active
                          ? 'bg-primary/14 text-primary ring-1 ring-primary/25'
                          : 'text-foreground active:bg-muted/80 hover:bg-muted/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-2.5 border-t border-border/45 bg-muted/15 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <Button
                  asChild
                  className="h-12 min-h-[48px] w-full rounded-xl text-[15px] font-semibold"
                  size="lg"
                >
                  <Link href="/pricing" onClick={() => setMenuOpen(false)}>
                    Get instant quote
                  </Link>
                </Button>
                <a
                  href="tel:08001234567"
                  className="flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-xl border border-border/55 bg-background text-[15px] font-semibold transition-colors hover:bg-muted/50"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 text-primary" strokeWidth={2.25} />
                  0800 123 4567
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
