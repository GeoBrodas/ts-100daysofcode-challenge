function combine(a: number | string, b: number | string) {
  let answer: number | string;
  if (typeof a === 'number' && typeof b === 'number') {
    answer = a + b;
  } else answer = a.toString() + b.toString();
  return answer;
}

const result = combine(20, 10);
const combinedNames = combine('Hi', 'bye');

console.log(result);
console.log(combinedNames);
