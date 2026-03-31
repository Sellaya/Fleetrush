import Image from 'next/image';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  /** Interior pages: compact on mobile. Marketing: taller band. */
  variant?: 'default' | 'tall';
  badge?: string;
  align?: 'center' | 'left';
  children?: React.ReactNode;
  priority?: boolean;
};

export function PageHero({
  src,
  alt,
  title,
  description,
  variant = 'default',
  badge,
  align = 'center',
  children,
  priority = true,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative w-full isolate overflow-hidden bg-zinc-900',
        variant === 'tall'
          ? 'min-h-[48svh] sm:min-h-[42svh] md:min-h-[38vh]'
          : 'min-h-[38svh] sm:min-h-[34svh] md:min-h-[30vh]'
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-bottom sm:object-[center_45%]"
        sizes="100vw"
        priority={priority}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/65 to-zinc-900/35"
        aria-hidden
      />
      <div
        className={cn(
          'relative container flex h-full flex-col justify-end px-4 pb-10 pt-28 sm:pb-12 sm:pt-32 md:pb-14 md:pt-36',
          align === 'center' ? 'items-center text-center' : 'items-start text-left'
        )}
      >
        {badge ? (
          <p className="mb-3 max-w-prose rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-sm">
            {badge}
          </p>
        ) : null}
        <h1 className="font-headline text-display font-bold tracking-tight text-white sm:text-display-md md:text-display-lg">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className={cn('mt-8 w-full', align === 'center' && 'flex justify-center')}>{children}</div> : null}
      </div>
    </section>
  );
}
