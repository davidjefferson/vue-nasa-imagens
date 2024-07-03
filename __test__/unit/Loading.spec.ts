import { render } from '@testing-library/vue';
import { describe, it, expect } from 'vitest'; 
import Loading from "../../src/_shared/components/Loading.vue"

describe('Loading Component', () => {
  it('deve exibir o spinner quando isLoading for verdadeiro', async () => {
    const { container } = render(Loading, {
      data() {
        return {
          isLoading: true,
        };
      },
    });

    await container.querySelector('.loading-spinner');

    const spinner = container.querySelector('.loading-spinner');
    expect(spinner)
  });

  it('não deve exibir o spinner quando isLoading for falso', async () => {
    const { container } = render(Loading, {
      data() {
        return {
          isLoading: false,
        };
      },
    });

   
    const spinner = container.querySelector('.loading-spinner');
    expect(spinner).toBeNull();
  });
});
