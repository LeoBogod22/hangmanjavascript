var words = [
    ["E", "L", "E", "C", "T", "R", "O", "N", "I", "C", "S"],
    ["A", "R", "R", "A", "Y"],
    ["E", "A", "S", "T", "E", "R"],
    ["A", "M", "E", "R", "I", "C", "A"],
    ["A", "P", "P", "L", "E"],
    ["I","T","A","L","Y"]
]


var hints = ["this is something programmers, designers and many other people use", "This is tech related", "this is a country", " this is a fruit"]


var wongame = false;

var imagevalue = 0;
var randomword = words[Math.floor(Math.random() * words.length)];

var newword = new Array(randomword.length);

var money = 0;
var tries = 7;



function solveword() {

    //function to check if the users word is equal to the user word
    var g = prompt("enter full word  if you dare");


    var word = randomword.join("");
    //if user input uppercase equals the word then wongame is true
    if (g.toUpperCase() === word) {
        wongame = true;
        alert("Congratulations!! you won!!!!")
        
        sortingComplete();
        fireworks();

    } else {

        alert("sorry you loose")
        document.getElementById("win").innerHTML = "you have been hanged!!" + " " + "the word was" + " " + randomword.join("");
        document.getElementById('hangman').src = "https://lh3.ggpht.com/RHKkf_YzgC24WVjefBEHCVwZ1alzcA15oQgfsFd0tcgQo3_fgxFmLbyIGECcrZBD4KsJ=w300";
        document.getElementById("check").disabled = true;
        document.getElementById("hint").disabled = true;
    }


}

for (var i = 0; i < newword.length; i++) {
    newword[i] = "_ ";
}

function printword() {
    //function to print blanks equal to the word length


    for (var i = 0; i < newword.length; i++) {

        var wor = document.getElementById('word');
        var tuna = document.createTextNode(newword[i]);

        wor.appendChild(tuna);
        console.log(tuna);
    }



}



// Image factory

var quizImagesB = new Array();
quizImagesB[0] =  "https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png"
quizImagesB[1] =  "https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png"
quizImagesB[2] = "https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png"
quizImagesB[3] = "https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png"
quizImagesB[4] = "https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png"
quizImagesB[5] = "https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png"
quizImagesB[6] = "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png"

// output
function checkletter() {
    //function to check user value to letters of the word
    var value = document.getElementById("guess").value;

    console.log(value);
    value = value.toUpperCase();


    for (var i = 0; i < newword.length; i++) {

        if (value === randomword[i]) {
            newword[i] = value + " ";
            var status = true;
            money += 10;


        }

        document.getElementById("guess").value = "";

    }
    var ratefeld = document.getElementById("word");
    ratefeld.innerHTML = "";
    document.getElementById('cash').innerHTML = "you have " + " " + money + " " + "gold";

    printword();

    if (!status) {

        var wrongletters = [];
        var wrong = document.getElementById('wrong');

        var hangman = document.getElementById("hangman");
        var text = document.createTextNode(" " + value);

        tries--;
        wrong.appendChild(text);
        wrongletters.push(text);
        update();
    }

    document.getElementById('lives').innerHTML = "you have" + " " + tries + " " + "tries " + "left";
    var wongame = true;
    for (var i = 0; i < newword.length; i++) {
        if (newword[i] === "_ ") {
            wongame = false;
        }
    }

    if (wongame == true) {
        alert("You win! Congratulations!!!!");
        document.getElementById("check").disabled = true;
        document.getElementById("hint").disabled = true;
        sortingComplete();
        fireworks();

    }

    //once you got six wrong letters, you lose
    if (tries === 0) {
        document.getElementById('hangman').src = "https://lh3.ggpht.com/RHKkf_YzgC24WVjefBEHCVwZ1alzcA15oQgfsFd0tcgQo3_fgxFmLbyIGECcrZBD4KsJ=w300";
        alert("Uh...I guess you're dead now. Game over!!");
        document.getElementById("win").innerHTML = "you have been hanged!!" + " " + "the word was" + " " + randomword.join("");
        document.getElementById("check").disabled = true;
        document.getElementById("hint").disabled = true;
    }



}

function update(val) {




    imagevalue++;
    var url = 'url(' + quizImagesB[i] + ')';
    document.getElementById('hangman').src = quizImagesB[imagevalue];


    if (tries === 0) {
        document.getElementById('hangman').src = "https://lh3.ggpht.com/RHKkf_YzgC24WVjefBEHCVwZ1alzcA15oQgfsFd0tcgQo3_fgxFmLbyIGECcrZBD4KsJ=w300";


    }
};


document.addEventListener("DOMContentLoaded", function() {
    printword();
});




// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim

// once the window loads, we are ready for some fireworks!
