

//Corrige le code suivant. Note les erreurs que tu rencontres et comment tu les as corrigées.
//

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");

function sendMessage(message, fromName, toName) {
    console.log("From : " + fromName + " to : " + toName + " Message : " + message)//ajout de la parenthèse
}; //ajout de l'accolade; ajout d'une pause avant to; 
// supprimer sendMessage() car il ny avait pas de paramètres
sendMessage("Super on se voit mardi !", "Linda", "Marc");
// J'ai changé le accolades en paranthèses

/*let contactName = "Jean";
let myName = "Ada";
let myMessage = "Je t'apprends à coder tes premières fonctions";*/

//j'ai mis les strings dans les paramètres de la fonciton pour avoir le message
//je ne comrpends pas pouquoi on a des variables alors qu'on ne les utilise pas

sendMessage("Je t'apprends à coder tes premières fonctions", "Jean", "Ada"); //