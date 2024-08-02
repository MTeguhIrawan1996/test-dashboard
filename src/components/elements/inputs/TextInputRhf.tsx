'use client';

import { TextInput } from '@mantine/core';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useController } from 'react-hook-form';

import classes from '@/components/elements/inputs/input.module.css';

import { FieldErrorMessage } from '@/components/elements/typography';

import { ITextInputRhfProps } from '@/types/forms-input-rhf';

export function TextInputRhf({ name, label, ...rest }: ITextInputRhfProps) {
  const t = useTranslations();
  const { field, fieldState } = useController({ name });

  return (
    <TextInput
      {...field}
      classNames={{
        error: classes.error,
        input: classes.input,
        label: classes.label,
      }}
      label={t(`input.${label}`)}
      labelProps={{
        fw: 500,
        tt: 'uppercase',
      }}
      error={
        fieldState &&
        fieldState.error && (
          <FieldErrorMessage>
            {t(`validation.${fieldState.error.message}`)}
          </FieldErrorMessage>
        )
      }
      {...rest}
    />
  );
}
