import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Package, Clock, CheckCircle } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'track-hero');

export default function TrackPage() {
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
            Track Your Delivery
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Enter your tracking number to see the live status of your delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Enter Tracking Number</CardTitle>
              <CardDescription>
                Your tracking number was provided in your booking confirmation email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex w-full items-center space-x-2">
                <Input type="text" placeholder="e.g., FR-12345678" className="text-base" />
                <Button type="submit">Track</Button>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for tracking results */}
          <div className="mt-12">
            <h2 className="font-headline text-2xl font-bold mb-4">
              Delivery Status
            </h2>
            <Card className="w-full">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-sm text-muted-foreground">Tracking #</p>
                        <p className="font-mono font-semibold">FR-12345678</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <p className="font-semibold text-primary">In Transit</p>
                    </div>
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                      <div className="relative z-10">
                        <CheckCircle className="w-6 h-6 bg-background text-green-500 rounded-full" />
                      </div>
                      <div>
                        <p className="font-semibold">Pickup Confirmed</p>
                        <p className="text-sm text-muted-foreground">Mon, 10:30 AM - From: 10 Downing St, London</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="relative z-10">
                         <div className="w-6 h-6 rounded-full bg-primary ring-4 ring-background flex items-center justify-center">
                            <Package className="w-4 h-4 text-primary-foreground" />
                         </div>
                      </div>
                      <div>
                        <p className="font-semibold">In Transit</p>
                        <p className="text-sm text-muted-foreground">Driver en route to destination.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 opacity-50">
                      <div className="relative z-10">
                        <MapPin className="w-6 h-6 bg-background text-muted-foreground rounded-full" />
                      </div>
                      <div>
                        <p className="font-semibold">Out for Delivery</p>
                        <p className="text-sm text-muted-foreground">ETA: Mon, 1:45 PM</p>
                      </div>
                    </li>
                     <li className="flex items-start gap-4 opacity-50">
                      <div className="relative z-10">
                        <CheckCircle className="w-6 h-6 bg-background text-muted-foreground rounded-full" />
                      </div>
                      <div>
                        <p className="font-semibold">Delivered</p>
                        <p className="text-sm text-muted-foreground">To: Buckingham Palace, London</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
