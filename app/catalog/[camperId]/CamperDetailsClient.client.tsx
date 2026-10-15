'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getSingleCamper } from '@/src/lib/api';

const CamperDetailsClient = () => {
  const { camperId } = useParams<{ camperId: string }>();

  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getSingleCamper(camperId),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Some error..</p>;

  return (
    <div>
      <h2>{camper.name}</h2>
    </div>
  );
};

export default CamperDetailsClient;
