function fizzBuzz(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz", i);
        } else if (i % 3 == 0) {
            console.log("Fizz", i);
        } else if (i % 5 == 0) {
            console.log("Buzz", i);
        }
    }
}
// less readable 
function ShortVersion(n) {
    for (let i = 0; i <= n; i++) {
        i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz", i) :
            i % 3 == 0 ? console.log("Fizz", i) :
            i % 5 == 0 ? console.log("Buzz", i) : "";
    }
}
console.log("Omar Ashraf");
console.log(ShortVersion(24));