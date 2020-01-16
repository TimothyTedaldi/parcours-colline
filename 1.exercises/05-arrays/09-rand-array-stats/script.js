/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        arrayNumbers=new Array;
        for (let x=0; x<10; x++){
            arrayNumbers[x] = Math.floor(Math.random() * 100) + 1;
        }
        console.log(arrayNumbers)
        let max = 0;
        let min = 100;
        let total = 0;
        for (let x=0; x<arrayNumbers.length; x++){
            let id = 'n-'+(x+1);
            document.getElementById(id).innerHTML=arrayNumbers[x];

            if (arrayNumbers[x]>max){
                max=arrayNumbers[x];
            }

            if (arrayNumbers[x]<min){
                min=arrayNumbers[x];
            }
            
            total = total + arrayNumbers[x];
        }
        document.getElementById('min').innerHTML=min;
        document.getElementById('max').innerHTML=max;
        document.getElementById('sum').innerHTML=total;
        document.getElementById('average').innerHTML=total/10;
    });
})();
