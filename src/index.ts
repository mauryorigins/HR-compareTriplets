/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
import compareTriplets from './compareTriplets';

function main() {
  console.log('---------- Cool Programing ----------\n');
  const a = [1, 2, 3];
  const b = [3, 2, 1];
  const result = compareTriplets(a, b);
  console.log('Result: ', result);
}

main();
