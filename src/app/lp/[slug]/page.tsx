import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  adLandingPages,
  getLandingBySlug,
  getLandingImage,
} from '@/lib/landing-pages';
import { cn } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return adLandingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingBySlug(slug);
  if (!page) return { title: 'FleetRush' };
  return {
    title: `${page.title} | FleetRush`,
    description: page.subhead,
    openGraph: {
      title: page.headline,
      description: page.subhead,
    },
  };
}

export default async function AdLandingPage({ params }: Props) {
  const { slug } = await params;
  const data = getLandingBySlug(slug);
  const hero = getLandingImage(slug);

  if (!data || !hero) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-background">
      <section className="relative min-h-[100svh] sm:min-h-[min(92svh,880px)]">
        <Image
          src={hero.imageUrl}
          alt={hero.description}
          fill
          className="object-cover object-[center_25%]"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/70 to-zinc-950/95"
          aria-hidden
        />
        <div className="relative flex min-h-[100svh] flex-col sm:min-h-[min(92svh,880px)]">
          <div className="container flex flex-1 flex-col justify-end px-4 pb-10 pt-24 sm:pb-14 sm:pt-28 md:pb-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              FleetRush · UK courier
            </p>
            <h1 className="font-headline text-display font-bold tracking-tight text-white sm:text-display-md md:max-w-5xl md:text-display-lg">
              {data.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg md:max-w-5xl">
              {data.subhead}
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 min-h-[48px] w-full rounded-lg px-8 text-base sm:w-auto"
              >
                <Link href={data.ctaHref}>{data.ctaLabel}</Link>
              </Button>
              {data.secondaryCta ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 min-h-[48px] w-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
                >
                  <Link href={data.secondaryCta.href}>{data.secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
            <p className="mt-6 text-sm text-zinc-400">{data.reassurance}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-14 sm:py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-3xl">
              Why teams choose FleetRush
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              Conversion-focused delivery, built for speed, visibility, and peace of mind.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12">
            {data.bullets.map((line) => (
              <li
                key={line}
                className="flex gap-3 rounded-xl border border-border/80 bg-card px-4 py-4 shadow-sm sm:px-5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-left text-[15px] leading-snug sm:text-base">
                  {line}
                </span>
              </li>
            ))}
          </ul>
          <div
            className={cn(
              'mx-auto mt-12 flex max-w-xl flex-col gap-3 sm:mt-16 sm:flex-row sm:justify-center'
            )}
          >
            <Button asChild size="lg" className="h-12 min-h-[48px] w-full sm:w-auto">
              <Link href={data.ctaHref}>{data.ctaLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-12 min-h-[48px] w-full sm:w-auto">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
