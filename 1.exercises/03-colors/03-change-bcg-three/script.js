/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var randomHexColor = function(){
        var color = '#', i = 5;
        do{ 
            color += "0123456789abcdef".substr(Math.random() * 16,1); 
        }
        while(i--);
        console.log(color);
        return color;
    }

    document.getElementById('run').addEventListener("click", () => {
        /*let newColor = ('#'+Math.floor(Math.random()*999999));*/
        document.body.style.background=randomHexColor();
    });

})();
