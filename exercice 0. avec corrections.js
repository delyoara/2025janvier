// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10;
let a2 = 20;
// Nous calculons le total
let tot = a1 + a2; //j'ai remplacé const par let (à voir plus bas)
// Prix d'un troisieme article
let a3 = 50;
// Nous ajoutons a3 au total
tot = tot + a3; //on ne peut pas remplacer la variable 'tot'car elle est "const", on peut éventuellement la remplacer par let
 //il est possible d'écrire const tot = a1 + a2 + a3 si on ne veut pas que la varaible change 

 let tot2 = tot - tot * 0.2; //il faut changer la virgule avec un point (en anglais on met point)

console.log("Le prix total avant reduction est de : " + tot);
console.log("Le prix total après reduction est de : " + tot2);

//Nous appliquons 20% de reduction