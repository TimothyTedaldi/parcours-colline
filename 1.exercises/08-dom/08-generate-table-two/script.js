/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let myArray = document.createElement("table");
    for (let x = 0; x < 10; x++) {
        let tblRow = document.createElement("tr");
        let tblCol = document.createElement("td");
        for (let y = 0; y < 10; y++) {
            tblCol.innerHTML += y + 1;
            tblCol.innerHTML += " * ";
            tblCol.innerHTML += x + 1;
            tblCol.innerHTML += " = ";
            tblCol.innerHTML += (x + 1) * (y + 1);
            tblCol.innerHTML += "<br>";
        }
        tblRow.appendChild(tblCol);
        myArray.appendChild(tblRow);
    }
    document.getElementById("target").appendChild(myArray);
})();