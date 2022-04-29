let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: null, y: 4 },
  { x: 3, y: undefined },
];
const checkPoints = (arr) => {
  return arr.filter((item) => item.x && item.y);
};

console.log(checkPoints(points));
