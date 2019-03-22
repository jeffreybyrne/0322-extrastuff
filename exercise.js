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

// for x in range(0,10):
//   print("Doing the same thing over and over.")

for (x = 0; x < 10; x++) {
  console.log("Doing the same thing over and over.")
}

// base = 5
// for num in range(0,20):
//   print(num + base)

const base = 5;
for (num1 = 0; num1 < 20; num1++) {
  console.log(num1 + base)
}

// total = 0
// for num in range(0,100):
//   total += num
//
// print(total)

let total = 0;
for (num2 = 0; num2 < 100; num2++) {
  total += num2;
}
console.log(total);

// for height in range(3,15):
//   if height > 9:
//     print("You can get on the rollercoaster!")
//   else:
//     print("You are too short to ride this rollercoaster.")

for (height = 3; height < 15; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!")
  } else {
    console.log("You are too short to ride this rollercoaster.")
  }
}

// containers = ['purse', 'wallet', 'backback']
// for container in containers:
//   print(container)

const containers = ['purse', 'wallet', 'backback'];
containers.forEach(function(container) {
  console.log(container)
})
