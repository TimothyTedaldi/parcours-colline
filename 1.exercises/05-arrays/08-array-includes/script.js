/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById('run').addEventListener("click", () => {
        var isThereAnApple = false;
        for (let x=0; x<fruits.length; x++){
            if (fruits[x] == "pomme"){
                isThereAnApple = true;
            }
        }
        if (isThereAnApple == true){
            alert('Oui, il y a une pomme ici !');
        }
        else{
            alert("Non, il n'y a pas de pomme");
        }
    }); 
})();
