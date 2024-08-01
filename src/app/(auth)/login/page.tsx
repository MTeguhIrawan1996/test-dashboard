import { useTranslations } from 'next-intl';
import * as React from 'react';

export default function Login() {
  const t = useTranslations('HomePage');

  return <h1>{t('title')}</h1>;
}
