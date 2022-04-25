function palindrome(value) {

    let reverse = [...value].reverse().join('');
    return reverse === value


}

function palindrome2(value) {
    let arr = value.split('')
    let res = 'true'

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == arr[arr.length - 1 - i]) {

            continue;

        } else {

            res = 'false '

        }

    }
    return res;
}

console.log(palindrome2('abcba'))

console.log(palindrome('abcba'));