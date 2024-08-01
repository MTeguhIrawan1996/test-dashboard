import { Burger, Group, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import {
  IconBook2,
  IconBulb,
  IconChartPieFilled,
  IconLogout,
  IconSwitchHorizontal,
  IconTicket,
  IconUserFilled,
  IconUsersGroup,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import classes from '@/components/layouts/dashboard/Dashboard.module.css';

import { PrimaryLink } from '@/components/elements';

const tabs = {
  admin: [
    { link: '/overview', label: 'Overview', icon: IconChartPieFilled },
    { link: '/tickets', label: 'Tickets', icon: IconTicket },
    { link: '', label: 'Ideas', icon: IconBulb },
    { link: '', label: 'Contact', icon: IconUsersGroup },
    { link: '', label: 'Agents', icon: IconUserFilled },
    { link: '', label: 'Articles', icon: IconBook2 },
  ],
  guest: [{ link: '', label: 'Tickets', icon: IconTicket }],
};

type INavbar = {
  opened: boolean;
  toggle: () => void;
};

export const Navbar = ({ opened, toggle }: INavbar) => {
  const pathname = usePathname();
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [section, setSection] = useState<'admin' | 'guest'>('admin');

  const links = tabs[section].map((item) => (
    <PrimaryLink
      className={classes.link}
      data-active={item.link === pathname || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </PrimaryLink>
  ));

  return (
    <nav className={classes.navbar}>
      <Group justify='space-between' px='lg'>
        <Group align='center' py='xl'>
          <MantineLogo color='deep-blue' type='mark' size={40} />
          <Text fw={500} size='lg' c='gray.5'>
            Dashboard Kit
          </Text>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom='sm'
          size='md'
          color='gray.4'
          lineSize={3}
        />
      </Group>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <PrimaryLink href='#' className={classes.link}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Settings</span>
        </PrimaryLink>

        <PrimaryLink href='#' className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Subscription</span>
        </PrimaryLink>
      </div>
    </nav>
  );
};
