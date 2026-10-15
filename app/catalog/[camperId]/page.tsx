import { getSingleCamper } from '@/src/lib/api';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import CamperDetailsClient from './CamperDetailsClient.client';

type Props = {
  params: Promise<{ camperId: string }>;
};

const CamperDetails = async ({ params }: Props) => {
  const { camperId } = await params;
  const queryClient = new QueryClient();

  await queryClient.query({
    queryKey: ['camper', camperId],
    queryFn: () => getSingleCamper(camperId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
};

export default CamperDetails;
