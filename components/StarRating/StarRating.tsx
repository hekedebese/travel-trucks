import { FaStar } from 'react-icons/fa';
import css from './StarRating.module.css';

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  return (
    <div className={css.stars} aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <FaStar key={n} className={n <= rating ? css.filled : css.empty} />
      ))}
    </div>
  );
};

export default StarRating;
