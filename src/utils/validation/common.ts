import { z } from 'zod';

export const zEmailValidation = z
  .string()
  .min(1, { message: 'emailIsRequired' })
  .email({ message: 'Format email salah' });

export const zPasswordValidation = z
  .string()
  .min(8, { message: 'passwordMinimum' })
  .regex(/^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]*$/, {
    message: 'Format kata sandi salah',
  });
