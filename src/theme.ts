'use client';

import { createTheme, rem, virtualColor } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  /* Typography */
  fontFamily: 'Roboto, sans-serif',
  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
  },

  /* Colors */
  primaryShade: 6,
  primaryColor: 'deep-blue',
  colors: {
    'deep-blue': [
      '#ebefff',
      '#d5dafc',
      '#a9b1f1',
      '#7b87e9',
      '#5362e1',
      '#3a4bdd',
      '#2d3fdc',
      '#1f32c4',
      '#182cb0',
      '#0b259c',
    ],

    primary: virtualColor({
      name: 'primary',
      dark: 'red',
      light: 'blue',
    }),
  },

  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },

  /* Other */
  defaultRadius: 'md',
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
});
