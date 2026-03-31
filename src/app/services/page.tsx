import Image from 'next/image';
import { services, fleetDetails } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const heroImage = PlaceHolderImages.find((img) => img.id === 'services-hero');

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[40vh]">
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Our Courier Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Flexible courier solutions tailored to different business and
            personal delivery needs.
          </p>
        </div>
      </section>

      <section id="service-breakdown" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Comprehensive Service Breakdown
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whatever your delivery needs, we have a service designed for it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-md bg-primary/10 text-primary">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-headline text-2xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet-details" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Our Fleet
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We have a diverse fleet to handle any delivery, any size,
              anywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetDetails.map((vehicle) => {
              const vehicleImage = PlaceHolderImages.find(
                (img) => img.id === vehicle.imageId
              );
              return (
                <Card key={vehicle.name} className="overflow-hidden group">
                  {vehicleImage && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={vehicleImage.imageUrl}
                        alt={vehicleImage.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={vehicleImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <vehicle.icon className="w-8 h-8 text-primary" />
                      <CardTitle className="font-headline text-2xl">
                        {vehicle.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {vehicle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
