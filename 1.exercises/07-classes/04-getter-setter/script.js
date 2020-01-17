/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return this.firstname + ' ' + this.lastname;
        }
        set name (aName){
            let tempArray = this.aName.split(' ');
            this.firstname = tempArray[0];
            this.lastname = tempArray[1];
        }
    }
    thisIsAPerson = new Person ('Picasso', 'Tedaldi');
    console.log(thisIsAPerson.name);
    thisIsAPerson.aName = "Peluche Tedaldi";
    console.log(thisIsAPerson);


    // sorry if this seems messed up but i didn't understand this exercice
})();
