import { coreValues, industries } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHero } from '@/components/layout/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const heroImage = PlaceHolderImages.find((img) => img.id === 'about-hero');

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {heroImage ? (
        <PageHero
          src={heroImage.imageUrl}
          alt={heroImage.description}
          title="About FleetRush"
          description="Driving logistics forward with speed, reliability, and a customer‑first mindset."
          variant="tall"
          badge="Who we are"
        />
      ) : null}

      <section id="company-overview" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Our Company
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              FleetRush is a modern courier company founded on the principles of
              speed, reliability, and unparalleled customer satisfaction. We leverage
              cutting-edge technology to provide seamless and transparent
              logistics solutions for businesses and individuals across the UK.
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              To simplify logistics with fast, transparent, and dependable
              delivery solutions that empower our customers and drive their
              success.
            </p>
          </div>
        </div>
      </section>

      <section id="core-values" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide every delivery we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 rounded-md bg-primary/10 text-primary">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-headline text-xl">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="industries-served" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're proud to be the trusted logistics partner for a diverse range of sectors.
            </p>
            <div className="mt-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {industries.map((industry) => (
                    <div key={industry.name} className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-accent/10 text-accent">
                        <industry.icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold">{industry.name}</span>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
