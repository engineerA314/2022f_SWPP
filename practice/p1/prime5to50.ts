function is_prime(x: number) {
  if (x < 2) return false;
  else {
    let i: number;
    for (i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  }
}

let i: number;

for (i = 5; i <= 50; i++) {
  if (is_prime(i) === true) {
    document.write(i + " is a prime number <br>");
    console.log(i + " is a prime number \n");
  }
}
