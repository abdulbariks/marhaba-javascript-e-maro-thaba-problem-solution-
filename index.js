// practice:1
// Problem:1
const sunjects = ["Bangla", "English", "Math", "Physices", "ICT"];
for (const subject of sunjects) {
  console.log(subject);
}
// Problem:2
const foods = ["vat", "mach", "dal", "vorta", "magso", "shag"];
for (const food of foods) {
  console.log(food);
}
// Problem:3
const birthDates = [1997, 2002, 2007, 2005];
for (const birthDate of birthDates) {
  console.log(birthDate);
}
// Problem:4
const players = ["messi", "martinez", "shala", "rudigar", "alvarez", "yamal"];
for (const player of players) {
  console.log(player);
}
// Problem:5
const examDates = ["01-06-2025", "05-06-2025", "09-06-2025", "11-06-2025"];
for (const examDate of examDates) {
  console.log(examDate);
}

// practice:2
// Problem:1
let num = 0;
while (num < 10) {
  console.log("Ami protidin minimum 3 ghonta practice korbo");
  num = num + 1;
}
// Problem:2
let num1 = 1;
while (num1 <= 20) {
  console.log(num1);
  num1 = num1 + 1;
}
// Problem:3
let num2 = 50;
while (num2 <= 100) {
  console.log(num2);
  num2++;
}
// Problem:4
let num3 = 1;
while (num3 <= 10) {
  console.log(num3 * 3);
  num3++;
}

// Problem:5
let num4 = 111;
while (num4 >= 110) {
  console.log(num4 / 2);
  num4--;
}

// practice:3
// Problem:1
let num5 = 50;
while (num5 <= 100) {
  console.log(num5);
  num5++;
}

// Problem:2
let num6 = 5;
let sum = 0;
while (num6 <= 15) {
  console.log(num6);
  sum = sum + num6;
  num6++;
}
console.log(sum);

// Problem:3
let num7 = 1;
let sum1 = 0;
while (num7 <= 50) {
  console.log(num7);
  sum1 = sum1 + num7;
  num7++;
}
console.log(sum1);

// Problem:4
let num8 = 21;
let sum2 = 0;
while (num8 <= 50) {
  console.log(sum2);
  sum2 = sum2 + num8;
  num8++;
}
console.log(sum2);

// Problem:5
let num9 = 22;
let sum3 = 0;
while (num9 <= 40) {
  sum3 = sum3 + num9;
  num9++;
}
console.log(sum3);

// practice:4
// Problem:1
for (let index = 150; index <= 170; index++) {
  console.log(index);
}

// Problem:2
let sum4 = 0;
for (let index = 31; index <= 58; index++) {
  sum4 = sum4 + index;
}
console.log(sum4);

// Problem:2
let sum5 = 0;
for (let index = 25; index <= 75; index++) {
  sum5 = sum5 + index;
}
console.log(sum5);

// practice:5
// Problem:1
for (let index = 20; index <= 50; index++) {
  if (index % 7 == 0) {
    console.log(index);
  }
}
// Problem:2
for (let index = 40; index <= 80; index++) {
  if (index % 7 == 0 && index % 5 == 0) {
    console.log(index);
  }
}
// Problem:3
let sum6 = 0;
for (let index = 1; index <= 40; index++) {
  if (index % 13 == 0) {
    sum6 = sum6 + index;
  }
}
console.log(sum6);

// Problem:4
for (let index = 1; index <= 50; index = index + 4) {
  console.log(index);
}

// Problem:5
for (let index = 1; index <= 100; index++) {
  if (index % 9 == 0 && index % 6 == 0) {
    console.log(index);
  }
}

// Problem:6
let sum7 = 0;
for (let index = 1; index <= 50; index++) {
  if (index % 3 == 0 && index % 4 == 0) {
    console.log(index);
    sum7 = sum7 + index;
  }
}
console.log(sum7);

// practice:6
// Problem:1
for (let index = 1; index <= 30; index++) {
  console.log(index);
  if (index >= 15) {
    break;
  }
}

// Problem:2
for (let index = 1; index <= 40; index++) {
  if (index % 7 == 0) {
    continue;
  }
  console.log(index);
}

// Problem:3
for (let index = 1; index <= 15; index++) {
  if (index == 9) {
    continue;
  }
  console.log(index);
}

// Problem:4
for (let index = 1; index <= 20; index++) {
  if (index == 12) {
    continue;
  }
  console.log(index);
}

// Problem:5
for (let index = 1; index <= 25; index++) {
  if (index % 3 == 0) {
    continue;
  }
  console.log(index);
}
// Problem:6
for (let index = 91; index <= 120; index++) {
  if (index % 10 == 0) {
    break;
  }
  console.log(index);
}
