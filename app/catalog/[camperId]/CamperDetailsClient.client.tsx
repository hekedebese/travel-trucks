'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getSingleCamper, getCamperReviews } from '@/src/lib/api';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import StarRating from '@/components/StarRating/StarRating';
import BookingForm from '@/components/BookingForm/BookingForm';

import { FaStar } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';

import icon from '@/components/Icons.module.css';
import css from './CamperDetails.module.css';

const CamperDetailsClient = () => {
  const { camperId } = useParams<{ camperId: string }>();

  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getSingleCamper(camperId),
  });

  const { data: reviews } = useQuery({
    queryKey: ['reviews', camperId],
    queryFn: () => getCamperReviews(camperId),
  });

  const formattedLocation = camper?.location.split(', ').reverse().join(', ');

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Some error..</p>;

  return (
    <div className={css.page}>
      <section className={css.top}>
        {camper.gallery && camper.gallery.length > 0 && (
          <CamperGallery images={camper.gallery} name={camper.name} />
        )}

        <div className={css.side}>
          <div className={css.card}>
            <h1 className={css.name}>{camper.name}</h1>

            <div className={css.meta}>
              <p className={css.metaItem}>
                <FaStar className={icon.starIcon} />
                <span>
                  {camper.rating}({camper.totalReviews} Reviews)
                </span>
              </p>
              <p className={css.metaItem}>
                <FiMap className={icon.mapIcon} />
                <span>{formattedLocation}</span>
              </p>
            </div>

            <p className={css.price}>&#x20AC;{camper.price}</p>
            <p className={css.description}>{camper.description}</p>
          </div>

          <div className={css.card}>
            <h2 className={css.detailsTitle}>Vehicle details</h2>

            <ul className={css.badges}>
              {camper.amenities.map((amenity) => (
                <li key={amenity} className={css.badge}>
                  {amenity}
                </li>
              ))}
            </ul>

            <ul className={css.specs}>
              <li className={css.row}>
                <span>Form</span>
                <span className={css.value}>
                  {camper.form.replace('_', ' ')}
                </span>
              </li>
              <li className={css.row}>
                <span>Length</span>
                <span>{camper.length}</span>
              </li>
              <li className={css.row}>
                <span>Width</span>
                <span>{camper.width}</span>
              </li>
              <li className={css.row}>
                <span>Height</span>
                <span>{camper.height}</span>
              </li>
              <li className={css.row}>
                <span>Tank</span>
                <span>{camper.tank}</span>
              </li>
              <li className={css.row}>
                <span>Consumption</span>
                <span>{camper.consumption}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className={css.reviewsTitle}>Reviews</h2>

        <div className={css.bottom}>
          <ul className={css.reviewList}>
            {reviews?.map((item) => (
              <li key={item.id} className={css.review}>
                <div className={css.reviewHead}>
                  <div className={css.avatar}>{item.reviewer_name[0]}</div>
                  <div>
                    <h3 className={css.reviewer}>{item.reviewer_name}</h3>
                    <StarRating rating={item.reviewer_rating} />
                  </div>
                </div>
                <p className={css.comment}>{item.comment}</p>
              </li>
            ))}
          </ul>

          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default CamperDetailsClient;
