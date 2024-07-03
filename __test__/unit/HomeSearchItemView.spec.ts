import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import HomeSearchItemView from '../../src/views/home/partials/HomeSearchItemView.vue';

test('renders image details correctly and navigates to details page on button click', async () => {
  const image = {
    media_type: 'image',
    url: 'https://example.com/image.jpg',
    title: 'Test Image',
    explanation: 'This is a test image',
    date: '2024-07-03'
  };

  const setItemMock = (key: string, value: string) => {
    Object.defineProperty(localStorage, key, {
      value: value,
      writable: true
    });
  };

  Object.defineProperty(global, 'localStorage', {
    value: {
      setItem: setItemMock
    },
    writable: true
  });

  const mockRouterPush = (route: any) => {
   return route.name;
  };
  const mockRouter = {
    push: mockRouterPush
  };

  const { getByText } = render(HomeSearchItemView, {
    props: {
      image
    },
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  });

  const titleElement = getByText('Test Image');

  expect(titleElement).toBeInTheDocument();

  await fireEvent.click(getByText('Ver Detalhes'));

  expect(localStorage.objectImage).toEqual(JSON.stringify(image));

});
