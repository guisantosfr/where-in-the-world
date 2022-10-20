export default function getRandomNumbers(quantity, max) {
  const numbers = new Set();

  while (numbers.size !== quantity) {
    numbers.add(Math.floor(Math.random() * max));
  }

  return numbers;
}
