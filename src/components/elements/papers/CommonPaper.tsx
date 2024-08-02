import { Paper, PaperProps, rem } from '@mantine/core';
import * as React from 'react';

type ICommonPaperProps = {
  children: React.ReactNode;
} & PaperProps;

export const CommonPaper = ({ children, ...rest }: ICommonPaperProps) => {
  return (
    <Paper
      shadow='sm'
      radius='md'
      style={{
        overflow: 'hidden',
        border: `${rem('2px')} solid var(--mantine-color-gray-4)`,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
};
