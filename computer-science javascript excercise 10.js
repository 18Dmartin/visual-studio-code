/*
let rows = Number(prompt("how many rows do you want "));
let columns = Number(prompt("how many columns do you want "));
console.log("there are",rows,"rows");
console.log("there are",columns,"columns")

let rowsoriginal = rows
let columnsoriganal = columns

let a = 1
let b = 1
for(let j= 0; j<5; j++){
    for (let k = 0; k<5; k++){
    document.write("*" );
    }
    document.write("<br />");
    }



for(;rows>=a;a++){
    for (let k = 0; k<5; k++){
    document.write("*" );
}
document.write("<br />");
}
*/



for(let rows = Number(prompt("how many rows do you want ")); rows<5; rows++){
    for (let columns = Number(prompt("how many columns do you want ")); columns<5; columns++){
    document.write("*" );
    }
    document.write("<br />");
    }
    