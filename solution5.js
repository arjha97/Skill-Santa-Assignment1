function palindrome(string){
    const string1 = string.split('');
    // console.log(string1)
    const reverseString = string1.reverse();
    // console.log(reverseString)
    const string2 = reverseString.join('');
    // console.log(string2);

    if(string === string2){
        document.write("it is a palindrome string");
    }else{
        document.write("it is not a palindrome string");
    }
}

const string = prompt("Enter a String");
palindrome(string);