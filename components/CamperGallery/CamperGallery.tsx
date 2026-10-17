'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { CamperImage } from '@/types/camper';

import 'swiper/css';
import 'swiper/css/thumbs';
import css from './CamperGallery.module.css';

type Props = {
  images: CamperImage[];
  name: string;
};

const CamperGallery = ({ images, name }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const sorted = [...images].sort((a, b) => a.order - b.order);

  return (
    <div className={css.gallery}>
      <Swiper
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={css.main}
      >
        {sorted.map((img, index) => (
          <SwiperSlide key={img.id}>
            <Image
              className={css.mainImage}
              src={img.original}
              alt={`${name} photo ${index + 1}`}
              width={638}
              height={515}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        watchSlidesProgress
        slidesPerView={4}
        spaceBetween={32}
        className={css.thumbs}
      >
        {sorted.map((img, index) => (
          <SwiperSlide key={img.id} className={css.thumb}>
            <Image
              className={css.thumbImage}
              src={img.thumb}
              alt={`${name} thumbnail ${index + 1}`}
              width={135}
              height={145}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CamperGallery;
