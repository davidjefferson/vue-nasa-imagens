import AxiosConfig from "../interceptors/AxiosConfig";

const apiKey = import.meta.env.VITE_API_KEY;

const ImageService = {
  getImages(startDate: string, endDate: string) {
    return AxiosConfig.get(`/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`);
  }
};

export default ImageService;