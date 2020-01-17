/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        class Cat extends Animal{
            static greeting = ('Bonjour');
            constructor(name) {
                super();
                this.name= name;
            }
        }
        class Dog extends Animal{
            static greeting = ('Bonjour');
            constructor(name) {
                super();
                this.name= name;
            }
        }
        
        cat1 = new Cat ('Picasso')
        dog1 = new Dog ('Locco')
        
        alert(cat1.sayHello());
        alert(dog1.sayHello());
    });
})();
