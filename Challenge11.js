// ## Challenge #11
// "Beacon active!" LARRY sounds as pleased as a robot can be. In fact, you spot the faintest hint of smile on his robot duck bill.

// "Calibration QUACK complete! Now start RADIO! NEED to use the RADIO! QUACK QUACK!"

// LARRY's prompt sends you back to the ship's manual, where you find an entire section about the radio. You notice that the radio has a feature you missed before, the range! Your particular radio has a range of 88 to 108 MHz, much like the FM radio in your car back on Earth. There's a note in the manual that says that the radio should be tuned to the same frequency as the lower end plus the upper end, and that total divided by two.

// Write a function called setFrequency() that will set the frequency property on the radio object using the above formula.

// Be careful because not all radios will have the same range, so make sure your code is reuseable. Instead of coding the numbers directly into your equation use dot notation to access them from the radio object, which you can see by clicking the Show Global Objects link above.

// Day 11
function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2;
}
