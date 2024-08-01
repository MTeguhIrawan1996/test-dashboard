import { HomePage } from '@/components/features';

import { render, screen } from '@/test-utils';

describe('Home component', () => {
  it('has correct Next.js theming section link', () => {
    render(<HomePage />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/',
    );
  });
});
