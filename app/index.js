import Galery from './galery/galery'

// new Galery()

if (module.hot) {
  // const GaleryHot = require('./galery/galery.js').default
  module.hot.accept('./galery/galery.js', function () {
    // const Galery = require('./galery/galery').default
    console.log('Accepting the updated printMe module!');
    // new Galery();
  })
}