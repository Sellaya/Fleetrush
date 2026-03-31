import Image from 'next/image';
import { contactMethods } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';

const heroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');

export default function ContactPage() {
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
            Get In Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            We're here to help. Contact us for support, bookings, or any inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Send a Message
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Use the form below and our team will get back to you as soon as possible.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-8">
              {contactMethods.map((method) => (
                <Card key={method.title}>
                  <CardHeader className='flex-row items-center gap-4 space-y-0'>
                     <div className="p-3 rounded-md bg-primary/10 text-primary">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className='text-xl font-headline'>{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{method.description}</p>
                    <p className="font-semibold text-lg mt-2 text-primary">{method.contact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
