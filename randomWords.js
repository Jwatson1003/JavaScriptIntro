var setup = ["Adore", "Lena","Double", "Spell", "Ya"];
var punchline = ["Adore is between you and me so please open up!","Lena a little closer, and I’ll tell you another joke!","W!","W-H-O!","No thanks, I use Google."];
var randomIndex = Math.floor( Math.random() * setup.length );
var randomIndex2 = Math.floor( Math.random() * punchline.length );

console.log('Knock Knock');
console.log('Whos There');
console.log(setup[randomIndex]);
console.log(setup[randomIndex] + " " + 'Who?');
console.log(punchline[randomIndex]);
