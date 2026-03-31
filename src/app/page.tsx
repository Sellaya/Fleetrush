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
import { CheckCircle, ChevronRight, Dot } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-start justify-end pb-16 md:pb-24 text-white">
          <h1 className="font-headline text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Fast, Reliable Same-Day Courier Services Across the UK
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200">
            From urgent documents to bulk deliveries, FleetRush ensures safe,
            fast, and reliable delivery solutions for businesses and
            individuals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/pricing">Get Instant Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">Book Delivery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="value-proposition"
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {valueProps.map((prop, index) => (
            <div key={index} className="flex flex-col items-center">
              <prop.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="font-semibold text-lg">{prop.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="services-overview" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              A Full Range of Courier Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              FleetRush offers a full range of courier services designed to meet
              urgent and scheduled delivery needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.title}
                className="transition-all duration-300 hover:border-primary hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-md bg-primary/10 text-primary">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-headline text-2xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/services">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Getting your package on the move is as simple as a few clicks.
            </p>
          </div>
          <div className="mt-12 relative">
            <div
              className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {howItWorks.map((step) => (
                <div
                  key={step.step}
                  className={`flex flex-col md:flex-row gap-6 items-start ${
                    step.step % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl relative z-10">
                    {step.step}
                  </div>
                  <div
                    className={`pt-2 text-left ${
                      step.step % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <h3 className="font-headline text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries-served" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Serving a Wide Range of Industries
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide specialized delivery solutions for various professional
              sectors.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div key={industry.name} className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Need an urgent delivery?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Get your package on its way in minutes. Our seamless booking process
            is designed for speed and convenience.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/pricing">Book Your Courier in Seconds</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
