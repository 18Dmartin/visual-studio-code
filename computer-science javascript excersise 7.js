
//Q1
console.log("Q1")
let a=Number(prompt("what is your odd number"))
let b=1
for(; b<=a; b+=2){
    console.log(b);
    }

//Q2
console.log("Q2")
let c=Number(prompt("what is factorial number"));
console.log("you number is",c)
let d=1
let e= 1
for(;e<=c;){
    d= d*e
    e++
}console.log("your factiorial number is",d)

//Q3
console.log("Q3")
let f = 09756235 // the 8 digit number

let h = 4//amount of guesses

 for(;h>0;){
h--
 let g = Number(prompt("what is your guess"))
    if (f==g){
    console.log("correct the number was",f);
    h=0
}else{
    console.log("try again")
    console.log(h,"attempts left")
}
 }

//Q4
console.log("Q4")
let i=Number(prompt("what is number"));
console.log("you number is",i)
let j=0
let k=1
for (;k<=i;){
j= j+k;
k++
console.log(j)
}console.log("the sum of the number is",j)
if(i<=0){
console.log("negative number try again")
}
