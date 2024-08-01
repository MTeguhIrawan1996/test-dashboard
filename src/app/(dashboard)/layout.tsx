import { AppShellDashboardLayout } from '@/components/layouts';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShellDashboardLayout>{children}</AppShellDashboardLayout>;
}
