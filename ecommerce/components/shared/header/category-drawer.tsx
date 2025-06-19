import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getAllCategories } from '@/lib/actions/product.actions';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

const CategoryDrawer = async () => {
  const categories = await getAllCategories();

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-full max-w-sm bg-white text-black dark:bg-black dark:text-white border-r border-black dark:border-white">
        <DrawerHeader>
          <DrawerTitle className="text-lg font-semibold">Select a category</DrawerTitle>

          <div className="space-y-1 mt-4">
            {categories.map((x) => (
              <DrawerClose asChild key={x.category}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  asChild
                >
                  <Link href={`/search?category=${x.category}`}>
                    {x.category} ({x._count})
                  </Link>
                </Button>
              </DrawerClose>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
