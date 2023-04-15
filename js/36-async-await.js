const url1 = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts';

const consultAPI = async () => {
  const [response1, response2] = await Promise.all([fetch(url1), fetch(url2)]);
  const result1 = await response1.json();
  const result2 = await response2.json();
  console.log(result1);
  console.log(result2);
};

consultAPI();
