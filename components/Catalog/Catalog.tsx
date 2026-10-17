'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/src/lib/api';
import CamperFilter, {
  Filters,
} from '@/components/CamperFilters/CamperFilters';
import CamperList from '../CamperList/CamperList';
import Loader from '../Loader/Loader';
import NoCampers from '../NoCampers/NoCampers';
import css from './Catalog.module.css';

const PER_PAGE = 4;

const Catalog = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [resetKey, setResetKey] = useState(0);

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

  const handleReset = () => {
    setFilters({});
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className={css.wrapper}>
      <CamperFilter key={resetKey} onSearch={setFilters} />

      <div className={css.content}>
        {isError && <p>Something went wrong</p>}

        {!isLoading && !isError && campers.length === 0 && (
          <NoCampers onClear={handleReset} />
        )}

        {campers.length > 0 && <CamperList campers={campers} />}

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className={css.loadMore}
          >
            Load more
          </button>
        )}
      </div>

      {(isLoading || isFetchingNextPage) && <Loader />}
    </div>
  );
};

export default Catalog;
