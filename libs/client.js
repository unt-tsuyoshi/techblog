import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'aouiowrv4o',
  apiKey: process.env.API_KEY,
});