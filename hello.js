console.log("helloworld");
const x = "hello";
const y = "silliguri";
console.log(y + " " + x);

// console.log(y +' ' x);
//this code is for print anything =
const h = 101;
const g = 73;
function square(h) {
  return h * h;
}

console.log("square of " + h + " is ", square(h));

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "lund",
    T: "oIo",
  })
);
// or cowsay.think()

const oneLinerJoke = require("one-liner-joke");

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);
