import Image from 'next/image';
import Link from 'next/link';

import {
  valueProps,
  services,
  howItWorks,
  industries,
} from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Shield } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

const trustChips = [
  'UK-wide coverage',
  'Fully insured',
  'Live GPS tracking',
  '24/7 dispatch',
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate min-h-[100svh] w-full sm:min-h-[min(100svh,920px)] md:min-h-[min(92vh,900px)]">
        {heroImage ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-[center_40%] sm:object-[center_35%]"
            priority
            sizes="100vw"
          />
        ) : null}
        <div
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-900/40"
          aria-hidden
        />
        <div className="relative flex min-h-[100svh] flex-col justify-end sm:min-h-[min(100svh,920px)] md:min-h-[min(92vh,900px)]">
          <div className="container px-4 pb-10 pt-24 sm:pb-14 sm:pt-28 md:pb-20 md:pt-32">
            <Badge
              variant="secondary"
              className="mb-4 border-0 bg-white/15 text-xs font-medium text-white backdrop-blur-md hover:bg-white/20 sm:text-sm"
            >
              Same-day · Multi-drop · Dedicated runs
            </Badge>
            <h1 className="max-w-5xl font-headline text-display font-bold tracking-tight text-white sm:text-display-md md:text-display-lg">
              Same-day courier built for businesses that cannot afford to wait.
            </h1>
            <p className="mt-4 max-w-5xl text-base leading-relaxed text-zinc-200 sm:text-lg md:text-xl">
              FleetRush moves urgent documents, parcels, and freight across the UK
              with insured transit, live tracking, and proof of delivery, booked
              online in minutes.
            </p>
            <div
              className="hero-trust-chips mt-6 animate-hero-trust-row motion-reduce:animate-none"
              role="list"
              aria-label="Trust highlights"
            >
              <div className="-mx-4 flex snap-x snap-mandatory flex-nowrap gap-2 overflow-x-auto overflow-y-visible px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none [&::-webkit-scrollbar]:hidden">
                {trustChips.map((label) => (
                  <span
                    key={label}
                    role="listitem"
                    className="inline-flex shrink-0 snap-start items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs text-white/95 backdrop-blur-sm sm:text-sm"
                  >
                    <Shield className="h-3.5 w-3.5 shrink-0 text-primary-foreground/90 sm:h-4 sm:w-4" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="h-12 min-h-[48px] w-full rounded-lg px-8 text-base sm:w-auto"
              >
                <Link href="/pricing">Get instant quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 min-h-[48px] w-full rounded-lg border-white/35 bg-white/10 px-8 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
            <p className="mt-6 max-w-md text-sm text-zinc-400">
              Serving ads or campaigns?{' '}
              <Link
                href="/lp/same-day"
                className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Same-day landing
              </Link>
              {' · '}
              <Link
                href="/lp/business"
                className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Business
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        id="value-proposition"
        className="border-b border-border/70 bg-card py-14 sm:py-16 md:py-20"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Everything you expect from a modern courier
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              One network for urgent jobs and repeatable routes, without the
              noise of outdated logistics.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5 lg:gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl border border-border/60 bg-background p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6"
              >
                <prop.icon className="mb-3 h-8 w-8 text-primary sm:h-10 sm:w-10" />
                <h3 className="text-sm font-semibold sm:text-base">{prop.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-overview" className="py-14 sm:py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Courier services for every size of shipment
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              From confidential documents to multi-stop retail runs, flexible
              options backed by professional drivers.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.title}
                className="group overflow-hidden rounded-2xl border-border/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/15">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl leading-snug sm:text-2xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.description}
                  </p>
                  <Button asChild variant="link" className="mt-4 h-auto p-0 text-primary">
                    <Link href="/services" className="inline-flex items-center gap-1">
                      Learn more
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center sm:mt-12">
            <Button asChild size="lg" variant="outline" className="min-h-[48px] rounded-lg px-8">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-border/60 bg-secondary/40 py-14 sm:py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Process
            </span>
            <h2 className="mt-4 font-headline text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-muted-foreground sm:text-lg">
              Book online, track every milestone live, and receive proof of delivery without phone tag or guesswork.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-6xl sm:mt-14">
            <div className="absolute left-[1.35rem] top-5 bottom-5 w-px bg-border md:hidden" aria-hidden />
            <div className="absolute left-12 right-12 top-10 hidden h-px bg-border lg:block" aria-hidden />

            <ol className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-4 lg:gap-6">
              {howItWorks.map((step) => (
                <li key={step.step} className="relative pl-12 md:pl-14 lg:pl-0">
                  <div className="group relative rounded-2xl border border-border/75 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg sm:p-6 lg:h-full">
                    <div className="absolute left-0 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md ring-4 ring-secondary sm:h-9 sm:w-9 lg:left-1/2 lg:top-0 lg:-translate-y-1/2 lg:translate-x-0">
                      {step.step}
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-foreground sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="industries-served" className="py-14 sm:py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Built for regulated and fast-moving sectors
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              Compliance-minded handling for teams that need consistency, not
              one-off gig drivers.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3.5 shadow-sm"
              >
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <industry.icon className="h-5 w-5 shrink-0" />
                </div>
                <span className="text-sm font-medium sm:text-base">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative isolate flex min-h-[22rem] items-center overflow-hidden py-16 text-primary-foreground sm:min-h-[24rem] sm:py-20 md:min-h-[26rem] md:py-24"
      >
        <Image
          src="/images/cta-courier-van.png"
          alt="White courier van on a rural road at golden hour, ready for same-day delivery."
          fill
          className="object-cover object-[center_35%] sm:object-[center_40%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/96 via-zinc-950/86 to-zinc-900/78"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/58"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-white/10 blur-3xl sm:h-64 sm:w-64" aria-hidden />
        <div className="container relative z-10 px-4 text-center">
          <h2 className="font-headline text-2xl font-bold tracking-tight drop-shadow-sm sm:text-3xl md:text-4xl">
            Need it there today?
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Get a transparent quote and a driver en route, built for teams that
            treat every delivery like a client promise.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 min-h-[48px] rounded-lg px-8 text-base shadow-lg shadow-black/20"
            >
              <Link href="/pricing">Book your courier</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 min-h-[48px] rounded-lg border-2 border-primary-foreground/50 bg-primary-foreground/10 px-8 text-base text-primary-foreground shadow-md backdrop-blur-[2px] hover:border-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground"
            >
              <Link href="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
