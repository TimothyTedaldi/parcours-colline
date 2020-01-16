/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   
    document.getElementById('run').addEventListener("click", () => {
        const month=['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        const day=['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        
        var date = new Date();
        let yearToCheck= document.getElementById('year').value;

        date.setYear(yearToCheck);
        date.setDate(13);

        for(let x=0; x<11; x++){
            date.setMonth(x);
            if (date.getDay() == 5){
                console.log('Le 13 ' + month[x] + ' ' + yearToCheck + ' est un vendredi 13 !!!');
            }
        }
    });

})();
