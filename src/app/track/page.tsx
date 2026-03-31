import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHero } from '@/components/layout/page-hero';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Package, CheckCircle } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'track-hero');

export default function TrackPage() {
  return (
    <div className="flex flex-col">
      {heroImage ? (
        <PageHero
          src={heroImage.imageUrl}
          alt={heroImage.description}
          title="Track your delivery"
          description="Enter your tracking number to follow live progress from pickup to delivery."
          badge="Tracking"
        />
      ) : null}

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container max-w-3xl px-4">
          <Card className="rounded-2xl border-border/80 shadow-sm">
            <CardHeader>
              <CardTitle className="font-headline text-xl sm:text-2xl">Enter tracking number</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Your tracking number was provided in your booking confirmation email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                <Input
                  type="text"
                  placeholder="e.g., FR-12345678"
                  className="h-12 min-h-[48px] flex-1 text-base"
                />
                <Button type="submit" className="h-12 min-h-[48px] w-full shrink-0 px-8 sm:w-auto">
                  Track
                </Button>
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
