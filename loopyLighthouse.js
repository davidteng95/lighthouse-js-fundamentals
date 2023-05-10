let start = 100;
for (start = 100; start <= 200; start++) {
  if (start % 3 === 0 && start % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (start % 4 === 0) {
    console.log("Lighthouse");
  } else if (start % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(start);
  }
}
