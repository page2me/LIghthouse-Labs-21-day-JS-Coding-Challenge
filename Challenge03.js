// ## Challenge #3
// "QUACK QUACK QUACK QUACK QUACK QUACK QUACK", goes LARRY, his eyes still glowing red. He’s counting off each of the seven modules on the list - you must be on the right track! Now to find out how many of them are essential.

// Use your JavaScript skills to write a function called countEssential() which will count how many modules from the availableModules array have the essential flag set to true.

// Day 3
function countEssential() {
  let ans = 0;
  for (let x = 0; x < availableModules.length; x++) {
    if (availableModules[x].essential === true) {
      ans++;
    }
  }
  return ans;
}
