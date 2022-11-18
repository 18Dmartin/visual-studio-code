
/*
//square
document.write("question 1")
document.write("<br />")
for(let a= 0; a<5; a++){
    for (let b = 0; b<5; b++){
    document.write("*" );
    }
    document.write("<br />");
    }
//rectangle and square
document.write("question 1+2")
document.write("<br />")
let d = Number(prompt("Q1 or 2 columns"))
let c = Number(prompt("Q1 or 2 rows"))
for(let e = 0 ;e<c;e++){
    for(let f = 0; f<d;f++){
        document.write("*" );
    }
    document.write("<br />");
}
*/
//hollow rectangle
document.write("question 3")
document.write("<br />")
document.write("<pre>")
let g = Number(prompt("Q3 columns"))
let h = Number(prompt("Q3 rows"))
for(let i = 1;i<=g;i++){
    for(let j = 1;j<=h;j++){
    if((i==1)||(i==g) ||(j==1) ||(j==h)){
        document.write("*" )}
        else document.write(" ") 
    }
    document.write("<br />");
}
document.write("</pre>")


//hollow with diagonal
document.write("question 4")
document.write("<br />")
document.write("<pre>")
let kor = Number(prompt("Q4 columns"))
let lor= Number(prompt("Q4 rows"))
let k = kor
let l =lor
let o = 1 // diagoal rows
for(let m = 1;m<=k;m++){
    for(let n = 1;n<=l;n++||o++){
        if((m==1)||(m==k) ||(n==1) ||(n==l)){
            document.write("*" )}
            else document.write(" ") 
            if(m==n){
                document.write("*")
            }
        }
        document.write("<br />");
}/* let m = k
let n = l 
for(;m<=k && m>=1;m-1){
    for(;n<=l && n>=1;n-1){
        if((k==m)||(l==n)||(m==n));
        document.write("*")
    }
}*/
do {
    if(m==n);
    document.write("*")
	m-1
    n-1
} while (m<=k && m>1 || n<=l && n>1);