import { render } from '@testing-library/vue';
import NotFound from '../../src/_shared/components/NotFound.vue';
import { describe, it, expect } from 'vitest';

describe('NotFound.vue', () => {
  it('renders the correct content', () => {
    const { getByText, getByAltText } = render(NotFound);
    
    expect(getByText('Não Encontrado')).toBeInTheDocument();
    expect(getByText('Nenhuma informação encontrada para as datas informadas.')).toBeInTheDocument();
    expect(getByAltText('Não Encontrado')).toBeInTheDocument();
  });
});
