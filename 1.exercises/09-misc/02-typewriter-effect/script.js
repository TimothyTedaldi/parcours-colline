/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('target').setAttribute('style', 'white-space: pre;');
    document.getElementById('target').innerHTML="";

    var myText = "Rose are red, \r\n Violets are blue, \r\n Sugar is sweet \r\n And so is my cat!";
    var myArray = myText.split("");
    var timeLooper;

    function loop(){
        if(myArray.length > 0){
            console.log(myArray)
            document.getElementById('target').innerHTML += myArray.shift();
        } else{
            clearTimeout(timeLooper);
        }
        timeLooper = setTimeout(loop, getRandomInt(30, 100));
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
    loop();
})();
