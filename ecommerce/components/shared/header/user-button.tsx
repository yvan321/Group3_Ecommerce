import Link from 'next/link';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOutUser } from '@/lib/actions/user.actions';

const  UserButton = async () => {
    const session = await auth();

      if (!session) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm" className="font-bold">
          <Link href="/sign-in">Log In</Link>
        </Button>

        {/* Divider */}
        <span className="h-5 w-px bg-current opacity-50" />

        <Button asChild size="sm" className="font-bold">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
        )
    }

    const firstInitial = session.user?.name?.charAt(0).toUpperCase() ??
    'U';

    return<>
    <div className='flex gap-2 items-center'>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className='flex items-center'>
        <Button
          variant='ghost'
          className='relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-300'
        >
          {firstInitial}
        </Button>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
  className="w-56 bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-800 shadow-md"

  align="end"
  forceMount
>

      <DropdownMenuLabel className='font-normal'>
        <div className='flex flex-col space-y-1'>
          <p className='text-sm font-medium leading-none'>
            {session.user?.name}
          </p>
          <p className='text-xs leading-none text-muted-foreground'>
            {session.user?.email}
          </p>
        </div>
      </DropdownMenuLabel>

      <DropdownMenuItem>
  <Link className="w-full" href="/user/profile">
    User Profile
  </Link>
</DropdownMenuItem>
<DropdownMenuItem>
  <Link className='w-full' href='/user/orders'>
    Order History
  </Link>
</DropdownMenuItem>
  {session?.user?.role === 'admin' && (
            <DropdownMenuItem>
              <Link href='/admin/overview' className='w-full'>
                Admin
              </Link>
            </DropdownMenuItem>
          )}


      <DropdownMenuItem className="p-0 mb-1">            
              <Button
                className="w-full py-4 px-2 justify-start"
                variant="ghost"
                onClick={signOutUser}
              >
                Sign Out
              </Button>
          </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>
</>;


}
 
export default UserButton;