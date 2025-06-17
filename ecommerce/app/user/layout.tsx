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
    <div className="p-4"> {/* Add your desired padding here */}
      <div className='flex flex-col'>
        <div className='border-b container mx-auto'>
          <div className='flex items-center h-16 px-4'>
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
            <MainNav className='mx-10' />
            <div className='ml-auto items-center flex space-x-4'>
              <Menu />
            </div>
          </div>
        </div>

        <div className='flex-1 space-y-6 p-10 pt-8 container mx-auto'>
  {children}
</div>
      </div>
    </div>
  );
}
