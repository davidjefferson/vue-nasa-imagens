import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import HomeSearchView from '../../src/views/home/partials/HomeSearchView.vue';

test('renders image gallery and navigates between weeks', async () => {
  const { getByText } = render(HomeSearchView, {
    data() {
      return {
        images: [
          {
            id: 1,
            media_type: 'image',
            url: 'https://example.com/image1.jpg',
            title: 'Image 1',
            explanation: 'This is image 1',
            date: '2024-07-01'
          },
          {
            id: 2,
            media_type: 'image',
            url: 'https://example.com/image2.jpg',
            title: 'Image 2',
            explanation: 'This is image 2',
            date: '2024-07-02'
          }
        ],
        startDate: new Date('2024-07-01'), 
        endDate: new Date('2024-07-07') 
      };
    }
  });

  expect(getByText('Galeria de Imagens')).toBeInTheDocument();

  expect(getByText('Mostrando de 23/06/2024 até 06/07/2024')).toBeInTheDocument();

  const image1 = getByText('Image 1');
  const image2 = getByText('Image 2');
  expect(image1).toBeInTheDocument();
  expect(image2).toBeInTheDocument();

  const nextButton = getByText('Próxima Semana');
  await fireEvent.click(nextButton);

  expect(getByText('Mostrando de 23/06/2024 até 06/07/2024')).toBeInTheDocument();
});
