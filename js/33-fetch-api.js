const url = 'https://jsonplaceholder.typicode.com/users';

const consultAPI = () => {
  fetch(url)
    .then(response => response.json())
    .then(result => {
      result.forEach(comment => {
        console.log(comment);
      });
    });
};

consultAPI();
