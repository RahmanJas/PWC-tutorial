
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }
// for (let i = 2; i < 10; i++){
//     console.log(i);
// }
// for (let p = 4 ; p <=8; p++) {
//     console.log(p);
// }
// for(let n = 12 ; n <=19; n++) {
//     console.log(n);
// // }
//  "the number is "
//  let i= 0
// while(i<20){
//     console.log(i)
//     i++
// }

// const x=10
// if(x===20){
//     console.log("x is 20")
// } 
// else{
//     console.log("x is 20")
// }
// let x=50
// if(x==90){
//     console.log("Excellent")
// }else if(x==80){
//     console.log("very good")
// }else if(x==50){
//     console.log("Average")
// }else if(x==30){
//     console.log("failed")
 // }else if(x==0){
 //     console.log("Did not write test")
 // }
// let x=62
// if(x>=70 ){
//     console.log("Excellent")
// }else if(x>=60 && x<70){
//     console.log("very good")
// }else if(x>=50 && x<60){
//     console.log("credit")
// }else if(x>=40 && x<50){
//     console.log("pass")
// }else {
//     console.log("fail")
// }
// for (let i = 2; i < 20; i+=5) {
//     console.log(i);
// }
// //split

//  let a="adamu"
//  someWord=a.split('')
// console.log(someWord);

// let someArray=['a','b','c','d','e','f']
// console.log(someArray.reverse);
// function strToArr(s){
// return s.split('').reverse().join('');
// }
// console.log(s.split().reverse().join());

//Palindrome
// function isPalindrome(s){
// let  newString = s.split('').reverse().join('')
// if(s=== newString){
//     return true
// }else {
//     return false
// }
// }
// console.log(isPalindrome('dream'));

//change string to integer(number)
// let str15="15"
// console.log(parseInt(str15));

// let int=15
function isPalindrome(num){
     let  numToString = num.toString()
     let reverseString= numToString.split('').reverse().join('')
     if( numToString=== reverseString){
        return true
     }else{
        return false
     }
}
console.log(isPalindrome(6));
