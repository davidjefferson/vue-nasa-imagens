import { render } from '@testing-library/vue';
import { describe, it, expect } from 'vitest'; 
import Loading from "../../src/_shared/components/Loading.vue";
import { startLoading, stopLoading } from '../../src/_shared/utils/LoadingUtils';

describe('Loading Component', () => {
  it('deve exibir o spinner quando isLoading for verdadeiro', async () => {
    startLoading();

    const { container } = render(Loading);

    const spinner = container.querySelector('.loading-spinner');
    expect(spinner).toBeTruthy();
  });

  it('não deve exibir o spinner quando isLoading for falso', async () => {
    stopLoading();

    const { container } = render(Loading);
    
    const spinner = container.querySelector('.loading-spinner');
    expect(spinner).toBeNull();
  });
});
