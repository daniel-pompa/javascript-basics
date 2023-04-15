import heroes, { owners } from '../data/heroes.js';

const getHeroById = id => heroes.find(hero => hero.id === id);

console.log(getHeroById(6));

const getHeroByName = name => heroes.find(hero => hero.name === name);

console.log(getHeroByName('Batman'));

const getHeroesByOwner = owner => heroes.filter(hero => hero.owner === owner);

console.log(owners);

console.log(getHeroesByOwner('Marvel'));
