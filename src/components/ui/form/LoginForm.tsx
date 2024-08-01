import { Paper, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useTranslations } from 'next-intl';
import * as React from 'react';

type ILoginFormUi = {
  children: React.ReactNode;
};

export const LoginFormUi = ({ children }: ILoginFormUi) => {
  const t = useTranslations('auth.login');
  return (
    <Paper
      radius='md'
      shadow='sm'
      p='xl'
      withBorder
      w={{ base: '90%', xs: 400 }}
    >
      <Stack gap='lg'>
        <Stack align='center'>
          <MantineLogo color='deep-blue' type='mark' size={50} />
          <Text fz={20} fw={500} c='gray.4'>
            Dashboard Kit
          </Text>
        </Stack>
        <Stack align='center' gap={4}>
          <Text fz={{ base: 20, xs: 24 }} fw={600} c='dark.5'>
            {t('title')}
          </Text>
          <Text fz={{ base: 12, xs: 14 }} fw={400} c='gray.4'>
            {t('subTitle')}
          </Text>
        </Stack>
        {children}
        <Text ta='center' fz={14} fw={400} c='gray.4'>
          {t('dHaveAccount')}{' '}
          <Text component='span' fz={14} c='deep-blue' fw={500}>
            {t('signUp')}
          </Text>
        </Text>
      </Stack>
    </Paper>
  );
};
