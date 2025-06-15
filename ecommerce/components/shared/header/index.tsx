import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import Menu from './menu';
import CategoriesDrawer from './category-drawer';
import Search from './search';

const Header = () => {
  return (
    <header className="w-full border-b text-sm">
      
      {/* Top strip with Login/Signup and ModeToggle */}
      <div className="w-full flex justify-end px-4 py-1 border-b">
        <Menu />
        
      </div>
<div className="w-full flex items-center justify-between py-4 shadow-md">  
  <CategoriesDrawer />
      {/* Logo */}
<Link href="/" className="flex items-center">
  {/* Light mode logo (shown when NOT in dark mode) */}
  <Image
    priority
    src="/images/logolight.png"
    width={50}
    height={50}
    alt="Logo for light mode"
    className="block dark:hidden"
  />
  
  {/* Dark mode logo (shown only in dark mode) */}
  <Image
    priority
    src="/images/logodark.png"
    width={50}
    height={50}
    alt="Logo for dark mode"
    className="hidden dark:block"
  />
</Link>
<div className='hidden md:block'>
  <Search />
</div>

       {/* Desktop Navigation */}
<div className="hidden md:flex flex-1 justify-center">
  <nav className="flex gap-6 font-medium text-sm">
    <Link href="/" className="hover:text-gray-600">New & Featured</Link>
    <Link href="/men" className="hover:text-gray-600">Men</Link>
    <Link href="/women" className="hover:text-gray-600">Women</Link>
    <Link href="/kids" className="hover:text-gray-600">Kids</Link>
    <Link href="/sale" className="hover:text-gray-600">Sale</Link>
    <Link href="/limited" className="hover:text-gray-600">Limited</Link>
  </nav>
</div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <MenuIcon className="h-6 w-6" />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right">
              <SheetTitle className="mb-4">Menu</SheetTitle>
              <nav className="flex flex-col gap-4 text-base font-medium">
                <Link href="/">New & Featured</Link>
                <Link href="/men">Men</Link>
                <Link href="/women">Women</Link>
                <Link href="/kids">Kids</Link>
                <Link href="/sale">Sale</Link>
                <Link href="/limited">Limited</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
