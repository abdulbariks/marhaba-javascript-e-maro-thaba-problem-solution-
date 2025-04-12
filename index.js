// Practice:1
// problem 1:
const time = 6;
if (time < 6) {
  console.log("nasta khayabe");
} else {
  console.log("jharur bari dibe");
}
// problem 2:
const isLogin = true;
if (isLogin == true) {
  console.log("Welcome");
} else {
  console.log("Get Lost");
}
// problem 3:
const run = 5;
if (run == 5) {
  console.log("cocolate kpabo");
} else {
  console.log("vuri barbe");
}
// problem 4:
const mark = 85;
if (mark > 80) {
  console.log("bike pabo");
} else {
  console.log("bike pabo na");
}
// problem 5:
const movetime = 6;
if (movetime < 6) {
  console.log("movie dekhbo");
} else {
  console.log("nake tel diya gumabo");
}
// problem 6:
const tamparature = 27;
if (tamparature >= 30) {
  console.log("AC chalabo");
} else {
  console.log("kombol muri diya ghumabo");
}

// Practice:2
// problem 1:
const age = 17;
const hight = 60;
if (age > 18 && hight > 60) {
  console.log("gari thelbe");
} else {
  console.log("garit bose thakbe");
}
// problem 2:
const math = 90;
const english = 86;
if (math > 80 && english > 85) {
  console.log("vorti hoyar juggo");
} else {
  console.log("biya diye dao");
}
// problem 3:
const gpa = 5;
const income = 9000;
if (gpa == 5 && income < 10000) {
  console.log("scolarship pabe");
} else {
  console.log("taka diye porte hobe");
}
// problem 4:
const jobholderage = 29;
const experience = 3;
if (jobholderage < 30 && experience > 2) {
  console.log("job exam dite parbe");
} else {
  console.log("job exam dite parbe na");
}
// problem 5:
const ege = 10;
const murgi = true;
if (ege > 12 || murgi == true) {
  console.log("korma ranna hobe");
} else {
  console.log("par ruti kola khabo");
}
// problem 6:
const tapmatra = 100;
const kashi = false;
if (tapmatra > 100 || kashi == true) {
  console.log("doctor er kase jabe");
} else {
  console.log("katha mure shuye thakbe");
}
// problem 7:
const attendance = 88;
const homeWork = true;
if (attendance > 80 && homeWork == true) {
  console.log("exam dite parbe");
} else {
  console.log("auto fail");
}
// problem 8:
const currentAse = false;
const mobilechargeAse = true;
if (currentAse == false && mobilechargeAse == false) {
  console.log("porte bosbo");
} else {
  console.log("video game khelbo");
}
// problem 9:
const shirtprice = 11000;
const cupone = true;
if (shirtprice > 1000 && cupone == true) {
  console.log("20% discount pabe");
}

// Practice:3
// problem 1:
const totalCost = 50000;
if (totalCost > 6000) {
  const discount = (totalCost / 100) * 15;
  const pay = totalCost - discount;
  console.log(pay);
} else if (totalCost > 3000) {
  const discount = (totalCost / 100) * 5;
  const pay = totalCost - discount;
  console.log(pay);
} else {
  console.log(totalCost);
}
// problem 2:
const customerAge = 50;
if (customerAge > 60) {
  console.log("50% discount pabe");
} else if (customerAge < 12) {
  console.log("free khabe");
} else {
  console.log("pay korte hobe ");
}
// problem 3:
const balance = 30000;
if (balance < 1000) {
  console.log("diposit kor");
} else if (balance > 5000) {
  console.log("tui dhoni");
} else {
  console.log("Enjoy kor ");
}
// problem 4:
const examMark = 80;
if (examMark < 50) {
  console.log("fail");
} else if (examMark >= 80) {
  console.log("A+");
} else {
  console.log("pass");
}

// problem 5:
const bookPage = 300;
if (bookPage < 100) {
  console.log("small book");
} else if (bookPage > 100 && bookPage < 500) {
  console.log("Mid-size book");
} else {
  console.log("heart attack size book");
}
// problem 6:
const tempurature = -2;
if (tempurature < 0) {
  console.log("ice");
} else if (tempurature >= 0 && tempurature <= 20) {
  console.log("cool cool");
} else {
  console.log("hot hot");
}
// problem 7:
const level = 2;
if (level < 10) {
  console.log("novice");
} else if (level >= 10 && level <= 50) {
  console.log("Expart");
} else {
  console.log("Pro gamer");
}

// Practice:4
// problem 1:
const daoyatpaisis = false;
const takaase = 2000;
if (daoyatpaisis == true) {
  console.log("partite jabo");
  if (takaase > 1000) {
    console.log("gift niye jabo");
  } else {
    console.log("khali hate jabo");
  }
} else {
  console.log("friend list theke ber kore dibo");
}
// problem 2:
const chaKhabi = true;
if (chaKhabi == true) {
  const biskitkabi = false;
  if (biskitkabi == true) {
    console.log("cha biskit rady");
  } else {
    console.log("cha redy");
  }
} else {
  console.log("bose bose ster jolsha dekh");
}
// problem 3:
const isActive = true;
if (isActive == true) {
  const subscribetion = false;
  if (subscribetion == true) {
    console.log("Primier version dekhun");
  } else {
    console.log("free version dekhun");
  }
}
// problem 4:
const fridgekhabarase = false;
if (fridgekhabarase == true) {
  console.log("khabar gorom korbo");
} else {
  const apptikase = false;
  if (apptikase == true) {
    console.log("khabat order korbo");
  } else {
    console.log("ajke ami roja");
  }
}
// problem 5:
const gest = 122;
if (gest > 100) {
  const giftanse = false;
  if (giftanse == true) {
    console.log("Let's party all night");
  } else {
    console.log("i will party with myself");
  }
}

// Practice:5
// problem 1:
const cashback = 10000;
cashback > 3000 ? console.log("500") : console.log("0");
// problem 2:
const myage = 20;
myage > 15 ? console.log("Teenager") : console.log("Child");
// problem 3:
const isLoggedIn = true;
isLoggedIn == true ? console.log("welcome back") : console.log("please login");
// problem 4:
const garirtang = "ful";
if (garirtang == "ful") {
  console.log("ready for a long drive");
} else {
  console.log("fill the tank");
}
// problem 5:
const passingExam = false;
passingExam == true
  ? console.log("party time")
  : console.log("next semester e serious study korbo");
// problem 6:
const sunny = false;
if (sunny == false) {
  console.log("stay home");
}
// problem 7:
const Expensive = false;
if (sunny == false) {
  console.log("will buy this item");
}
