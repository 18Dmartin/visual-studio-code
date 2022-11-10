//Q1
let a = Number(prompt("enter number"));
if((a%2)==0){
    console.log("even");
}else if((a%2)!=0){
    console.log("odd");
}


//Q2
let b = Number(prompt("enter first number"));
let c = Number(prompt("enter second number"));
if (b> c){
    console.log("the first number is larger");
}else if(b< c){
    console.log("the second number is bigger");
}else{
    console.log("they are both equal");
}

//Q3
let d = Number(prompt("enter 1/3 numbers"));
let f = Number(prompt("enter 2/3 numbers"));
let g = Number(prompt("enter 3/3 numbers"));
if (d > f){
    console.log("the first Number is largest")
}else if (d > f){
    console.log("the first Number is largest")
}else if (f > d){
    console.log("the second Number is largest")
}else if (f > g){
    console.log("the second Number is largest")
}else if (g > d){
    console.log("the third Number is largest")
}else if (g > f){
    console.log("the third Number is largest")
}else{
    console.log("they are all the same")
}

//Q4
let h = Number(prompt("how many sides does the triangle have in common"));
if (h == 3){
    console.log("you have a Equilateral")
}else if (h == 2){
    console.log("you have a Scalene")
}else if (h == 0){
    console.log("you have a Isosceles")
}else{
    console.log("retry")
}

//Q5
let N1 = Number(prompt("what is your first number"));
let N2 = Number(prompt("whats your second number"));
let sum1 = String(prompt("what is the mathematical operation"));
if (sum1 =="add"){
    console.log(N1 += N2) 
}else if (sum1 =="subtract"){
    console.log(N1 -=N2)
}else if (sum1 =="multiply"){
    console.log(N1 *= N2)
}else if (sum1 =="divide"){
    console.log(N1 /= N2)
}else if (sum1 =="modulous"){
    console.log(N1 %= N2)
}else;
console.log("invalid")
