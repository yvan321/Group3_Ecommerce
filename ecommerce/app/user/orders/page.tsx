import { Metadata } from 'next';
import { getMyOrders } from '@/lib/actions/order.actions';
import { formatCurrency, formatDateTime, formatId } from '@/lib/utils';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Pagination from '@/components/shared/pagination';

export const metadata: Metadata = {
  title: 'My Orders',
};

const OrdersPage = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await props.searchParams;

  const orders = await getMyOrders({
    page: Number(page) || 1,
  });

  return (
    <div className='space-y-6'>
  <h2 className='text-2xl font-bold tracking-tight'>Orders</h2>

  <div className='overflow-x-auto rounded-lg border border-gray-200 shadow-sm'>
    <Table>
      <TableHeader>
  <TableRow>
    <TableHead className="px-4 py-2 border-y border-gray-300 text-gray-500 text-sm font-medium">
      ID
    </TableHead>
    <TableHead className="px-4 py-2 border-y border-gray-300 text-gray-500 text-sm font-medium">
      Date
    </TableHead>
    <TableHead className="px-4 py-2 border-y border-gray-300 text-gray-500 text-sm font-medium">
      Total
    </TableHead>
    <TableHead className="px-4 py-2 border-y border-gray-300 text-gray-500 text-sm font-medium">
      Paid
    </TableHead>
    <TableHead className="px-4 py-2 border-y border-gray-300 text-gray-500 text-sm font-medium">
      Delivered
    </TableHead>
    <TableHead className="px-4 py-2 border-y border-gray-300 text-gray-500 text-sm font-medium">
      Actions
    </TableHead>
  </TableRow>
</TableHeader>
{/*TESSTTTT*/}

      <TableBody>
        {orders.data.map((order) => (
          <TableRow
            key={order.id}
            className='hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors'
          >
            <TableCell className='px-4 py-2'>{formatId(order.id)}</TableCell>
            <TableCell className='px-4 py-2'>
              {formatDateTime(order.createdAt).dateTime}
            </TableCell>
            <TableCell className='px-4 py-2'>
              {formatCurrency(order.totalPrice)}
            </TableCell>
            <TableCell className='px-4 py-2'>
              {order.isPaid && order.paidAt
                ? formatDateTime(order.paidAt).dateTime
                : <span className='text-red-500'>Not Paid</span>}
            </TableCell>
            <TableCell className='px-4 py-2'>
              {order.isDelivered && order.deliveredAt
                ? formatDateTime(order.deliveredAt).dateTime
                : <span className='text-red-500'>Not Delivered</span>}
            </TableCell>
            <TableCell className='px-4 py-2'>
              <Link href={`/order/${order.id}`}>
                <button className='bg-black text-white px-3 py-1 rounded hover:opacity-90'>
                  Details
                </button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    {orders.totalPages > 1 && (
      <div className='mt-4'>
        <Pagination
          page={Number(page) || 1}
          totalPages={orders?.totalPages}
        />
      </div>
    )}
  </div>
</div>

  );
};

export default OrdersPage;