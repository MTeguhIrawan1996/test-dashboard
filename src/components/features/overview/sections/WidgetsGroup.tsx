import { SimpleGrid } from '@mantine/core';
import { useTranslations } from 'next-intl';
import * as React from 'react';

import { Widget } from '@/components/elements';

export const WidgetsGroup = () => {
  const t = useTranslations('overview');
  return (
    <SimpleGrid spacing='xl' cols={{ base: 2, md: 4 }}>
      <Widget label={t('unresolved')} value='60' />
      <Widget label={t('overdue')} value='16' />
      <Widget label={t('open')} value='43' />
      <Widget label={t('onHold')} value='64' />
    </SimpleGrid>
  );
};
