/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    var todayDate = new Date();
    var textToShow;

    switch(todayDate.getDay()){
        case 0:
            textToShow = "lundi ";
            break;
        case 1:
            textToShow = "mardi ";
            break;    
        case 2:
            textToShow = "mercredi ";
            break;
        case 3:
            textToShow = "jeudi ";
            break;
        case 4:
            textToShow = "vendredi ";
            break;
        case 5:
            textToShow = "samedi ";
            break;
        case 6:
            textToShow = "dimanche ";
            break;          
    }
    textToShow = textToShow + todayDate.getDate() + ' ';
    switch(todayDate.getDay()){
        case 0:
            textToShow = textToShow +"janvier ";
            break;
        case 1:
            textToShow = textToShow +"février ";
            break;    
        case 2:
            textToShow = textToShow +"mars ";
            break;
        case 3:
            textToShow = textToShow +"avril ";
            break;
        case 4:
            textToShow = textToShow +"mai ";
            break;
        case 5:
            textToShow = textToShow +"juin ";
            break;
        case 6:
            textToShow = textToShow +"juillet ";
            break;
        case 7:
            textToShow = textToShow +"aout ";
            break;    
        case 8:
            textToShow = textToShow +"septembre ";
            break;
        case 9:
            textToShow = textToShow +"octobre ";
            break;
        case 10:
            textToShow = textToShow +"novembre ";
            break;
        case 11:
            textToShow = textToShow +"décembre ";
            break;
    }
    textToShow = textToShow + todayDate.getFullYear() + ", " + todayDate.getHours() + 'h' + todayDate.getMinutes();
    document.getElementById('target').innerHTML = textToShow;


    // Au fait ça marche en 5 ligne en déclarant une constante d'un array  pour les mois et jours,... je suis un connard !
})();
