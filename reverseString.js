function reverse1(value) {
    let arr = [...value];

    return arr.reverse().join("");

}


function reverse2(value) {
    value = value.toString();

    let result = "";

    for (let i = 0; i < value.length; i++) {

        result = value[i] + result;

    }

    return result;
};

function reverse3(value) {
    value = value.toString();

    let result = "";

    for (let char of value) {
        result = char + result
    };
    return result;
}

function reverse4(value) {
    value = value.toString();

    let result = "";

    value.split("").map(i => {
        result = i + result
    })
    return result;
}

function reverse5(value) {
    let arr = value.split("").reduce((acc, curr) => {
        return acc + curr;
    })
    console.log(arr)
}



console.log(reverse5(2345));