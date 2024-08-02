'use client';

import { AreaChart as MantineChart } from '@mantine/charts';
import { Stack, Text, Title } from '@mantine/core';
import { useTranslations } from 'next-intl';
import * as React from 'react';

import { chartExampleData } from '@/components/elements/charts/data';

export const AreaChart = () => {
  const t = useTranslations('overview');

  return (
    <Stack p='xl' gap='xl' pos='relative' h={{ base: 500, md: '100%' }}>
      <Stack gap='xs' pos='absolute'>
        <Title order={2} fz={20} fw={500}>
          {t('todaysTrends')}
        </Title>
        <Text component='span' fz={12} c='gray.5'>
          {t('nthAsOf', { value: '25 May 2019, 09:41 PM' })}
        </Text>
      </Stack>
      <MantineChart
        h={{ base: '100%', md: '90%' }}
        data={chartExampleData}
        dataKey='date'
        withLegend
        withDots
        dotProps={{
          r: 0,
        }}
        activeDotProps={{ r: 8, strokeWidth: 6 }}
        gridAxis='x'
        gridProps={{
          strokeDasharray: 0,
        }}
        yAxisProps={{
          tickMargin: 20,
          type: 'number',
          orientation: 'right',
          domain: [0, 60],
          tickCount: 7,
        }}
        series={[
          { name: 'today', color: 'indigo.6', label: t('today') },
          { name: 'yesterday', color: 'gray.2', label: t('yesterday') },
        ]}
        curveType='natural'
        legendProps={{
          iconType: 'star',
          iconSize: 12,
        }}
        styles={{
          legend: {
            marginBottom: 50,
            paddingTop: 30,
          },
          legendItemName: {
            color: 'var(--mantine-color-gray-5)',
            fontSize: 12,
          },
        }}
      />
    </Stack>
  );
};
