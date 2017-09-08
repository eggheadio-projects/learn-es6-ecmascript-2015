// const is a constant reference
const VALUE = {};
VALUE.foo = 'bar';
console.log('value: ', VALUE);


// const adheres to block scope
const foo = "baz";

if(true){
  const foo = "bar";
  console.log('foo: ', foo);
}

console.log('foo: ', foo);