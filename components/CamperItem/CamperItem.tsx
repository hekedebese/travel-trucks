import { Camper } from '@/types/camper';
import Link from 'next/link';
import Image from 'next/image';

import { FaStar } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';
import { LiaSitemapSolid } from 'react-icons/lia';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCar } from 'react-icons/fa6';
import css from '../Icons.module.css';

type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  const formattedLocation = item.location.split(', ').reverse().join(', ');
  return (
    <li key={item.id}>
      <div>
        {item.coverImage && (
          <Image
            src={item.coverImage}
            alt={item.description}
            width={219}
            height={240}
            loading="eager"
          />
        )}
      </div>

      <div>
        <div>
          <h3>{item.name}</h3>
          <p>&#x20AC;{item.price}</p>
        </div>

        <div>
          <p>
            <FaStar className={css.starIcon} />
            <span>
              {item.rating}({item.totalReviews} Reviews)
            </span>
          </p>
          <p>
            <FiMap className={css.mapIcon} />
            <span>{formattedLocation}</span>
          </p>
        </div>
        <p>{item.description.slice(0, 60)}</p>
        <ul>
          <li>
            <BsFillFuelPumpFill className={css.fuelPumpIcon} />
            <span>{item.engine}</span>
          </li>
          <li>
            <LiaSitemapSolid className={css.transmissionIcon} />
            <span>{item.transmission}</span>
          </li>
          <li>
            <FaCar className={css.carIcon} />
            <span>{item.form}</span>
          </li>
        </ul>
        <Link href={`/catalog/${item.id}`}>Show more</Link>
      </div>
    </li>
  );
};

export default CamperItem;
