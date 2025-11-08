/*//Bai 1. Dem tu 1 => 100
for (let i = 1; i <= 100; i++) {
  if (i === 99) {
    alert("Completed!");
  }
  console.log(i);
}*/

/*//Bai 2. Dieu chinh nhiet do
let tem = prompt("Please enter temperature");
if (tem > 100) {
  alert("Please turn down the temperature!");
} else if (tem < 20) {
  alert("Please increase the temperature!");
} else "Suitable temperature!";*/

/*//Bai 3. 20 so Fibonacci dau tien
let a = 0,
  b = 1,
  fib = [a, b];
for (let i = 2; i < 20; i++) {
  let next = a + b;
  fib.push(next);
  a = b;
  b = next;
}
console.log("20 so Fibonacci dau tien la:", fib.join(", "));*/

/*//Bai 4. So Fibonacci chia het cho 5
let a = 0,
  b = 1;
while (true) {
  let next = a + b;
  if (next % 5 === 0) {
    console.log("So Fibonacci dau tien chia het cho 5 la:", next);
    break;
  }
  a = b;
  b = next;
}*/

/*//Bai . Tong 20 so Fibonacci dau tien
let a = 0,
  b = 1,
  sum = a + b;
for (let i = 2; i < 20; i++) {
  let next = a + b;
  sum += next;
  a = b;
  b = next;
}
console.log("Tong 20 so Fibonacci dau tien la:", sum);*/

/*//Bai 6. Tong 30 so chia het cho 7
let count = 0,
  num = 7,
  sum = 0;
while (count < 30) {
  sum += num;
  num += 7;
  count++;
}
console.log("Tong 30 so chia het cho 7 la:", sum);*/

/*//Bai 7. FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}*/
