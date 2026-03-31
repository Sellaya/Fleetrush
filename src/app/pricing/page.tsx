import { HandCoins, CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHero } from '@/components/layout/page-hero';
import { QuoteForm } from './quote-form';

const heroImage = PlaceHolderImages.find((img) => img.id === 'pricing-hero');

const pricingFactors = [
  'Distance from pickup to delivery',
  'Size and weight of the package',
  'Urgency level (e.g., same-day, next-day)',
  'Type of vehicle required for the job',
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {heroImage ? (
        <PageHero
          src={heroImage.imageUrl}
          alt={heroImage.description}
          title="Transparent pricing"
          description="Instant quotes with no obligation, fair rates based on distance, vehicle, and urgency."
          badge="Quotes"
        />
      ) : null}

      <section id="quote-section" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Get an Instant Quote
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill in the details below to get your quote and book your
                delivery in seconds.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                How We Determine Price
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our pricing is calculated based on a few key factors to ensure
                you get the best possible rate.
              </p>
              <ul className="mt-8 space-y-4">
                {pricingFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 rounded-lg bg-secondary">
                <div className="flex items-start gap-4">
                  <HandCoins className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      No Hidden Fees
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      The price you are quoted is the price you pay. We believe
                      in transparent and honest pricing for all our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
