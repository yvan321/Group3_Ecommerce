import { Button } from './ui/button';
import Link from 'next/link';

const ViewAllProductsButton = () => {
  return (
    <div className="flex justify-center items-center my-8 px-4">
      <Button
        asChild
        className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold 
        bg-black text-white 
        dark:bg-white dark:text-black 
        hover:opacity-90 transition"
      >
        <Link href="/search">View All Products</Link>
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;
