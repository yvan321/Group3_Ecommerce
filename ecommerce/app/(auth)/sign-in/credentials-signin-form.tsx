'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { signInDefaultValues } from '@/lib/constants';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import { useSearchParams } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

const CredentialsSignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        className="w-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-300 text-xs font-semibold"
      >
        {pending ? 'Signing In...' : 'Log In'}
      </Button>
    );
  };

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      <div className="space-y-4">
        <div>
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
            placeholder="Email"
            className="rounded-md px-4 py-2 border border-zinc-300 dark:border-zinc-700 dark:bg-black dark:text-white"
          />
        </div>

        <div className="relative">
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            autoComplete="current-password"
            defaultValue={signInDefaultValues.password}
            placeholder="Password"
            className="rounded-md px-4 py-2 pr-10 border border-zinc-300 dark:border-zinc-700 dark:bg-black dark:text-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-2.5 text-zinc-500 dark:text-zinc-400"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
          <span className="absolute right-0 bottom-[-20px] text-xs text-zinc-400">
            Forgot Password?
          </span>
        </div>
      </div>

      {data && !data.success && (
        <div className="text-center text-sm text-red-600">{data.message}</div>
      )}

      <SignInButton />

      <p className="text-center text-xs text-black dark:text-white">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" className="font-bold">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default CredentialsSignInForm;
