/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var isHigher;

    window.onload = (event) => {
        alert('Hello there ! Ready for a little game ?')
        var randomNumb = Math.floor(Math.random() * 100) + 1;
        myFunction(randomNumb)
    };


    function myFunction(x) {
        let numbGiven = prompt("Please enter a number:","");
        if(x != numbGiven){
            if(x < numbGiven){
                isHigher = false;
                myConfirmBox(x, isHigher);
            }
            else{
                isHigher = true;
                myConfirmBox(x, isHigher)
            }
        }
        else if(x == numbGiven){
            alert('GG, my cat would have done better but still gg')
        }
        else{
            alert('NOOB, YOU SO BAD')
        }
    }
    
    function myConfirmBox(x, higherOrNot) {
        if(higherOrNot == true){
            if (confirm("Failed ! The number to find is higher")) {
                myFunction(x);
            } else {
                alert('Bouhou you are a loser');
            }
        }
        else{
            if (confirm("Failed ! The number to find is lower")) {
                myFunction(x);
            } else {
                alert('Bouhou you are a loser');
            }
        }
    }
    

})();
