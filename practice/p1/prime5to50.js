function is_prime(x) {
    if (x < 2)
        return false;
    else {
        var i_1;
        for (i_1 = 2; i_1 < x; i_1++) {
            if (x % i_1 === 0)
                return false;
        }
        return true;
    }
}
var i;
for (i = 5; i <= 50; i++) {
    if (is_prime(i) === true) {
        document.write(i + " is a prime number <br>");
        console.log(i + " is a prime number \n");
    }
}
