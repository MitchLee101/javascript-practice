var fibo = function (a, b, c) {
  var evenPlus = 0;
  var evens = [];
  console.log("Fibonocci Sequence:")
  for (var i = 0; i < 3000000; i = c)
  if (c < 3000000) {
    c = a + b;
    a = b;
    b = c;
    console.log(c)
    if (c % 2 == 0) {
    evens.push(c);
    evenPlus += c;
    }
  }
  console.log("Even Numbers: " + evens);
  return "The sum of all evens are: " + evenPlus;
};
var fibonocci = fibo (0, 1, 1);
fibonocci;
