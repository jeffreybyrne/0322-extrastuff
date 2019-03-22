// apples = 14
// print(apples)
//
// print("I have {} apples.".format(apples))

const apples = 14;

console.log(apples);
console.log(`I have ${apples} apples.`);

// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant': "The world's largest land mammal.",
//   'school': 'A place of learning.',
//   'ice cream': 'A delicious milk-based dessert.',
// }

const materials = ['wood', 'metal', 'stone'];
const words = {
  elephant: "The world's largest land mammal.",
  school: "A place of learning.",
  'ice cream': "A delicious milk-based dessert."
}

// num = 16
// if num > 10:
//   print("{} is greater than 10.".format(num))
// elif num == 10:
//   print("{} is exactly 10.".format(num))
// else:
//   print("{} must be less than 10.".format(num))

const num = 16;
if (num > 10) {
  console.log(`${num} is greater than 10.`)
} else if (num == 10) {
  console.log(`${num} is exactly 10.`)
} else {
  console.log(`${num} must be less than 10.`)
}
