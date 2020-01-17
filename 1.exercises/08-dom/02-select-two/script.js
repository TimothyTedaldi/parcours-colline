/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function myFunction(){
        x=document.getElementsByClassName("target");  // Find the elements
        for(var i = 0; i < x.length; i++){
            x[i].innerText="Owned";    // Change the content
        }
    }
    myFunction();
})();
