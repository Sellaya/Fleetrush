import { PlaceHolderImages } from '@/lib/placeholder-images';

export type AdLandingPage = {
  slug: string;
  title: string;
  headline: string;
  subhead: string;
  imageId: string;
  bullets: string[];
  reassurance: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCta?: { label: string; href: string };
};

export const adLandingPages: AdLandingPage[] = [
  {
    slug: 'same-day',
    title: 'Same-Day Courier UK',
    headline: 'Urgent parcel? Book a same-day courier in minutes.',
    subhead:
      'FleetRush dispatches vetted drivers across the UK with live tracking and insured transit, built for deadlines that will not wait.',
    imageId: 'lp-sameday',
    bullets: [
      'Rapid pickup windows for business and residential addresses',
      'Live GPS tracking from collection to proof of delivery',
      'Fully insured moves with dedicated handler options',
      'Transparent quotes, no surprise surcharges',
    ],
    reassurance: 'Average quote to dispatch under 5 minutes · Operational 24/7',
    ctaLabel: 'Get an instant quote',
    ctaHref: '/pricing',
    secondaryCta: { label: 'View services', href: '/services' },
  },
  {
    slug: 'business',
    title: 'Business Courier Accounts',
    headline: 'Reliable courier capacity for teams that ship every day.',
    subhead:
      'Standardise last-mile delivery with one partner: consistent SLAs, multi-drop routes, and reporting your finance team can trust.',
    imageId: 'lp-business',
    bullets: [
      'Multi-drop and scheduled routes to cut per-stop cost',
      'Document and high-value handling with chain-of-care discipline',
      'Central billing and repeat-booking workflows',
      'Account support when routes change at short notice',
    ],
    reassurance: 'Trusted by operations teams across healthcare, legal, and retail',
    ctaLabel: 'Request a business quote',
    ctaHref: '/pricing',
    secondaryCta: { label: 'About FleetRush', href: '/about' },
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Medical Courier',
    headline: 'Time-critical medical logistics. Handled with care.',
    subhead:
      'Specimens, pharmacy, and clinical supplies need punctual, discreet drivers. FleetRush prioritises sensitivity, speed, and compliance-minded handling.',
    imageId: 'lp-healthcare',
    bullets: [
      'Priority routing for urgent clinical timelines',
      'Discreet, professional couriers trained for care-sector expectations',
      'Insured transit with proof of delivery and audit-friendly records',
      '24/7 dispatch for wards, labs, and outpatient networks',
    ],
    reassurance: 'Built for organisations where minutes matter',
    ctaLabel: 'Book a medical courier',
    ctaHref: '/pricing',
    secondaryCta: { label: 'Speak to the team', href: '/contact' },
  },
  {
    slug: 'ecommerce',
    title: 'E‑commerce & Fulfilment Delivery',
    headline: 'Turn “out for delivery” into a brand moment customers remember.',
    subhead:
      'Same-day and SLA delivery from warehouse or store to doorstep, fewer failed drops, happier customers, and fewer support tickets.',
    imageId: 'lp-ecommerce',
    bullets: [
      'Burst capacity for sale days and peak seasons',
      'Last-mile coverage aligned to your cut-off times',
      'Customer tracking links that reduce “where is my order?” calls',
      'Returns and multi-leg jobs orchestrated on one network',
    ],
    reassurance: 'Scale up routes without building your own fleet',
    ctaLabel: 'Price a same-day run',
    ctaHref: '/pricing',
    secondaryCta: { label: 'Track a shipment', href: '/track' },
  },
];

export function getLandingBySlug(slug: string): AdLandingPage | undefined {
  return adLandingPages.find((p) => p.slug === slug);
}

export function getLandingImage(slug: string) {
  const page = getLandingBySlug(slug);
  if (!page) return undefined;
  return PlaceHolderImages.find((img) => img.id === page.imageId);
}
