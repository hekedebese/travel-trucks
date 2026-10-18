import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import css from './NoCampers.module.css';

type Props = {
  onClear: () => void;
};

const NoCampers = ({ onClear }: Props) => {
  return (
    <div className={css.wrapper}>
      <Image
        className={css.image}
        src="/no-campers.svg"
        alt=""
        width={488}
        height={463}
      />

      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.buttons}>
        <button type="button" className={css.clear} onClick={onClear}>
          <FiX size={24} />
          Clear filters
        </button>
        <button type="button" className={css.viewAll} onClick={onClear}>
          View all campers
        </button>
      </div>
    </div>
  );
};

export default NoCampers;
