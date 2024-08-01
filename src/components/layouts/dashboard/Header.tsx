import {
  ActionIcon,
  Avatar,
  Badge,
  Burger,
  Divider,
  Group,
  Text,
  Title,
} from '@mantine/core';
import { IconBell, IconSearch } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { ThemeButton } from '@/components/elements';

type IHeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export const Header = ({ opened, toggle }: IHeaderProps) => {
  const pathname = usePathname();
  const currentTitle = pathname.split('/')[1];

  return (
    <Group justify='space-between' py='lg'>
      <Group gap='sm'>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom='sm'
          size='md'
          color='dark.4'
          lineSize={3}
        />
        <Title order={1} tt='capitalize' fz={24} fw={500}>
          {currentTitle}
        </Title>
      </Group>
      <Group>
        <ThemeButton />
        <ActionIcon variant='transparent' c='gray.5'>
          <IconSearch />
        </ActionIcon>
        <ActionIcon pos='relative' variant='transparent' c='gray.5'>
          <IconBell />
          <Badge
            h={8}
            w={8}
            circle
            color='blue.5'
            pos='absolute'
            top={0}
            right={4}
          />
        </ActionIcon>
        <Divider h={30} mx='sm' my='auto' size='sm' orientation='vertical' />
        <Text fz={16} fw={400}>
          Jones Ferdinan
        </Text>
        <Avatar size='md' />
      </Group>
    </Group>
  );
};
