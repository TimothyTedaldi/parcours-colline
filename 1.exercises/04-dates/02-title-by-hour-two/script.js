/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    function myFunction() {
        var todayDate = new Date();
        var hoursOfDay = todayDate.getHours();
        var minutesOfDay = todayDate.getMinutes();
        var todayHoursMinutes = hoursOfDay + ":" + minutesOfDay;
        return(todayHoursMinutes);
    }
    if  (myFunction()<='17:30'){
        document.getElementById('target').innerHTML = "Bonjour Tim !"
    }
    else{
        document.getElementById('target').innerHTML = "Bonsoir Tim !"
    }
    
})();
