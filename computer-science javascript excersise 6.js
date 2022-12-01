//1
let N1=1;
while(N1<=10){
    console.log(N1);
    N1++;
}

//2
let N2=0;
do{
    console.log(N2)
    N2+=2
}while(N2<=100)


//3
let userNum = Number(prompt("enter a number"))
let userPower = Number(prompt("enter what power you want"))

let x =Math.pow(userNum , userPower)
console.log(x)

//4
let R = Number(prompt("enter number of rows"))
let T = "*"
let sp = 0

do{
    console.log(t)
    T = T + "*"
    sp++
}while(sp<=R)

//5
let N3 = Number(prompt("enter a number"))
let result = 0;
  
    while (N3 > 0) {
      N3 = Math.floor(N3 / 10);
      result++;
    }
  
    console.log(result);

//Q6
let N4 = Number(prompt("what is ur number"))
while(N4>0){
    console.log(N4%10);
    console.log(Math.floor(N4/10));
    N4--%10
console.log(N4)
}