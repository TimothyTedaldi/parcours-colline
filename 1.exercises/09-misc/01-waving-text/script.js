/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('target').textContent=''
    
    
    let aBeautifulEpiphany = "Rose are red Violets are blue Sugar is sweet And so is my cat!";
    let stringArray = (aBeautifulEpiphany.split(' '));
    
    let cptTotalLetters = 0;
    for (let x=0; x<stringArray.length; x++){
        cptTotalLetters += (stringArray[x].length);
    }
    
    document.getElementById('target').setAttribute('style', 'white-space: pre;');
    
    let cpt=0;let isItUpper = false; let anotherCpt = 0;
    for(let x=0; x<stringArray.length; x++){
        for(let y=0; y<stringArray[cpt].length; y++){
            if(stringArray[x][y] == stringArray[x][y].toUpperCase()  && x!=0){
                document.getElementById('target').textContent += '\r\n'
            }
            if(((anotherCpt+1) % 5) == 0 || (anotherCpt+1) == 1 ){
                document.getElementById('target').style.fontSize = "12px";
            }
            else{
                document.getElementById('target').style.fontSize = "50px";
            }
            document.getElementById('target').textContent += stringArray[x][y];
            anotherCpt++;
        }
        document.getElementById('target').textContent += ' ';
        cpt++;
    }
})();
