function combine(
  a: number | string,
  b: number | string,
  conversionType: 'as-number' | 'as-text'
) {
  let answer: number | string;
  if (
    (typeof a === 'number' && typeof b === 'number') ||
    conversionType === 'as-number'
  ) {
    answer = +a + +b;
  } else answer = a.toString() + b.toString();
  return answer;
}

const test1 = combine(20, 10, 'as-number');
const test2 = combine('20', '10', 'as-number');
