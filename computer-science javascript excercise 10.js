
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
let d = Number(prompt("columns"))
let c = Number(prompt("rows"))
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
let g = Number(prompt("columns"))
let h = Number(prompt("rows"))
document.write("<pr />")
for(let i = 0;i<=g;i++){
    for(let j = 0;j<=h;j++){
        if((j==1) && (j==h) && (i==1) && (i==g)){
        document.write("*" )}
        else document.write(" ")
    }
    document.write("<br />");
}
    