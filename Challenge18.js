// ## Challenge #18
// "Antenna active! Broadcast function enabled!" LARRY announces triumphantly.

// Now that the power is back on, you should try the radio by sending out a beacon message so Earth knows where you are.

// Create a new function called sendBroadcast(). In this function you'll need to write a loop to call the newly-enabled broadcast() function 100 times - you want to make sure Earth gets the message! Don't worry what broadcast() does; it's built into the ship's computer.

// When you're ready to send your broadcast out, be sure to call your sendBroadcast() function

// Day 18
function sendBroadcast() {
  for (let i = 0; i < 100; i++) {
    broadcast();
  }
}
// sendBroadcast();
