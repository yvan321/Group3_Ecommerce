'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/types';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import Image from 'next/image';

const ProductCarousel = ({ data }: { data: Product[] }) => {
  return (
    <Carousel
      className="w-full mb-12 relative"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <div className="relative mx-auto">
                {product.banner && (
                  <Image
                    alt={product.name}
                    src={product.banner}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                )}
                <div className="absolute inset-0 flex items-end justify-center pb-4">
  <h2 className="text-base sm:text-lg md:text-xl font-bold px-4 py-2 text-black dark:text-white bg-white/70 dark:bg-zinc-900/70 rounded-full shadow-md backdrop-blur text-center">
    {product.name}
  </h2>
</div>

              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* ✅ Fixed swipe buttons */}
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-zinc-900/70 rounded-full p-2 shadow-md" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-zinc-900/70 rounded-full p-2 shadow-md" />
    </Carousel>
  );
};

export default ProductCarousel;
