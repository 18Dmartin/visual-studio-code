/*
console.log("Q1")
let num = Number(prompt("what is your chosen number"))
 a = 0 
 console.log(num)
 for (;num>a;){
 a++
 num = Math.floor(num/10)
 console.log(num)
 }



 //Q2
 console.log("Q2")
 let b  = Number(prompt("what is your number"))
b1 = (Math.floor(b/10))
b1 = (b1*10)
console.log("this is the lat digit",b-b1)
d = 10
for(;b>d;){

b = Math.floor(b/10)
}console.log("the first digit is",b) 

 //Q3
 console.log("Q3")
    let h =Number(prompt("enter your number"));
    let i =0
    let g=h
    for(;g>0;){
        i=g%10
        g=Math.floor(g/10);
        if(i==0){
            console.log("zero");
        }else if(i==1){
            console.log("one");
        }else if(i==2){
            console.log("two");
        }else if(i==3){
            console.log("three");
        }else if(i==4){
            console.log("four");
        }else if(i==5){
            console.log("five");   
        }else if(i==6){
            console.log("six");
        }else if(i==7){
            console.log("seven");
        }else if(i==8){
            console.log("eight");
        }else{
            console.log("nine");
        }   
    }   
}else if(a==4){
*/

//Q4
let j = Number(prompt("enter number 1"));
let k = Number(prompt("enter number 2"));
let max = Math.max(j,k);
for(;(max/j==Math.floor(max/j)&&max/k==Math.floor(max/k))==false;){
    max=max*2
}
console.log(max+" is the lcm of "+j+" and "+k);
