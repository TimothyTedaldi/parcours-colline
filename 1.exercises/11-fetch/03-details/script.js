/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let temp = document.getElementsByTagName('template')[0];
        let id = parseInt(document.getElementById("hero-id").value);
        let promise = fetch("http://localhost:3000/heroes").then(rs => rs.json());
        promise.then(val =>
            val.forEach(element => {
                if(element.id == id){
                    let aClone = document.importNode(temp.content, true);
                    let aName = aClone.querySelectorAll('strong');
                        aName[0].textContent = element.name;
                    let aAlterEgo = aClone.querySelectorAll('em');
                        aAlterEgo[0].textContent = element.alterEgo;
                    let aBunchOfPowers = aClone.querySelectorAll('p');
                        aBunchOfPowers[0].textContent = element.abilities;
                    document.getElementById('target').appendChild(aClone);
                }
            }));
    });
})();
