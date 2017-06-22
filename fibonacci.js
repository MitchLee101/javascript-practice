var fibo = function (a, b, c) {
  for (var i = 0; i < 4000000; i = c)
  if (c < 4000000) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
  return c;
};
fibo (0, 1, 1);
