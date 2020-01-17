/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        class Cat {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
                
            }
            sayHello(){
                alert("Bonjour, "+ this.firstname + " " + this.lastname);
            }
        }
        var cat1 = new Cat ('Picasso', 'Tedaldi');
        cat1.sayHello();
    });
})();
