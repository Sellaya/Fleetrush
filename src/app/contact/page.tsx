import { contactMethods } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHero } from '@/components/layout/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';

const heroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {heroImage ? (
        <PageHero
          src={heroImage.imageUrl}
          alt={heroImage.description}
          title="Get in touch"
          description="Support, account questions, or bespoke routes, we respond fast."
          badge="Contact"
        />
      ) : null}

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
