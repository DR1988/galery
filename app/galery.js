import './test.css'
export default () => {
  let a = () => 4
  console.log(22);
  Promise.resolve(console.log(a()))
}