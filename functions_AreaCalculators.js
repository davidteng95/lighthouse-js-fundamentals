function calculateRectangleArea(length, width) {
  let rectangleArea = length * width;
  if (length <= 0 || width <= 0) {
    return undefined;
  }
  return rectangleArea;
}

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

function calculateTriangleArea(base, height) {
  let TriangleArea = (base * height) / 2;
  if (base <= 0 || height <= 0) {
    return undefined;
  }
  return TriangleArea;
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

function calculateCircleArea(radius) {
  let CircleArea = Math.PI * Math.pow(radius, 2);
  if (radius <= 0) {
    return undefined;
  }
  return CircleArea;
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
