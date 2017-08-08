var string1 = "i have 4 four pc, 5 laptops and well 0 gf";
var string2 = "i have 43 pc , 46 laptops and 00 gf ";
var expression1 = /\d/g;
var expression2 = /\d+/g;
console.log(string1.match(expression2));
console.log(string2.match(expression1));
console.log(string2.match(expression2));


