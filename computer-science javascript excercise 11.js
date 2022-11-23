//Q1+2
document.write("this is the array:")
document.write("<br>")
let ar1 = new Array(2,6,-3,7,8,-7,5,-10,1)
let ar1copy = ar1
let arlength = ar1.length
document.write(ar1)
document.write("</br>")

//Q3
document.write("<br>")
document.write("these are all the negative numbers in the array : ")
a=0
while(a<=arlength){
    a++;
if(ar1[a]<1){
    document.write(ar1[a])
}
}document.write("</br>")

//Q4
document.write("<br>")
document.write("these are the sum of numbers : ")
let b = 0 
let c = 0 
let sum = 0
let sum1 = 0
for(;b<arlength;b++){
    sum = (ar1[b]+c)
 sum1 = sum1+sum 
    console.log(sum1)
}document.write(sum1)
document.write("</br>")

//Q5
document.write("<br>")
document.write("this is the biggest number: ")
    document.write(Math.max(...ar1));
    document.write("<br>")
    document.write("this is the smallest number: ")
    document.write(Math.min(...ar1));
    document.write("<br>")

//Q6
document.write("<br>")
ar1copy.pop(Math.max(...ar1));
document.write("this is the second largest: ")
document.write(Math.max(...ar1copy));
document.write("<br>")
//Q7
document.write("<br>")
let d = 0
let f = 0
for(let e = 0; e<arlength;e++){
    if(ar1[e] % 2 == 0 ){
    document.write(ar1[e]," is an even number")
    document.write("<br>")
    d++}
    
    else if(ar1[e] % 2 == 1){
        document.write(ar1[e]," is an odd number")
        document.write("<br>")
    f++}
}document.write("<br>");
document.write("there are ",d," even numbers");
document.write("<br>");
document.write("there are ",f," odd numbers");
document.write("<br>");

//Q8
document.write("<br>")
ar2 = ar1
document.write("this is a new array: ", ar2)
document.write("<br>")

//Q9 
document.write("<br>")
let g = Number(prompt("what number would you like to the array"))
document.write("you added ",g, " to the array")
document.write("<br>")
ar1.push(g);
document.write("this is the new array: ",ar1)
document.write("<br>")

//Q10
document.write("<br>")
document.write(g," is the last element in the array")
document.write("<br>")
ar1.pop()
document.write("this is the new array: ",ar1)
document.write("<br>")
document.write("<br>")