const giveMeRightNumbers = (value1, value2, maximum) => {
  if (value1 === value2 || value1 <= maximum) {
    console.log("Success!");
  } else {
    return console.log("Something wrong!");
  }
};
giveMeRightNumbers(250, 100, 200);

