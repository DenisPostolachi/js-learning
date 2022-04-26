let musicStyles = ['Джаз', "Блюз"];

musicStyles.push('Рок');
let middleOfArray = Math.floor(musicStyles.length / 2);
musicStyles.splice(middleOfArray, 1, 'Классика');
musicStyles.shift();
musicStyles.unshift('Регги', 'Реп');

console.log(musicStyles);