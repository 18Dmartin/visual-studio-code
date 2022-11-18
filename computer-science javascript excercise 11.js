//Q1+2
document.write("<br>")
let ar1 = new Array(2,6,-3,7,8,-7,5,-10,1)
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
let d = 0
for(;d<arlength;d++){
    document.write(math.max(...ar1));
    document.write(math.min(...ar1));
}