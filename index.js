// Practice 1:
// Problem 1:
const number = [71, 72, 73, 74, 75, 76, 77, 78, 79];
// Problem 2:
const fruits = ["apple", "kola", "komla", "am", "peyara"];
// Problem 3:
const sobji = [
  "alu",
  "peyaj",
  "begun",
  "mula",
  "gajor",
  "tomatto",
  "dheros",
  "lau",
  "sosha",
  "potol",
];
console.log(sobji.length);
// Problem 4:
const sinema = [
  "Lagaan",
  "Rang De Basanti",
  "Taare Zameen Par",
  "3 Idiots",
  "PK",
];
// Problem 5:
const oddnumber = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
// Problem 6:
const color = ["black", "white", "green", "red"];
console.log(color.length);
// Problem 7:
const capital = ["dhaka", "Rome", "Paris", "Madrid", "Vienna"];
console.log(capital.length);

// Practice 2:
// Problem 1:
const friends = ["rohim", "korim", "jaman", "amin", "alamin", "arif"];
console.log(friends[3]);
// Problem 2:
const books = [
  "Atomic Habits",
  "The Psychology of Money",
  "The Power of Your Subconscious Mind",
  "How to Win Friends and Influence People",
  "The Art of Thinking Clearly",
  "Dark Psychology and Manipulation",
  "Rich Dad Poor Dad",
];
console.log(books[5]);
// Problem 3:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers[7] = 30;
console.log(numbers);
// Problem 4:
const games = ["free fire", "pabji", "candy crush", "tampol run"];
games[2] = "sabway sarfer";
console.log(games);
// Problem 5:
const family = ["barik", "mahafuja", "delwar hossain", "khadiza"];
console.log(family[3]);
// Problem 6:
const travelCountry = [
  "Indonesia",
  "Vietnam",
  "India",
  "Malaysia",
  "Sri Lanka",
  "China",
  "Nepal",
];
console.log(travelCountry[4]);
// Problem 7:
const goodsOnTable = ["book", "pen", "mobile", "pc"];
console.log(goodsOnTable[7]);

// Practice 3:
// Problem 1:
const arrayNumber = [10, 20, 30, 40, 50];
arrayNumber.push(60);
console.log(arrayNumber);
// Problem 2:
const arrayFriends = ["sajib", "sasor", "sakib", "sohel"];
arrayFriends.push("sumon");
console.log(arrayFriends);
// Problem 3:
const mobileGames = ["free fire", "pabji", "candy crush", "tampol run"];
mobileGames.pop();
console.log(mobileGames);
// Problem 4:
const arrayNumbers = [24, 36, 48, 60];
arrayNumbers.unshift(12);
console.log(arrayNumbers);
// Problem 5:
const arrayBooks = [
  "Atomic Habits",
  "The Psychology of Money",
  "The Art of Thinking Clearly",
  "Dark Psychology and Manipulation",
  "Rich Dad Poor Dad",
];
arrayBooks.shift();
console.log(arrayBooks);

// Practice 4:
// Problem 1:
const arrayfruits = ["apple", "kola", "am", "lichu"];
if (arrayfruits.includes("am")) {
  console.log("am ache");
} else {
  console.log("am nai");
}
// Problem 2:
const arrayName = ["babul", "alif", "choton"];
console.log(arrayName.indexOf("babul"));
// Problem 3:
const arrayOfFriendsList = ["rimon", "rifad", "rajib"];
console.log(arrayOfFriendsList.indexOf("rifad"));
// Problem 4:
const arrayOfCity = ["Dhaka", "Chittagong", "Sylhet"];
arrayOfCity.push("rajshahi");
if (arrayOfCity.includes("RajShahi")) {
  console.log("ache");
} else {
  console.log("nai");
}
// Problem 5:
const arrayOfelemennt = ["dighi", "bristi", "borsha"];
if (arrayOfelemennt.includes("bristi")) {
  console.log("I need umberalla");
} else {
  console.log("No rain no pain");
}
// Problem 6:
const arrayOfSports = ["football", "cricket", "bholiball"];
console.log(arrayOfSports.includes("badminton"));
