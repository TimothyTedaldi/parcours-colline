/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        function someoneIdentity (lastname, firstname, age, city, country){
            this.lastname=lastname;
            this.firstname=firstname;
            this.age=age;
            this.city=city;
            this.country=country;
        }
        var PikaTed = new someoneIdentity ('Picasso', 'Tedaldi', '13', 'Châtelet', 'Belgique' );
        console.log(PikaTed);
    });
   
})();
