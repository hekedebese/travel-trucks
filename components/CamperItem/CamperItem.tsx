import { Camper } from '@/types/camper';
import Link from 'next/link';
import Image from 'next/image';

import { FaStar } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';
import { LiaSitemapSolid } from 'react-icons/lia';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { FaCar } from 'react-icons/fa6';
import icon from '../Icons.module.css';
import css from './CamperItem.module.css';

type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  const formattedLocation = item.location.split(', ').reverse().join(', ');
  return (
    <li className={css.item}>
      {item.coverImage && (
        <Image
          className={css.image}
          src={item.coverImage}
          alt={item.name}
          width={219}
          height={240}
          loading="eager"
        />
      )}

      <div className={css.wraper}>
        <div className={css.info}>
          <div className={css.top}>
            <h3 className={css.name}>{item.name}</h3>
            <p className={css.price}>&#x20AC;{item.price}</p>
          </div>

          <div className={css.meta}>
            <p className={css.metaItem}>
              <FaStar className={icon.starIcon} />
              <span>
                {item.rating}({item.totalReviews} Reviews)
              </span>
            </p>
            <p className={css.metaItem}>
              <FiMap className={icon.mapIcon} />
              <span>{formattedLocation}</span>
            </p>
          </div>

          <p className={css.description}>{item.description}</p>

          <ul className={css.badges}>
            <li className={css.badge}>
              <BsFillFuelPumpFill className={icon.fuelPumpIcon} />
              <span>{item.engine}</span>
            </li>
            <li className={css.badge}>
              <LiaSitemapSolid className={icon.transmissionIcon} />
              <span>{item.transmission}</span>
            </li>
            <li className={css.badge}>
              <FaCar className={icon.carIcon} />
              <span>{item.form.replace('_', ' ')}</span>
            </li>
          </ul>

          <Link
            className={css.button}
            href={`/catalog/${item.id}`}
            target="_blank"
          >
            Show more
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CamperItem;
