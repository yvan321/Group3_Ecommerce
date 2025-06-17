import React from 'react';
import { cn } from '@/lib/utils';

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-10'>
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index, arr) => (
          <React.Fragment key={step}>
            <div
              className={cn(
                'p-2 w-56 rounded-full text-center text-sm transition-colors border font-medium',
                index === current
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600'
              )}
            >
              {step}
            </div>
            {index !== arr.length - 1 && (
              <hr className='hidden md:block w-16 border-t border-gray-300 dark:border-gray-600' />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default CheckoutSteps;
