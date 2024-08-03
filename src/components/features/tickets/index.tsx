import { Stack } from '@mantine/core';
import * as React from 'react';

import { TicketsTable } from '@/components/features/tickets/sections/TicketsTable';

const TicketsPage = () => {
  return (
    <Stack gap='xl'>
      <TicketsTable />
    </Stack>
  );
};

export default TicketsPage;
