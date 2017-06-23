var fibo = function (a, b, c) {
  var fiboSeq = [];
  var evenPlus = 0;
  var evens = [];
  for (var i = 0; i < 3000000; i = c)
  if (c < 3000000) {
    c = a + b;
    a = b;
    b = c;
    fiboSeq.push(c);
    if (c % 2 === 0) {
    evens.push(c);
    evenPlus += c;
    }
  }
  console.log("Fibonocci Sequence: " + fiboSeq);
  console.log("Even Numbers: " + evens);
  return "The sum of all evens are: " + evenPlus;
};
fibo (0, 1, 1);
