import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHero } from '@/components/layout/page-hero';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, FileSignature } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'proof-hero');

export default function ProofPage() {
  return (
    <div className="flex flex-col">
      {heroImage ? (
        <PageHero
          src={heroImage.imageUrl}
          alt={heroImage.description}
          title="Proof of delivery"
          description="Retrieve signed confirmation and download POD documents for completed jobs."
          badge="POD"
        />
      ) : null}

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container max-w-3xl px-4">
          <Card className="rounded-2xl border-border/80 shadow-sm">
            <CardHeader>
              <CardTitle className="font-headline text-xl sm:text-2xl">View proof of delivery</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Enter the tracking number of a completed delivery to view the POD.
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
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for proof of delivery result */}
          <div className="mt-10 sm:mt-12">
            <h2 className="mb-4 font-headline text-xl font-bold sm:text-2xl">
              Delivery complete: FR-12345678
            </h2>
            <Card className="w-full rounded-2xl border-border/80 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                  <div className="shrink-0">
                    <FileSignature className="h-20 w-20 text-primary sm:h-24 sm:w-24" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-semibold sm:text-xl">Proof of delivery available</h3>
                    <p className="mt-1 text-muted-foreground">
                      Delivered on Monday, 1:42 PM. Signed by: J. Smith.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A photo and digital signature are available for download.
                    </p>
                  </div>
                  <div className="w-full shrink-0 md:w-auto">
                    <Button className="h-12 min-h-[48px] w-full md:w-auto">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
