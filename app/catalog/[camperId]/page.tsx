import { Metadata } from 'next';
import { Suspense } from 'react';
import { getSingleCamper } from '@/src/lib/api';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import CamperDetailsClient from './CamperDetailsClient.client';
import Loader from '@/components/Loader/Loader';

type MetaProps = {
  params: Promise<{ camperId: string }>;
};

export async function generateMetadata({
  params,
}: MetaProps): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getSingleCamper(camperId);
    return {
      title: `${camper.name} | TravelTrucks`,
      description: camper.description.slice(0, 150),
    };
  } catch {
    return { title: 'Camper | TravelTrucks' };
  }
}

type Props = {
  params: Promise<{ camperId: string }>;
};

async function CamperDetailsContent({ params }: Props) {
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
}

export default function CamperDetails({ params }: Props) {
  return (
    <Suspense
      fallback={
        <Loader
          title="Loading camper..."
          text="Please wait while we fetch the details"
        />
      }
    >
      <CamperDetailsContent params={params} />
    </Suspense>
  );
}
