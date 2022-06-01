import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'aouiowrv4o',
  apiKey: process.env.MICRO_CMS_API_KEY,
});
