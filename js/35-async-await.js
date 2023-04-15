const url = 'https://jsonplaceholder.typicode.com/users';

const consultAPI = async () => {
  const response = await fetch(url);
  const result = await response.json();
  result.forEach(comment => {
    console.log(comment);
  });
};

consultAPI();
