let a = Number(prompt("what is your factorial number"));
let originaln = a 
let numberdigits = 0
let totalnumber = 0 
let c = 0
while(a>0){
a = Math.floor(a/10);
numberdigits ++
console.log("amountof digits is",numberdigits)
} 
a = originaln
do{
b  = a
b1 = (Math.floor(b/10))
b1 = (b1*10)
c = (a-b1)
c = c**numberdigits
a= (Math.floor(a/10))
totalnumber = totalnumber+c
}while(a>0)
console.log("the total number is",totalnumber)
if(originaln == totalnumber){
    console.log("this is an armstrong number")
}else(console.log("this isnt a armstrong number"))

//Q2
// 145 = 1x1 + 1x2x3x4 + 1x2x3x4x5 = 145 = strong number#
 d = Number(prompt("what is your number"));
