// function countOccurrences(str, char) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

const countOccurrences = (str, char) => str.split(char).length - 1;
module.exports = countOccurrences;
