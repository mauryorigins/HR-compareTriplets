export default function compareTriplets(a: number[], b: number[]): number[] {
  const element = [0, 0];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      element[0] += 1;
    }
    if (a[i] < b[i]) {
      element[1] += 1;
    }
  }
  return element;
}
