import API_KEY_GIPHY from './configuration.js';

const getGif = async () => {
  try {
    const apiKey = API_KEY_GIPHY;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image);
  } catch (error) {
    console.error(error);
  }
};

getGif();
