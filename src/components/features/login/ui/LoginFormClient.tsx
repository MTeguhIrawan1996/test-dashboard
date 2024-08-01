'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Group, Stack } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FormController, PrimaryButton } from '@/components/elements';

import {
  ILoginTypeSchema,
  loginSchemaValidation,
} from '@/utils/validation/auth/auth-validation';

export function LoginFormClient() {
  const t = useTranslations('auth.login');
  const router = useRouter();

  const methods = useForm<ILoginTypeSchema>({
    resolver: zodResolver(loginSchemaValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const handleSubmitForm: SubmitHandler<ILoginTypeSchema> = async () => {
    router.push('/overview');
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <Stack>
          <FormController
            control='text-input'
            label='Email'
            name='email'
            placeholder='Email address'
            radius='md'
          />
          <FormController
            control='password-input'
            label='Password'
            name='password'
            placeholder='Password'
            radius='md'
          />
        </Stack>
        <Group justify='flex-end' mt='xl'>
          <PrimaryButton
            type='submit'
            size='md'
            label={t('signIn')}
            fullWidth
            fw={400}
            fz={14}
          />
        </Group>
      </form>
    </FormProvider>
  );
}
