var input, heading;
function setup() {
  createCanvas(400, 400);

  input = createInput();
  input.position(5, 60);

  heading = createElement("h4", "Enter any alphabet:");
  heading.position(5, 20);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  background("orange");

  //generate random alphbet
  var value = input.value();

  switch (value) {
    case "a":
      console.log("VOWEL");
      break;
    case "e":
      console.log("VOWEL");
      break;
    case "i":
      console.log("VOWEL");
      break;
    case "o":
      console.log("VOWEL");
      break;
    case "u":
      console.log("VOWEL");
      break;
    default:
      console.log("Please enter any character");
      break;
  }
}
