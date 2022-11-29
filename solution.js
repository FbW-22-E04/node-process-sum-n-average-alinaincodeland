const input = process.argv.slice(2);
let result = 0;
for (let i = 0; i < input.length; i++) {
  result = result + Number(input[i]);
  if (isNaN(input[i])) {
    console.log(
      `Sorry, the argument ${input[i]} is not a number, please try again`
    );
    return;
  }
  result = result + Number(input[i]);
}
console.log(result);
