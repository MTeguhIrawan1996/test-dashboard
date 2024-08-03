import {
  MantineSpacing,
  Paper,
  PaperProps,
  Stack,
  StyleProp,
  Text,
} from '@mantine/core';
import * as React from 'react';

import classes from '@/components/elements/papers/Papper.module.css';

type IWidgetProps = {
  label: string;
  value: string;
  stackPy?: StyleProp<MantineSpacing>;
  withBorder?: boolean;
} & Omit<PaperProps, 'withBorder'>;

export const Widget = ({
  label,
  value,
  stackPy = 'xl',
  withBorder = true,
  ...rest
}: IWidgetProps) => {
  return (
    <Paper
      shadow='sm'
      style={{
        cursor: 'pointer',
      }}
      className={classes[withBorder ? 'widget-withBorder' : 'widget']}
      {...rest}
    >
      <Stack justify='center' align='center' py={stackPy}>
        <Text fz='md' fw={600} className={classes['textWidget']}>
          {label}
        </Text>
        <Text fz='h2' fw={700}>
          {value}
        </Text>
      </Stack>
    </Paper>
  );
};
