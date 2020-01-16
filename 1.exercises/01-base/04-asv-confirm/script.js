/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let userValidation = "no";
    do{
        var userAge = prompt("What's your age ?");
        var userGender = prompt("What's your gender ?");
        var userCity = prompt("Which city do you come from ?");
        console.log(userValidation);

        userValidation = prompt ("So you're a "+ userGender +" of "+ userAge + " years old who comes from " + userCity + " \nIs it the case ? Write yes/no.")
        console.log(userValidation);
    
    } while (userValidation !== 'yes');

    alert ("Nice, everythig is settled then !");

})();
