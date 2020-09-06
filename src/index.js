module.exports =function toReadable (number) {
  let zero_Nine = {
    0: "zero",
    1: "one", 
    2: "two", 
    3: "three", 
    4: "four", 
    5: "five", 
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"};
  let ten_ninteen = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen", 
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"};
  let tenners = {
    20: "twenty", 
    30: "thirty", 
    40: "forty", 
    50: "fifty", 
    60: "sixty", 
    70: "seventy", 
    80: "eighty", 
    90: "ninety"};
  let hundred = "hundred";

  let num = "";
    if (number == 0) {
      num = num + zero_Nine[number];
      number = "";
    }
    if (number >= 100 & number < 1000) {
      num = zero_Nine[Math.floor(number / 100)] + " " + hundred;
      number = number - Math.floor(number / 100)*100;
    } 
    if (number < 100 & number >= 20) {
      num = num + " " + tenners[Math.floor(number/10)*10];
      number = number - Math.floor(number/10)*10;
    }
    if (number >= 10 & number < 20) {
      num = num + " " + ten_ninteen[number];
    } 
    if (number > 0 & number < 10) {
      num = num + " " + zero_Nine[number];
    } 
    if (number == 0) {
      num = num;
    }
    return num.trim();
}
