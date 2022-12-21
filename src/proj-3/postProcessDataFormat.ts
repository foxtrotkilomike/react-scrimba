export default function (dateString: string) {
  let splitString = dateString.split(' ');
  splitString[1] = removeTrailingComma(splitString[1]);
  splitString = swapArrayElements(splitString, 0, 1);
  splitString[1] = addTrailingComma(splitString[1]);

  return splitString.join(' ');
}

const swapArrayElements = (
  array: string[],
  elementIndexFirst: number,
  elementIndexSecond: number
) => {
  [array[elementIndexFirst], array[elementIndexSecond]] = [
    array[elementIndexSecond],
    array[elementIndexFirst],
  ];

  return array;
};
const removeTrailingComma = (str: string) => str.slice(0, -1);
const addTrailingComma = (str: string) => str + ',';
