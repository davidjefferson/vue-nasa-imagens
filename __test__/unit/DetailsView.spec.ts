import { render } from '@testing-library/vue';
import ImageDetails from '../../src/views/details/DetailsView.vue';
import { describe, it, expect } from 'vitest';

describe('ImageDetails Component', () => {
  it('renders image details correctly', async () => {
    const mockObjectImage = {
      media_type: 'image',
      url: 'https://example.com/image.jpg',
      title: 'Sample Image',
      explanation: 'This is a sample image',
      copyright: 'Copyright 2024',
      date: '2024-07-02'
    };

    window.localStorage.setItem('objectImage', JSON.stringify(mockObjectImage));

    const { getByText, getByAltText } = render(ImageDetails);

    const title = getByText('Sample Image');
    expect(title).toBeInTheDocument();

    const image = getByAltText('Imagem') as HTMLImageElement; 
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://example.com/image.jpg');

    const formattedDate = getByText('01/07/2024');
    expect(formattedDate).toBeInTheDocument();

    window.localStorage.removeItem('objectImage');
  });
});