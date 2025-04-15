// 1. Off-by-one Error
const cats = ["Milo", "Otis", "Garfield"];
const out1 = document.getElementById("example1");
// because index starts with 0, so < length
for (let i = 0; i < cats.length; i++) {
  out1.innerHTML += `Cat #${i + 1}: ${cats[i]}<br>`;
}

// 2. Infinite Loop (simulate instead of actual infinite loop)
const out2 = document.getElementById("example2");
let j = 0;
while (j < 3) {
  out2.innerHTML += `Loop count: ${j}<br>`;
  j++;
  // j++; ← Oops, this is missing!
  // Prevent real infinite loop while keeping it broken
  // Erase break after fixing
}

// 4. Skips Last Item
const out4 = document.getElementById("example4");
const birds = ["Parrot", "Crow", "Sparrow"];
// because index starts with 0, so < length, or <= length -1
for (let i = 0; i <= birds.length - 1; i++) {
  out4.innerHTML += `Bird: ${birds[i]}<br>`;
}

// 5. Reversed Loop Error
const out5 = document.getElementById("example5");
const nums = [10, 20, 30, 40];
for (let i = 0; i < nums.length; i++) {
  out5.innerHTML += `Number: ${nums[i]}<br>`;
}
