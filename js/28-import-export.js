import customers from '../data/customers.js';

const getCustomerById = id => customers.find(customer => customer.id === id);

console.log(getCustomerById('a1d40e6a-bd34-4281-99dc-141eadb19c01'));

const getCustomerByEmail = email => customers.find(customer => customer.email === email);

console.log(getCustomerByEmail('oscar.pompa@gmail.com'));

const getCustomersPremium = () => customers.filter(customer => customer.premium === true);

console.log(getCustomersPremium());
