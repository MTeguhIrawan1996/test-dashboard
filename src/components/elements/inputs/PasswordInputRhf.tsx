'use client';

import { Group, PasswordInput, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useController } from 'react-hook-form';

import classes from '@/components/elements/inputs/input.module.css';

import { FieldErrorMessage } from '@/components/elements/typography';

import { IPasswordInputRhfProps } from '@/types/forms-input-rhf';

export function PasswordInputRhf({
  name,
  label,
  ...rest
}: IPasswordInputRhfProps) {
  const t = useTranslations();

  const { field, fieldState } = useController({ name });

  return (
    <PasswordInput
      {...field}
      classNames={{
        error: classes.error,
        input: classes.input,
        label: classes.label,
      }}
      labelProps={{
        w: '100%',
      }}
      label={
        <Group justify='space-between' align='center'>
          <Text fz={12} tt='uppercase' fw={500}>
            {t(`input.${label}`)}
          </Text>
          <Text fz={12} fw={500}>
            {t('auth.login.forgotPassword')}
          </Text>
        </Group>
      }
      error={
        fieldState &&
        fieldState.error && (
          <FieldErrorMessage>
            {t(`validation.${fieldState.error.message}`, { value: '8' })}
          </FieldErrorMessage>
        )
      }
      {...rest}
    />
  );
}
