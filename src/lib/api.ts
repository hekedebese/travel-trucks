import axios from 'axios';

import { Camper, CamperReview } from '@/types/camper';

interface CampersListResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface CampersFilters {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

export interface CampersQuery {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

axios.defaults.baseURL = 'https://campers-api.goit.study';

export const getCampers = async (params: CampersQuery = {}) => {
  const res = await axios.get<CampersListResponse>('/campers', {
    params,
  });
  return res.data;
};

export const getCampersFilters = async () => {
  const res = await axios.get<CampersFilters>('/campers/filters');

  return res.data;
};

export const getSingleCamper = async (camperId: string) => {
  const res = await axios.get<Camper>(`/campers/${camperId}`);
  return res.data;
};

export const getCamperReviews = async (camperId: string) => {
  const res = await axios.get<CamperReview[]>(`/campers/${camperId}/reviews`);
  return res.data;
};
