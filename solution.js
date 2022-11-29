const input = process.argv.slice(2);

let result = 0;

for (let i = 1; i < input.length; i++) {
  let userInput = Number(input[i]);

  if (isNaN(input[i])) {
    console.log(
      `Sorry, the argument ${userInput} is not a number, please try again`
    );
    return;
  }
  result = result + userInput;
}

let average = result / (input.length - 1);

if (input[0] === "sum") {
  console.log(result);
} else if (input[0] === "avg") {
  console.log(average);
} else {
  console.log(
    'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
  );
}
