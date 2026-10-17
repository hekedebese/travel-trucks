'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/src/lib/api';
import CamperFilters, { Filters } from '../CamperFilters/CamperFilters';
import CamperList from '../CamperList/CamperList';

const PER_PAGE = 4;

const Catalog = () => {
  const [filters, setFilters] = useState<Filters>({});

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['campers', filters],
    queryFn: ({ pageParam }) =>
      getCampers({ ...filters, page: pageParam, perPage: PER_PAGE }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <div>
      <CamperFilters onSearch={setFilters} />

      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong</p>}
        {!isLoading && !isError && campers.length === 0 && <p>Nothing found</p>}

        {campers.length > 0 && <CamperList campers={campers} />}

        {hasNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading...' : 'Load more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Catalog;
