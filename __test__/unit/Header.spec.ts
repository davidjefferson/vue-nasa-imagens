import { render } from '@testing-library/vue';
import Header from '../../src/_shared/components/Header.vue';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('renders header with correct content', async () => {
    const { getByText } = render(Header);

    const headerText = getByText('Desafio Appmax Front-End');
    expect(headerText).toBeInTheDocument();
  });
});
