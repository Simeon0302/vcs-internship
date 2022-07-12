const always = value => () => value;

const f = always(5);
console.log(f());