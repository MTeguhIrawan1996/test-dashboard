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

const mock = [
  {
    email: 'admin@gmail.com',
    role: 'admin',
    password: 'Qwerty123',
  },
  {
    email: 'guest@gmail.com',
    role: 'guest',
    password: 'Qwerty123',
  },
];

export function LoginFormClient() {
  const t = useTranslations();
  const router = useRouter();

  const methods = useForm<ILoginTypeSchema>({
    resolver: zodResolver(loginSchemaValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const handleSubmitForm: SubmitHandler<ILoginTypeSchema> = async ({
    email,
    password,
  }) => {
    const currentAccount = mock.find((o) => o.email === email);
    if (currentAccount) {
      if (currentAccount?.password === password) {
        router.push(`/overview?role=${currentAccount.role}`);
      }
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <Stack>
          <FormController
            control='text-input'
            label='email'
            name='email'
            placeholder={t('input.emailAddress')}
            radius='md'
          />
          <FormController
            control='password-input'
            label='password'
            name='password'
            placeholder={t('input.password')}
            radius='md'
          />
        </Stack>
        <Group justify='flex-end' mt='xl'>
          <PrimaryButton
            type='submit'
            size='md'
            label={t('auth.login.signIn')}
            fullWidth
            fw={400}
            fz={14}
          />
        </Group>
      </form>
    </FormProvider>
  );
}
