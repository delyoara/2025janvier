
//Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console.
// Objectif : Voir dans la console : “Le résultat de la somme est 6”s'il ne faut pas faire d'opération 


function addition3Numbers(){
    console.log("Le résultat de la somme est", 1 + 2 + 3);
}
addition3Numbers();


// avec trois variables 
let firstNumber = 1; // var 1
let secondNumber = 2; // var 2
let thirdNumber = 3; // var 3
function addition3NumbersWithArg(firstNumber, secondNumber, thirdNumber){
    let sum = firstNumber + secondNumber + thirdNumber
    console.log(`Le résultat de la somme est`, sum);
}
addition3NumbersWithArg(2, 3, 3); 


//3 fois avec des valeurs d’argument différentes
function addition3NumbersWithArg(firstNumber, secondNumber, thirdNumber){
    let sum = firstNumber + secondNumber + thirdNumber
    if(sum == 6){
        console.log("Le résultat de la somme est X")
    }
    else if(sum == 9){
        console.log("Le résultat de la somme est Y");
    }
        else if(sum == 15){
            console.log("Le résultat de la somme est Z");
            }
     }
addition3NumbersWithArg(1, 2, 3); //les arguments entre parenthèses
addition3NumbersWithArg(2, 3, 4);
addition3NumbersWithArg(4, 5, 6);