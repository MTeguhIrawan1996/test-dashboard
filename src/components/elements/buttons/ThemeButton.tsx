'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon } from '@tabler/icons-react';
import * as React from 'react';

export function ThemeButton() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      c='gray.5'
      size='md'
      variant='transparent'
      aria-label='MoonIcon'
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
    >
      <IconMoon />
    </ActionIcon>
  );
}
