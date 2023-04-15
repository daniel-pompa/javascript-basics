import heroes from '../data/heroes.js';

const getHeroById = id => heroes.find(heroe => heroe.id === id);

export default getHeroById;
