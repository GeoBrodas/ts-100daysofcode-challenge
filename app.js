function combine(a, b) {
  var answer;
  if (typeof a === 'number' && typeof b === 'number') {
    answer = a + b;
  } else answer = a.toString() + b.toString();
  return answer;
}
var result = combine(20, 10);
var combinedNames = combine('Hi', 'bye');
console.log(result);
console.log(combinedNames);
