
import { Metadata } from 'next';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import SignUpForm from './sign-up-form';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const SignUpPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="w-full max-w-sm space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-black dark:text-white">
          Sign Up
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
