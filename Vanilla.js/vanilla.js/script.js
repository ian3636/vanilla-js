/*write a short program that prints each number from 1 to 100 on a new line.
for each multiple of 3,prints 'fizz' instead of the number.
for each multiple of 5, prints 'buzz' istead of the number.
for numbers which are multiple of both 3 and 5 print 'fizzBuzz' instead of the number. */



for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5=== 0){

    }else if (i % 3 === 0){
        console.log("fizz")
    }else if (i % 5 === 0){
        console.log("Buzz")
    }else {
        console.log(i);
    }
}
