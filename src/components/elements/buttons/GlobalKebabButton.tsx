import {
  ActionIcon,
  Center,
  Menu,
  MenuItemProps,
  MenuProps,
  rem,
} from '@mantine/core';
import { IconCheck, IconDotsVertical, IconX } from '@tabler/icons-react';
import * as React from 'react';

interface IGlobalKebabButtonProps extends MenuProps {
  actionApprove?: MenuItemProps & React.ComponentPropsWithoutRef<'button'>;
  actionReject?: MenuItemProps & React.ComponentPropsWithoutRef<'button'>;
}

export const GlobalKebabButton: React.FunctionComponent<
  IGlobalKebabButtonProps
> = ({ actionApprove, actionReject, width = 120, ...menuProps }) => {
  return (
    <Center>
      <Menu
        shadow='sm'
        width={width}
        position='left'
        radius='sm'
        styles={{
          itemLabel: {
            fontSize: rem(12),
          },
          item: {
            padding: '8px 8px',
          },
        }}
        {...menuProps}
      >
        <Menu.Target>
          <ActionIcon
            size='xs'
            radius={4}
            variant='transparent'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <IconDotsVertical size='1.125rem' />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          {actionApprove ? (
            <Menu.Item
              leftSection={
                <IconCheck style={{ width: rem(14), height: rem(14) }} />
              }
              {...actionApprove}
            >
              Approve
            </Menu.Item>
          ) : null}
          {actionReject ? (
            <Menu.Item
              leftSection={
                <IconX style={{ width: rem(14), height: rem(14) }} />
              }
              {...actionReject}
            >
              Reject
            </Menu.Item>
          ) : null}
        </Menu.Dropdown>
      </Menu>
    </Center>
  );
};
