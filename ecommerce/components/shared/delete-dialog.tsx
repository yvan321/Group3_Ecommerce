'use client';
import { useState } from 'react';
import { useTransition } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

const DeleteDialog = ({
  id,
  action,
}: {
  id: string;
  action: (id: string) => Promise<{ success: boolean; message: string }>;
}) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleDeleteClick = () => {
    startTransition(async () => {
      const res = await action(id);

      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message,
        });
      } else {
        setOpen(false);
        toast({
          description: res.message,
        });
      }
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size='sm' variant='destructive' className='ml-2'>
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-800 shadow-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone
          </AlertDialogDescription>
        </AlertDialogHeader>
       <AlertDialogFooter>
  <AlertDialogCancel
    className="bg-muted text-muted-foreground hover:bg-muted/80"
  >
    Cancel
  </AlertDialogCancel>
  <Button
    className="bg-red-600 text-white hover:bg-red-700"
    size="sm"
    disabled={isPending}
    onClick={handleDeleteClick}
  >
    {isPending ? 'Deleting...' : 'Delete'}
  </Button>
</AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
