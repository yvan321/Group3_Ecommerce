'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Input } from '../ui/input';
import { Search, X } from 'lucide-react';

const AdminSearch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [queryValue, setQueryValue] = useState(searchParams.get('query') || '');

  const formActionUrl = pathname.includes('/admin/orders')
    ? '/admin/orders'
    : pathname.includes('/admin/users')
      ? '/admin/users'
      : '/admin/products';

  useEffect(() => {
    setQueryValue(searchParams.get('query') || '');
  }, [searchParams]);

  return (
    <form action={formActionUrl} method='GET' className='relative'>
      {/* Desktop: always show search */}
      <div className='hidden md:block'>
        <Input
          type='search'
          placeholder='Search...'
          name='query'
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
          className='md:w-[150px] lg:w-[300px]'
        />
        <button className='sr-only' type='submit'>
          Search
        </button>
      </div>

      {/* Mobile: toggleable search */}
      <div className='block md:hidden'>
        {isOpen ? (
          <div className='relative w-[200px] transition-all'>
            <Input
              type='search'
              placeholder='Search...'
              name='query'
              value={queryValue}
              onChange={(e) => setQueryValue(e.target.value)}
              className='pr-8'
            />
            <button
              type='button'
              onClick={() => setIsOpen(false)}
              className='absolute right-2 top-1/2 -translate-y-1/2'
            >
              <X className='w-4 h-4 text-gray-500' />
            </button>
          </div>
        ) : (
          <button type='button' onClick={() => setIsOpen(true)}>
            <Search className='w-5 h-5 text-gray-700 dark:text-gray-300' />
          </button>
        )}
      </div>
    </form>
  );
};

export default AdminSearch;
