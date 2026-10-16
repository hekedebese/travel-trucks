import axios from 'axios';

import { Camper, CamperReview } from '@/types/camper';

export type CampersListResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
};

axios.defaults.baseURL = 'https://campers-api.goit.study';

export const getCampers = async () => {
  const res = await axios.get<CampersListResponse>('/campers');
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
