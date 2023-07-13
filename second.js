const express = require('express');
const app = express();
const PORT = 3000;

// Create a router for number routes
const numbersRouter = express.Router();

// Random numbers route
numbersRouter.get('/rand', (req, res) => {
  const randomNumbers = [1, 2, 3, 4, 5];
  res.json({ numbers: randomNumbers });
});

// Odd numbers route
numbersRouter.get('/odd', (req, res) => {
  const oddNumbers = [ 11, 13, 15, 17, 19, 21, 23];
  res.json({ numbers: oddNumbers });
});

// Fibonacci numbers route
numbersRouter.get('/fibo', (req, res) => {
  const fibonacciNumbers = [5, 8, 13, 21];
  res.json({ numbers: fibonacciNumbers });
});

// Prime numbers route
numbersRouter.get('/prime', (req, res) => {
  const primeNumbers = [ 7, 11, 13];
  res.json({ numbers: primeNumbers });
});

// Mount the number router on the '/numbers' path
app.use('/numbers', numbersRouter);

app.listen(PORT, () => {
  console.log(`Selected path:==> ${PORT}`);
});
