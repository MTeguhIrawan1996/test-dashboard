'use client';

import {
  ActionIcon,
  Avatar,
  Badge,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconFilterFilled, IconSortAscending } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import * as React from 'react';

import {
  CommonDataTable,
  CommonPaper,
  GlobalKebabButton,
} from '@/components/elements';

const mocks = [
  {
    ticketDetail: 'Contact Email not linked',
    customerName: 'Tom Cruise',
    priority: 'High',
    color: 'red.5',
    date: 'May 26, 2019',
  },
  {
    ticketDetail: 'Password reset issue',
    customerName: 'Robert Downey Jr.',
    priority: 'Low',
    color: 'orange.5',
    date: 'June 10, 2019',
  },
  {
    ticketDetail: 'Cannot login to account',
    customerName: 'Scarlett Johansson',
    priority: 'Normal',
    color: 'teal.5',
    date: 'July 14, 2019',
  },
  {
    ticketDetail: 'Payment gateway error',
    customerName: 'Chris Evans',
    priority: 'High',
    color: 'red.5',
    date: 'August 18, 2019',
  },
  {
    ticketDetail: 'Website loading slowly',
    customerName: 'Mark Ruffalo',
    priority: 'Low',
    color: 'orange.5',
    date: 'September 22, 2019',
  },
  {
    ticketDetail: 'Feature request',
    customerName: 'Chris Hemsworth',
    priority: 'Normal',
    color: 'teal.5',
    date: 'October 26, 2019',
  },
  {
    ticketDetail: 'Bug in mobile app',
    customerName: 'Jeremy Renner',
    priority: 'High',
    color: 'red.5',
    date: 'November 30, 2019',
  },
  {
    ticketDetail: 'UI issue on dashboard',
    customerName: 'Paul Rudd',
    priority: 'Low',
    color: 'orange.5',
    date: 'December 4, 2019',
  },
];

export const TicketsTable = () => {
  const t = useTranslations('tickets');

  return (
    <CommonPaper>
      <Stack gap='lg'>
        <Group justify='space-between' px='xl' pt='xl' align='flex-start'>
          <Title order={2} fz={20} fw={600}>
            {t('allTickets')}
          </Title>
          <Group gap='xl'>
            <Group gap={2} justify='center' align='center'>
              <ActionIcon
                variant='transparent'
                size='lg'
                aria-label='Sort'
                c='gray.6'
              >
                <IconSortAscending
                  style={{ width: '70%', height: '70%' }}
                  stroke={1.5}
                />
              </ActionIcon>
              <Text fz={14} fw={700} c='gray.6'>
                Sort
              </Text>
            </Group>
            <Group gap={2} justify='center' align='center'>
              <ActionIcon
                variant='transparent'
                size='lg'
                aria-label='Filter'
                c='gray.6'
              >
                <IconFilterFilled
                  style={{ width: '70%', height: '70%' }}
                  stroke={1}
                />
              </ActionIcon>
              <Text fz={14} fw={700} c='gray.6'>
                Filter
              </Text>
            </Group>
          </Group>
        </Group>
        <CommonDataTable
          tableProps={{
            records: mocks || [],
            horizontalSpacing: 'xl',
            idAccessor: 'label',
            columns: [
              {
                accessor: 'ticketDetail',
                title: t('ticketDetail'),
                render: ({ ticketDetail }) => (
                  <Group>
                    <Avatar color='cyan' radius='xl'>
                      MK
                    </Avatar>
                    <Stack gap={2}>
                      <Text fz={16} fw={700}>
                        {ticketDetail}
                      </Text>
                      <Text fz={14} fw={600} c='gray.5'>
                        Update 1 day ago
                      </Text>
                    </Stack>
                  </Group>
                ),
              },
              {
                accessor: 'customerName',
                title: t('customerName'),
                render: ({ customerName }) => (
                  <Stack gap={2}>
                    <Text fz={16} fw={700}>
                      {customerName}
                    </Text>
                    <Text fz={14} fw={600} c='gray.5'>
                      On 24.05.2019
                    </Text>
                  </Stack>
                ),
              },
              {
                accessor: 'date',
                title: t('date'),
                render: ({ date }) => (
                  <Stack gap={2}>
                    <Text fz={16} fw={700}>
                      {date}
                    </Text>
                    <Text fz={14} fw={600} c='gray.5'>
                      6:30PM
                    </Text>
                  </Stack>
                ),
              },
              {
                accessor: 'priority',
                title: t('priority'),
                render: ({ priority, color }) => (
                  <Badge color={color} size='lg' fz={12} fw={500} radius='xl'>
                    {priority}
                  </Badge>
                ),
              },
              {
                accessor: 'action',
                title: '',
                render: () => (
                  <GlobalKebabButton
                    actionApprove={{
                      onClick: (e) => {
                        e.stopPropagation();
                      },
                    }}
                    actionReject={{
                      onClick: (e) => {
                        e.stopPropagation();
                      },
                    }}
                  />
                ),
              },
            ],
          }}
        />
      </Stack>
    </CommonPaper>
  );
};
