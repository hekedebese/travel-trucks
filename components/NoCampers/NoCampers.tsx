import Image from 'next/image';
import css from './NoCampers.module.css';

type Props = {
  onClear: () => void;
};

const NoCampers = ({ onClear }: Props) => {
  return (
    <div className={css.wrapper}>
      <Image src="/no-campers.svg" alt="" width={320} height={200} />

      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn&apos;t find any campers that match your filters. Try adjusting
        your search or clearing some filters.
      </p>

      <div className={css.buttons}>
        <button type="button" onClick={onClear}>
          Clear filters
        </button>
        <button type="button" onClick={onClear}>
          View all campers
        </button>
      </div>
    </div>
  );
};

export default NoCampers;
