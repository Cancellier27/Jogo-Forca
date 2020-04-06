 const rightWord = 'FILIPE COSTA';
// const simbol = '_';
const letterValue = ' '

// const result = rightWord.split('').reduce((acumulate, nextItem) => {
//     acumulate.set(nextItem, simbol)
//     return acumulate
// }, new Map());

// console.log(result);
// let SET = new Set()
// SET.add('b').add('f');
// let a = Array.from(SET).join(' - ')
// console.log(a)

const theLetterIsInTheWord = rightWord.includes(letterValue)
console.log(theLetterIsInTheWord)


