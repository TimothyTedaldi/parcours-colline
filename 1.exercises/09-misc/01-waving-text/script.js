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
    
    //Wave Text! by Spookdog (spookydog3@hotmail.com)
    //Submitted to DynamicDrive.com
    //For this script and more, visit http://www.dynamicdrive.com
    
        //you can use this on your web page as long as the above stays in the script-->
    
        // your code here
        const myTarget = document.getElementById('target')
        
        myTarget.textContent=''
        let aBeautifulEpiphany = "Rose are red Violets are blue Sugar is sweet And so is my cat!";
        let stringArray = (aBeautifulEpiphany.split(' '));
        
        let cptTotalLetters = 0;
        for (let x=0; x<stringArray.length; x++){
            cptTotalLetters += (stringArray[x].length);
        }
        
        myTarget.setAttribute('style', 'white-space: pre;');
        
        let cpt=0;let isItUpper = false; let anotherCpt = 0;
        for(let x=0; x<stringArray.length; x++){
            for(let y=0; y<stringArray[cpt].length; y++){
                if(stringArray[x][y] == stringArray[x][y].toUpperCase()  && x!=0){
                    myTarget.textContent += '\r\n'
                }
                if(((anotherCpt+1) % 5) == 0 || (anotherCpt+1) == 1 ){
                    
                }
                else{
                    myTarget.style.fontSize = "30px";
                }
                myTarget.textContent += stringArray[x][y];
                anotherCpt++;
            }
            myTarget.textContent += ' ';
            cpt++;
        }
    
    // Not Working Still Looking For a Soluce
    
    
    })();
    