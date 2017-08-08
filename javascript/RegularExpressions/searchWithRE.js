var string1 = "first computer and the software that would have run on it";
 
var regularExpression = /w/gi;
var searchResult = string1.match(regularExpression);
console.log(searchResult);
var times = searchResult.length;
console.log(times);
