const moves = [
  "north",
  "north",
  "west",
  "west",
  "north",
  "east",
  "north",
  "random",
];
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      y += 1;
    } else if (moves[i] === "south") {
      y -= 1;
    } else if (moves[i] === "west") {
      x -= 1;
    } else if (moves[i] === "east") {
      x += 1;
    } else {
      return console.log("not a valid coordinate input");
    }
  }
  return [x, y];
};

console.log(finalPosition(moves));
