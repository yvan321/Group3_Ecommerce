import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/shared/header/menu';
import { MainNav } from './main-nav';
import AdminSearch from '@/components/admin/admin-search';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
   <div className="p-4">
     
      {/* Top strip with Login/Signup and ModeToggle */}
      <div className="w-full flex justify-end px-6 md:px-10 py-1 border-b">
        <Menu />
      </div>
      <div className="flex flex-col">
        {/* Header */}
        <div className="border-b container mx-auto">
          <div className="flex flex-wrap items-center justify-between px-4 py-3 gap-4 sm:gap-0 h-auto sm:h-16">

            {/* Left: Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                priority
                src="/images/logolight.png"
                width={50}
                height={50}
                alt={APP_NAME}
                className="block dark:hidden"
              />
              <Image
                priority
                src="/images/logodark.png"
                width={50}
                height={50}
                alt={APP_NAME}
                className="hidden dark:block"
              />
            </Link>

            {/* Center: Navigation */}
            <div className="flex-1 min-w-0 mx-0 sm:mx-10">
              <MainNav className="w-full overflow-x-auto whitespace-nowrap text-center sm:text-left" />
            </div>

            {/* Right: Search + Menu */}
            <div className="flex items-center space-x-4 shrink-0">
              <AdminSearch />
            
            </div>
          </div>
        </div>

        {/* Main Page Content */}
        <div className="flex-1 space-y-4 p-6 sm:p-8 pt-6 container mx-auto">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}