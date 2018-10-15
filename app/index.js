import galery from './galery'

galery()

if (module.hot) {
  module.hot.accept('./galery.js', function () {
    console.log('Accepting the updated printMe module!');
    galery();
  })
}