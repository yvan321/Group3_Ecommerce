import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ModeToggle from './mode-toggle';
import UserButton from './user-button';
import { ShoppingCart } from 'lucide-react';

const Menu = () => {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <ModeToggle />

      <Button asChild variant="ghost" size="icon">
        <Link href="/cart" aria-label="Cart">
          <ShoppingCart className="w-5 h-5" />
        </Link>
      </Button>

      <UserButton />
    </div>
  );
};

export default Menu;
