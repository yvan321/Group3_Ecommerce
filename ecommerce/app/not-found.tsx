'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
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
      <div className='p-6 w-1/3 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold mb-4'>Not Found</h1>
        <p className='text-destructive'>Could not find requested page</p>
        <Button variant='outline' className='mt-4 ml-2' asChild>
          <Link href='/'>Back To Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
