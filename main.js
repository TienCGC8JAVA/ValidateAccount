function checkAccount(str)
{
    let regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str))
    {
        return true;
    }
    return false;
}

let test = "123abc_";
console.log(checkAccount(test));
test = "_abc123";
console.log(checkAccount(test));
test = "______";
console.log(checkAccount(test));
test = "123456";
console.log(checkAccount(test));
test = "abcdegf";
console.log(checkAccount(test));
test = ".@";
console.log(checkAccount(test));
test = "12345";
console.log(checkAccount(test));
test = "1234_";
console.log(checkAccount(test));
test = "abcde";
console.log(checkAccount(test));