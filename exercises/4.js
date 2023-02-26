const x = ['n', 'bro', 'c', 'l'];
const y = ['d', 'n', 'l', 'bro', 'g'];

const removeEquals = y.filter(el => !x.includes(el));
console.log(removeEquals);
