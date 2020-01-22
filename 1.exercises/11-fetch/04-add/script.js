/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let aName = document.getElementById("hero-name").value;
        let aAlterEgo = document.getElementById("hero-alter-ego").value;
        let aBunchOfPowers = document.getElementById("hero-powers").value;
           
        if (aName == '' || aName == ' '  || aName == "don't leave a blank !"){
            document.getElementById('hero-name').style.borderColor = 'red';
            document.getElementById('hero-name').style.color='red'
            document.getElementById('hero-name').value = "don't leave a blank !"
        } else{
            document.getElementById('hero-name').style.borderColor = 'green';
            document.getElementById('hero-name').style.color='black'
        }
        if (aAlterEgo == '' || aAlterEgo == ' ' || aAlterEgo == "don't leave a blank !"){
            document.getElementById('hero-alter-ego').style.borderColor = 'red';
            document.getElementById('hero-alter-ego').style.color='red'
            document.getElementById('hero-alter-ego').value = "don't leave a blank !"
        } else{
            document.getElementById('hero-alter-ego').style.borderColor = 'green';
            document.getElementById('hero-alter-ego').style.color='black'
        }
        if (aBunchOfPowers == '' || aBunchOfPowers == ' ' || aBunchOfPowers == "don't leave a blank !"){
            document.getElementById('hero-powers').style.borderColor = 'red';
            document.getElementById('hero-powers').style.color='red'
            document.getElementById('hero-powers').value = "don't leave a blank !"
        } else{
            document.getElementById('hero-powers').style.borderColor = 'green';
            document.getElementById('hero-powers').style.color='black'
        }

        if (aName != '' && aName != ' ' && aName != "don't leave a blank !"  && aAlterEgo != '' && aAlterEgo != ' ' && aAlterEgo != "don't leave a blank !" && aBunchOfPowers != ''  && aBunchOfPowers != ' ' && aBunchOfPowers !="don't leave a blank !"){
            alert('FUCK SOUFIANE')
        }
       

    });
})();
