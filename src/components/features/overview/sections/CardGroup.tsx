'use client';

import {
  ActionIcon,
  Anchor,
  Badge,
  Checkbox,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import * as React from 'react';

import { CommonDataTable, CommonPaper } from '@/components/elements';

const elements = [
  { label: 'Waiting on Feature Request', value: 12.011 },
  { label: 'Awaiting Customer Response', value: 14.007 },
  { label: 'Awaiting Developer Fix', value: 88.906 },
  { label: 'Pending', value: 137.33 },
];

export const CardGroup = () => {
  const t = useTranslations('overview');
  const [tasks, setTasks] = React.useState([
    {
      label: 'Finish ticket update',
      value: 'Urgent',
      color: 'yellow.6',
      checked: false,
    },
    {
      label: 'Create new ticket example',
      value: 'New',
      color: 'teal.6',
      checked: false,
    },
    {
      label: 'Update ticket report',
      value: 'Default',
      color: 'gray.5',
      checked: true,
    },
  ]);
  const [labelState, setLabelState] = React.useState('');

  const handleSetTasks = () => {
    setTasks((prev) => [
      ...prev,
      { label: labelState, value: 'New', color: 'teal.6', checked: false },
    ]);
    setLabelState('');
  };
  return (
    <SimpleGrid spacing='xl' cols={{ base: 1, md: 2 }}>
      <CommonPaper>
        <Stack gap='lg'>
          <Group justify='space-between' px='xl' pt='xl' align='flex-start'>
            <Stack gap='xs'>
              <Title order={2} fz={20} fw={500}>
                {t('unresolvedTickets')}
              </Title>
              <Text fz={12} c='gray.5'>
                Group:{' '}
                <Text fz={12} c='dark' fw={500} component='span'>
                  Support
                </Text>
              </Text>
            </Stack>
            <Anchor href='' fz={14} fw={500} c='primary' underline='never'>
              {t('viewDetails')}
            </Anchor>
          </Group>
          <CommonDataTable
            tableProps={{
              noHeader: true,
              records: elements || [],
              horizontalSpacing: 'xl',
              idAccessor: 'label',
              columns: [
                {
                  accessor: 'label',
                  render: ({ label }) => (
                    <Text fz={16} fw={500}>
                      {label}
                    </Text>
                  ),
                },
                {
                  accessor: 'value',
                  textAlign: 'right',
                  render: ({ value }) => (
                    <Text fz={14} fw={500} c='gray.5'>
                      {value}
                    </Text>
                  ),
                },
              ],
            }}
          />
        </Stack>
      </CommonPaper>
      <CommonPaper>
        <Stack gap='lg'>
          <Group justify='space-between' px='xl' pt='xl' align='flex-start'>
            <Stack gap='xs'>
              <Title order={2} fz={20} fw={500}>
                {t('task')}
              </Title>
              <Text fz={12} c='gray.5'>
                {t('today')}
              </Text>
            </Stack>
            <Anchor href='' fz={14} fw={500} c='primary' underline='never'>
              {t('viewAll')}
            </Anchor>
          </Group>
          <CommonDataTable
            tableProps={{
              noHeader: false,
              records: tasks || [],
              horizontalSpacing: 'xl',
              idAccessor: 'label',
              columns: [
                {
                  accessor: 'label',
                  titleStyle: {
                    paddingTop: 7,
                    paddingBottom: 7,
                  },
                  title: (
                    <TextInput
                      placeholder='Create new task'
                      size='md'
                      fw={500}
                      value={labelState}
                      onChange={(event) =>
                        setLabelState(event.currentTarget.value)
                      }
                      styles={{
                        input: {
                          border: 'none',
                          backgroundColor: 'transparent',
                          padding: '0',
                        },
                      }}
                    />
                  ),
                  render: ({ label, checked }) => (
                    <Checkbox
                      readOnly
                      checked={checked}
                      fw={500}
                      size='md'
                      label={label}
                      radius='xl'
                    />
                  ),
                },
                {
                  accessor: 'value',
                  textAlign: 'right',
                  titleStyle: {
                    paddingTop: 7,
                    paddingBottom: 7,
                  },
                  title: (
                    <ActionIcon
                      variant='filled'
                      aria-label='Plus'
                      color='gray.4'
                      onClick={handleSetTasks}
                    >
                      <IconPlus
                        style={{ width: '70%', height: '70%' }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  ),
                  render: ({ value, color }) => (
                    <Badge color={color} size='lg' radius='md'>
                      {value}
                    </Badge>
                  ),
                },
              ],
            }}
          />
        </Stack>
      </CommonPaper>
    </SimpleGrid>
  );
};
