import { faqItems } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PageHero } from '@/components/layout/page-hero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const heroImage = PlaceHolderImages.find((img) => img.id === 'faq-hero');

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      {heroImage ? (
        <PageHero
          src={heroImage.imageUrl}
          alt={heroImage.description}
          title="Frequently asked questions"
          description="Straight answers on insurance, tracking, pricing, and what we can move."
          badge="Help"
        />
      ) : null}

      <section id="faq-list" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
