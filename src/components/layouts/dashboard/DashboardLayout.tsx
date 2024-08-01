'use client';

import { AppShell, Container, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import * as React from 'react';

import classes from '@/components/layouts/dashboard/Dashboard.module.css';

import { Header } from '@/components/layouts/dashboard/Header';
import { Navbar } from '@/components/layouts/dashboard/Navbar';

interface IAppShellDashboardLayoutProps {
  children: React.ReactNode;
}

export const AppShellDashboardLayout = ({
  children,
}: IAppShellDashboardLayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: { base: 250, md: 300 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Navbar className={classes.appshellnav}>
        <AppShell.Section component={ScrollArea}>
          <Navbar opened={opened} toggle={toggle} />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main className={classes.main}>
        <Container fluid>
          <Header opened={opened} toggle={toggle} />
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
