var Number = Number(
    prompt("select number that represents a month between 1 - 12")
  );
  if (Number == 1) {
    console.log("January");
  } else if (Number == 2) {
    console.log("Feburary");
  } else if (Number == 3) {
    console.log("March");
  } else if (Number == 4) {
    console.log("Aprill");
  } else if (Number == 5) {
    console.log("May");
  } else if (Number == 6) {
    console.log("June");
  } else if (Number == 7) {
    console.log("July");
  } else if (Number == 8) {
    console.log("August");
  } else if (Number == 9) {
    console.log("Setember");
  } else if (Number == 10) {
    console.log("October");
  } else if (Number == 11) {
    console.log("November");
  } else if (Number == 12) {
    console.log("December");
  }
  
  if (Number > 12) {
    console.log("The Number is not a month");
  }
  