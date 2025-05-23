'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ModeToggle from './mode-toggle';

const Menu = () => {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <ModeToggle />

      {/* Log In Button */}
      <Button asChild variant="ghost" size="sm" className="font-bold">
        <Link href="/sign-in">Log In</Link>
      </Button>

      {/* Divider with text-based color */}
      <span className="h-5 w-px bg-current opacity-50 mx-1" />

      {/* Sign Up Button */}
      <Button asChild size="sm" className="font-bold">
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </div>
  );
};

export default Menu;
