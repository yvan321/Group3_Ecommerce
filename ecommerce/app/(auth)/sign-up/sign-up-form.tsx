'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUpUser } from '@/lib/actions/user.actions';
import { signUpDefaultValues } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        className='w-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-300'
        variant='default'
      >
        {pending ? 'Signing Up...' : 'Sign Up'}
      </Button>
    );
  };

  return (
    <form action={action} className='space-y-4'>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />

      <Input
        id='name'
        name='name'
        type='text'
        autoComplete='name'
        placeholder='Name'
        defaultValue={signUpDefaultValues.name}
      />

      <Input
        id='email'
        name='email'
        type='email'
        autoComplete='email'
        placeholder='Email'
        defaultValue={signUpDefaultValues.email}
      />

      <div className="relative">
        <Input
          id='password'
          name='password'
          type={showPassword ? 'text' : 'password'}
          autoComplete='new-password'
          placeholder='Password'
          required
          defaultValue={signUpDefaultValues.password}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-2.5 text-zinc-500 dark:text-zinc-400"
          aria-label="Toggle password visibility"
        >
          {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
        </button>
      </div>

      <div className="relative">
        <Input
          id='confirmPassword'
          name='confirmPassword'
          type={showConfirmPassword ? 'text' : 'password'}
          autoComplete='new-password'
          placeholder='Confirm Password'
          required
          defaultValue={signUpDefaultValues.confirmPassword}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword((prev) => !prev)}
          className="absolute right-3 top-2.5 text-zinc-500 dark:text-zinc-400"
          aria-label="Toggle confirm password visibility"
        >
          {showConfirmPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
        </button>
      </div>

      <SignUpButton />

      {data && !data.success && (
        <div className='text-center text-sm text-red-500'>{data.message}</div>
      )}

      <p className='text-sm text-center text-muted-foreground'>
        Already have an account?{' '}
        <Link href='/sign-in' className='font-medium text-black dark:text-white underline underline-offset-4'>
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
