import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';
import CategoriesDrawer from './category-drawer';
import Search from './search';


const Header = () => {
  return (
  <header className="w-full border-b text-sm">
      {/* Top strip with Login/Signup and ModeToggle */}
      <div className="w-full flex justify-end px-6 md:px-10 py-1 border-b">
        <Menu />
      </div>

      {/* Main Header Content */}
      <div className="w-full flex items-center justify-between py-4 shadow-md px-6 md:px-10">
        {/* Mobile Layout */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <Image
              priority
              src="/images/logolight.png"
              width={40}
              height={40}
              alt="Logo for light mode"
              className="block dark:hidden"
            />
            <Image
              priority
              src="/images/logodark.png"
              width={40}
              height={40}
              alt="Logo for dark mode"
              className="hidden dark:block"
            />
          </Link>

          {/* Search and Menu on the right */}
          <div className="flex items-center gap-2">
            <Search />
            <CategoriesDrawer />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              priority
              src="/images/logolight.png"
              width={50}
              height={50}
              alt="Logo for light mode"
              className="block dark:hidden"
            />
            <Image
              priority
              src="/images/logodark.png"
              width={50}
              height={50}
              alt="Logo for dark mode"
              className="hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex gap-6 font-medium text-sm">
            <Link href="/" className="hover:text-gray-600">New & Featured</Link>
            <Link href="/search?category=&q=men" className="hover:text-gray-600">Men</Link>
            <Link href="/search?category=&q=women" className="hover:text-gray-600">Women</Link>
            <Link href="/search?category=&q=kids" className="hover:text-gray-600">Kids</Link>
            <Link href="/search?category=&q=sale" className="hover:text-gray-600">Sale</Link>
            <Link href="/search?category=&q=limited" className="hover:text-gray-600">Limited</Link>
          </nav>

          {/* Search */}
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;