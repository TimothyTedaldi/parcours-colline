/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let input = document.getElementById("pass-one");
    input.setAttribute("maxlength", 10);
    input.addEventListener("input", () => {
        let letters = document.getElementById("pass-one").value.split('');
        document.getElementById("counter").innerHTML = letters.length + "/10";
    });
})();
