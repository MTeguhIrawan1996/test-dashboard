import * as React from 'react';

import { LoginFormClient } from '@/components/features/login/ui/LoginFormClient';
import { LoginFormUi } from '@/components/ui';

export const LoginForm = () => {
  return (
    <LoginFormUi>
      <LoginFormClient />
    </LoginFormUi>
  );
};
