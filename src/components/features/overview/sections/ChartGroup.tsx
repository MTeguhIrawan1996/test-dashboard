'use client';

import { em, Grid, rem, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import * as React from 'react';

import { CommonPaper, Widget } from '@/components/elements';

const AreaChart = dynamic(
  () => import('@/components/elements').then((mod) => mod.AreaChart),
  {
    ssr: false,
  },
);

export const ChartGroup = () => {
  const t = useTranslations('overview');
  const isDekstop = useMediaQuery(`(min-width: ${em(992)})`);

  return (
    <CommonPaper>
      <Grid gutter={0} grow align='stretch'>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <AreaChart />
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 4 }}
          style={{
            borderLeft: `${rem(isDekstop ? '2px' : '0')} solid var(--mantine-color-gray-4)`,
          }}
        >
          <Stack gap={0}>
            <Widget
              label={t('resolved')}
              value='449'
              radius={0}
              stackPy='lg'
              withBorder={false}
            />
            <Widget
              label={t('received')}
              value='449'
              radius={0}
              stackPy='lg'
              withBorder={false}
            />
            <Widget
              label={t('averageFirstResponseTime')}
              value='33m'
              radius={0}
              stackPy='lg'
              withBorder={false}
            />
            <Widget
              label={t('averageResponseTime')}
              value='33h 8m'
              radius={0}
              stackPy='lg'
              withBorder={false}
            />
            <Widget
              label={t('resolutionwithinSLA')}
              value='94%'
              radius={0}
              stackPy='lg'
              withBorder={false}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </CommonPaper>
  );
};
