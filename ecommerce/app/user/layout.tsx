import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/shared/header/menu';
import MainNav from './main-nav';

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <div className="p-4">
     
      {/* Top strip with Login/Signup and ModeToggle */}
      <div className="w-full flex justify-end px-6 md:px-10 py-1 border-b">
        <Menu />
      </div>
      <div className="flex flex-col">
        {/* Header */}
        <div className="border-b container mx-auto">
          <div className="flex items-center justify-between flex-wrap h-auto sm:h-16 px-4 py-3 gap-4">
            
            {/* Left: Logo */}
            <Link href="/" className="flex items-center shrink-0">
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

            {/* Center: Nav */}
            <div className="flex-1">
              <MainNav className="w-full overflow-auto whitespace-nowrap text-center sm:text-left" />
            </div>

          
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 space-y-6 p-4 sm:p-10 pt-8 container mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}