import { AmenitiesTag } from '@/constants/amenities';

export interface CamperImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: AmenitiesTag[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
  gallery?: CamperImage[];
}

export interface CamperReview {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number | 0;
  comment: string;
  createdAt: string;
}
