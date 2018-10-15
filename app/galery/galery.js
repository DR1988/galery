import './galery.css'

export default class Galery{
  constructor(element){
    console.log('element', element);
    console.log(12312);
    this.element = element
    this.initializeContainer(element)
  }

  initializeContainer(element) {
    if(!element) throw new Error('No element')
    const galery = document.getElementById(element)
    console.log(galery);
  }
}

new Galery('galery')
// export default () => {
//   let a = () => 3
//   console.log(22);
//   Promise.resolve(console.log(a()))
// }