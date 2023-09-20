const post = async () => {
  let response = await fetch('http://localhost:3001/product', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ name: 'wow', description: 'lang', price: 5900 }),
  });
};

const get = async () => {
  await fetch('http://localhost:3001/product', {
    method: 'GET',
  })
    .then((x) => x.json())
    .then((x) => console.log(x));
};

const getOne = async () => {
  await fetch('http://localhost:3001/product/1', {
    method: 'GET',
  })
    .then((x) => x.json())
    .then((x) => console.log(x));
};
