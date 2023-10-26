// let str = "lorem IPSUM dolor sit ipsum   amet. +99899999           " ;
// console.log(str.length)
// console.log(str.charAt(3))
// console.log(str.charCodeAt(1))
// console.log(str.concat("eshmat"))
// console.log(str.endsWith("amet."))
// console.log(str.includes("j"))
// console.log(str.indexOf("l"))
// console.log(str.lastIndexOf("+"))
// console.log(str.padEnd(100,"9"))
// console.log(str.padStart(10,"0"))
// console.log(str.repeat(3))
// console.log(str.replace("amet.", "amet555"))
// console.log(str.replaceAll(" ", ","));
// console.log(str.search("amet."));
// console.log(str.slice());
// console.log(str.split(" "));
// let fruit=["apple", "banana", "cherry", "lime", ["", "nasil"], ["selam"]];
// console.log(fruit.join(" -> "))
// // console.log(fruit.repeat(3   ))
// console.log(fruit.flat(0))
// fruit.push("strawberry")
// fruit.unshift("salom")
// console.log(fruit.slice(0,5))
// console.log(fruit)
// console.log(fruit.sort())
// console.log(fruit.sort().reverse())
// console.log()
// fruit.shift()
// console.log(fruit)

let now = new Date();
let yil = now.getFullYear();
let oy = now.getMonth() + 1;
let kun = now.getDate();

let username = prompt("ismingizni kiriting");
let userdate = prompt("tugilgan kuningizni kirting");
let usermonth = prompt("tugilgan oyingizni kirting");
let useryear = prompt("tugilgan yilingizni kirting");
if (usermonth > oy & userdate > kun) {
  alert(
    "hurmatli " +
      (username) +
      " sizning tugilganizga " +
      (yil - useryear -1 ) +
      " yil  " +
      (usermonth - oy) +
      " oy " +
      (userdate - kun) +
      " kun bolgan "
  );
}
else if (usermonth > oy ) {
  alert(
    "hurmatli " +
      username +
      " sizning tugilganizga " +
      (yil - useryear - 1) +
      " yil   " +
      (usermonth - oy) +
      " oy " +
      (kun -userdate) +
      " kun bolgan "
  ); 
 
}
else {
  alert(
    "hurmatli " +
      (username) +
      " sizning tugilganizga " +
      (yil - useryear) +
      " yil " +
      (oy-usermonth) +
      " oy " +
      (kun-userdate) +
      "  kun bolgan "
  );
}




 