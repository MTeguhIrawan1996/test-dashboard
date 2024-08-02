import { Stack } from '@mantine/core';
import * as React from 'react';

import { CardGroup } from '@/components/features/overview/sections/CardGroup';
import { ChartGroup } from '@/components/features/overview/sections/ChartGroup';
import { WidgetsGroup } from '@/components/features/overview/sections/WidgetsGroup';

const OverviewPage = () => {
  return (
    <Stack gap='xl'>
      <WidgetsGroup />
      <ChartGroup />
      <CardGroup />
    </Stack>
  );
};

export default OverviewPage;
