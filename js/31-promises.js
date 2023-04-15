import getHeroeById from './30-import-export.js';

const getHeroeByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`No existe ningún héroe con id ${id}`);
      }
    }, 2000);
  });
};

getHeroeByIdAsync(6)
  .then(heroe => console.log('Héroe:', heroe))
  .catch(error => console.error(error));
