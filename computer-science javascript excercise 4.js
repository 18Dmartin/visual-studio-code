let RPS = (prompt("what is your move - rock, paper, scissors"));{
console.log("you chose :")
console.log(RPS)
}
let x = Math.floor(Math.random() *3)+1;

switch(RPS){
case "rock" :
    console.log(01);
    break;
case "paper" :
    console.log(02);
    break;
case "scissors" :
    console.log(03);
    break;
default:
    console.log("not recognized")
}

console.log("the copmputer chose:")
switch(x){
    case 1 :
        console.log("rock");
        break;
    case 2 :
        console.log("paper");
        break;
    case 3 :
        console.log("scissors");
        break;
    default:
        console.log("not recognized")
    }

if (1 == 01){
console.log("draw")}
else if(2 == 01){
console.log("you win")}
else if(3 == 01){
console.log("you lose")
}else if (1 == 02){
    console.log("you lose")
    }else if(2 == 02){
    console.log("draw")
    }else if(3 == 02){
    console.log("you win")
    }else if (1 == 03){
        console.log("you win")
        }else if(2 == 03){
        console.log("you lose")
        }else if(3 == 03){
        console.log("draw")
        }
//come back to do always says draws

//Q2
let l = (prompt("what levels did you do"))
let g = (prompt("what grade did you get"))

switch(l){
case 'higher' :
    console.log("you did higher level");
    break;
case 'Ordinary':
    console.log("you did higher level");
    break;
default:
    console.log("level not recognized");
}

switch(g){
    case 'H1' :
        console.log("you got a H1");
        break;
    case 'H2':
        console.log("you got a H2");
        break; 
    case 'H3' :
        console.log("you got a H3");
         break;
    case 'H4':
         console.log("you got a H4");
        break; 
    case 'H5':
        console.log("you got a H5");
        break;              
    case 'H6':
     console.log("you got a H6");
    break;
    case 'H7':
        console.log("you got a H7");
        break;              
    case 'H6':
     console.log("you got a H7");
        break; 
     case 'O1' :
        console.log("you got a O1");
        break;
    case 'O2':
        console.log("you got a O2");
        break; 
    case 'O3' :
        console.log("you got a O3");
         break;
    case 'O4':
         console.log("you got a O4");
        break; 
    case 'O5':
        console.log("you got a O5");
        break;              
    case 'O6':
     console.log("you got a O6");
    break;
    case 'O7':
        console.log("you got a O7");
        break;              
    case 'O6':
     console.log("you got a O7");
}
