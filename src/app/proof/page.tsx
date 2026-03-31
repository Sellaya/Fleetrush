import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, FileSignature } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'proof-hero');

export default function ProofPage() {
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
            Proof of Delivery
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Access and download the proof of delivery for your completed shipments.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>View Proof of Delivery</CardTitle>
              <CardDescription>
                Enter the tracking number of a completed delivery to view the POD.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex w-full items-center space-x-2">
                <Input type="text" placeholder="e.g., FR-12345678" className="text-base" />
                <Button type="submit">Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for proof of delivery result */}
          <div className="mt-12">
            <h2 className="font-headline text-2xl font-bold mb-4">
              Delivery Complete: FR-12345678
            </h2>
            <Card className="w-full">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                   <div className="flex-shrink-0">
                    <FileSignature className="w-24 h-24 text-primary" />
                   </div>
                   <div className="flex-grow text-center md:text-left">
                     <h3 className="text-xl font-semibold">Proof of Delivery Available</h3>
                     <p className="text-muted-foreground mt-1">
                        Delivered on Monday, 1:42 PM. Signed by: J. Smith.
                     </p>
                     <p className="text-sm text-muted-foreground">
                        A photo and digital signature are available for download.
                     </p>
                   </div>
                   <div className="flex-shrink-0">
                    <Button>
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
