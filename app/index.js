import galery from './galery/galery'

galery()

if (module.hot) {
  module.hot.accept('./galery/galery.js', function () {
    console.log('Accepting the updated printMe module!');
    galery();
  })
}