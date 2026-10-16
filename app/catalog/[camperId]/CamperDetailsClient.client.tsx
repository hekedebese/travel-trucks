'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getSingleCamper, getCamperReviews } from '@/src/lib/api';

import { FaStar } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';

import css from '@/components/Icons.module.css';

import Image from 'next/image';

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

  const { data: review } = useQuery({
    queryKey: ['review'],
    queryFn: () => getCamperReviews(camperId),
    refetchOnMount: false,
  });

  const formattedLocation = camper?.location.split(', ').reverse().join(', ');

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Some error..</p>;

  return (
    <div>
      <div>
        {camper.gallery?.[0]?.original && (
          <Image
            src={camper.gallery[0].original}
            alt={camper.name}
            width={638}
            height={677}
            loading="eager"
          />
        )}
      </div>

      <div>
        {camper.name}
        <p>
          <FaStar className={css.starIcon} />
          <span>
            {camper.rating}({camper.totalReviews} Reviews)
          </span>
        </p>
        <p>
          <FiMap className={css.mapIcon} />
          <span>{formattedLocation}</span>
        </p>
        <p>&#x20AC;{camper.price}</p>
        <p>{camper.description}</p>
      </div>

      <div>
        <h3>Vehicle details</h3>
        <ul>
          {camper.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
        <ul>
          <li>
            <span>Form</span>
            <span>{camper.form}</span>
          </li>
          <li>
            <span>Length</span>
            <span>{camper.length}</span>
          </li>
          <li>
            <span>Width</span>
            <span>{camper.width}</span>
          </li>
          <li>
            <span>Height</span>
            <span>{camper.height}</span>
          </li>
          <li>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </li>
          <li>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>

      <div>
        <h3>Reviews</h3>

        <div>
          {review?.map((item) => (
            <div key={item.id}>
              <div>{item.reviewer_name[0]}</div>

              <h4>{item.reviewer_name}</h4>
              <p>Rating: {item.reviewer_rating}</p>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>

        <div>
          <p>Book your campervan now</p>
          <p>Stay connected! We are always ready to help you.</p>

          <form>
            <div>
              <label htmlFor="name"></label>
              <input id="name" type="text" required placeholder="Name*" />
            </div>

            <div>
              <label htmlFor="email"></label>
              <input id="email" type="email" required placeholder="Email*" />
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsClient;
