import { Switch, Text } from '@mantine/core';
import { useLocale } from 'next-intl';
import * as React from 'react';

import { Locale } from '@/config';
import { setUserLocale } from '@/services/locale';

export function InternatinoalizationButton() {
  const locale = useLocale();

  const handleSetLocale = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLocale(e.currentTarget.checked ? 'id' : 'en');
  };

  return (
    <Switch
      color='gray.5'
      checked={(locale as Locale) === 'id'}
      size='md'
      onLabel={<Text fz={12}>ID</Text>}
      offLabel={<Text fz={12}>EN</Text>}
      onChange={handleSetLocale}
    />
  );
}
