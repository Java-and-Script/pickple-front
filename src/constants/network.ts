const PROD = import.meta.env.MODE === 'production';
export const BASE_URL = PROD ? import.meta.env.VITE_BASE_URL : '/api';

export const FETCH_SIZE = 20;
