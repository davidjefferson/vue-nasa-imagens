import { render } from '@testing-library/vue';
import Empty from '../../src/_shared/components/Empty.vue';
import { describe, it, expect } from 'vitest';

describe('EmptyComponent', () => {
  it('renders message correctly', async () => {
    const { getByText } = render(Empty);

    // Verifica se o texto do título está presente
    const title = getByText('Nenhum dado encontrado');
    expect(title).toBeInTheDocument();

    // Verifica se o texto do parágrafo está presente
    const paragraph = getByText('Verifique as informações de pesquisa.');
    expect(paragraph).toBeInTheDocument();
  });
});
