import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    BASE_URL: z.string().min(5),
  },

  client: {
    NEXT_PUBLIC_REST_API_URL: z.string().min(5),
  },

  shared: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_REST_API_URL: process.env.NEXT_PUBLIC_REST_API_URL,
  },
});
