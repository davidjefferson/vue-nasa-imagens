import { render } from '@testing-library/vue';
import Footer from '../../src/_shared/components/Footer.vue';
import { describe, it, expect } from 'vitest';

describe('Footer', () => {
  it('renders footer with correct content', async () => {
    const { getByRole, getByText } = render(Footer, {
      data() {
        return {
          version: '1.0.0'
        };
      }
    });

    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    const versionText = getByText('Version: 1.0.0');
    expect(versionText).toBeInTheDocument();

    const apiLink = getByText('Nasa APIs') as HTMLAnchorElement;
    expect(apiLink).toBeInTheDocument();
    expect(apiLink.href).toBe('https://api.nasa.gov/');

  });
});