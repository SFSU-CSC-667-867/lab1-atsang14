const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => res + 'World')
  .catch((e) => console.log(e))
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
// try catch but asynchronus

console.log('hi');