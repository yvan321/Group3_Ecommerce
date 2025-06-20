'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2025-01-20T00:00:00');

const calculateTimeRemaining = (targetDate: Date) => {
  const currentTime = new Date();
  const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0);
  return {
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  };
};

const DealCountdown = () => {
  const [time, setTime] = useState<ReturnType<typeof calculateTimeRemaining>>();

  useEffect(() => {
    setTime(calculateTimeRemaining(TARGET_DATE));

    const timerInterval = setInterval(() => {
      const newTime = calculateTimeRemaining(TARGET_DATE);
      setTime(newTime);

      if (
        newTime.days === 0 &&
        newTime.hours === 0 &&
        newTime.minutes === 0 &&
        newTime.seconds === 0
      ) {
        clearInterval(timerInterval);
      }

      return () => clearInterval(timerInterval);
    }, 1000);
  }, []);

  if (!time) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20 px-4">
        <div className="flex flex-col gap-2 justify-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Loading Countdown...</h3>
        </div>
      </section>
    );
  }

  const dealEnded =
    time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20 px-4">
      <div className="flex flex-col gap-4 justify-center text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold">
          {dealEnded ? 'Deal Has Ended' : 'Deal Of The Month'}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          {dealEnded
            ? 'This deal is no longer available. Check out our latest promotions!'
            : `Get ready for a shopping experience like never before with our Deals of the Month! Every purchase comes with exclusive perks and offers, making this month a celebration of savvy choices and amazing deals. Don’t miss out! 🎁🛒`}
        </p>

        {!dealEnded && (
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatBox label="Days" value={time.days} />
            <StatBox label="Hours" value={time.hours} />
            <StatBox label="Minutes" value={time.minutes} />
            <StatBox label="Seconds" value={time.seconds} />
          </ul>
        )}

        <div className="text-center md:text-left">
          <Button asChild>
            <Link href="/search">View Products</Link>
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/promo.jpg"
          alt="promotion"
          width={300}
          height={200}
          className="rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
};

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className="p-4 bg-muted rounded-lg text-center shadow-sm">
    <p className="text-xl sm:text-2xl font-bold">{value}</p>
    <p className="text-sm">{label}</p>
  </li>
);

export default DealCountdown;
