/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var todayDate = new Date();
    var arrayDate = [todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()]

    document.getElementById('run').addEventListener("click", () => {
        var userYear = document.getElementById('dob-year').value;
        var userMonth = document.getElementById('dob-month').value - 1; // Par défaut janvier est à 0 hors ici on le récupère à 1 !
        var userDay = document.getElementById('dob-day').value
    
        let userAge;
        if (arrayDate[1] > userMonth || (arrayDate[1] == userMonth && arrayDate[2] > userDay)){
            userAge = arrayDate[0] - userYear;
        }
        else{
            userAge = arrayDate[0] - userYear - 1;
        }
        alert('La personne est agée de ' + userAge + ' ans !')
    });

})();
