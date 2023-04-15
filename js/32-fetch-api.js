import API_KEY_GIPHY from './configuration.js';

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY_GIPHY}`
);

request
  .then(res => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image);
  })
  .catch(console.error);
