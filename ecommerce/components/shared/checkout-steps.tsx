'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className="flex w-full justify-between items-center gap-2 mb-10">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index, arr) => (
          <React.Fragment key={step}>
            <div
              className={cn(
                'flex-1 text-center px-2 py-2 rounded-full text-[10px] sm:text-xs border font-medium break-words whitespace-normal',
                index === current
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600'
              )}
            >
              {step}
            </div>
            {index !== arr.length - 1 && (
              <div className="w-2 sm:w-4 h-px bg-gray-300 dark:bg-gray-600" />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default CheckoutSteps;
