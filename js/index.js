// Variables
const h3 = document.getElementById('ecriture');
const btn = document.getElementById('copy');
const btnColler = document.getElementById('coller');
const btnDechiff = document.getElementById('dechif');

// Crédit
console.log('Langue de Tagogue || Tagogue || all rights @2022');

// Savoir sur quel touche on appuie
document.addEventListener('keydown', (e) => {
    if (e.key == "a" || e.key == "A") {h3.textContent += "z"};
    if (e.key == "b" || e.key == "B") {h3.textContent += "y"};
    if (e.key == "c" || e.key == "C") {h3.textContent += "x"};
    if (e.key == "d" || e.key == "D") {h3.textContent += "w"};
    if (e.key == "e" || e.key == "E") {h3.textContent += "v"};
    if (e.key == "f" || e.key == "F") {h3.textContent += "u"};
    if (e.key == "g" || e.key == "G") {h3.textContent += "t"};
    if (e.key == "h" || e.key == "H") {h3.textContent += "s"};
    if (e.key == "i" || e.key == "I") {h3.textContent += "r"};
    if (e.key == "j" || e.key == "J") {h3.textContent += "q"};
    if (e.key == "k" || e.key == "K") {h3.textContent += "p"};
    if (e.key == "l" || e.key == "L") {h3.textContent += "o"};
    if (e.key == "m" || e.key == "M") {h3.textContent += "n"};
    if (e.key == "n" || e.key == "N") {h3.textContent += "m"};
    if (e.key == "o" || e.key == "O") {h3.textContent += "l"};
    if (e.key == "p" || e.key == "P") {h3.textContent += "k"};
    if (e.key == "q" || e.key == "Q") {h3.textContent += "j"};
    if (e.key == "r" || e.key == "R") {h3.textContent += "i"};
    if (e.key == "s" || e.key == "S") {h3.textContent += "h"};
    if (e.key == "t" || e.key == "T") {h3.textContent += "g"};
    if (e.key == "u" || e.key == "U") {h3.textContent += "f"};
    if (e.key == "v" || e.key == "V") {h3.textContent += "e"};
    if (e.key == "w" || e.key == "W") {h3.textContent += "d"};
    if (e.key == "x" || e.key == "X") {h3.textContent += "c"};
    if (e.key == "y" || e.key == "Y") {h3.textContent += "b"};
    if (e.key == "z" || e.key == "Z") {h3.textContent += "a"};
    if (e.key == " ") {h3.textContent += " "};
    if (e.key == 'Backspace') {h3.textContent = h3.textContent.slice(0, -1)};
});

// Code copier
btn.addEventListener('click', () => {
    if (h3.textContent == "") {
        alert('Le texte est vide !');
    } else {
        navigator.clipboard.writeText(h3.textContent).then(() => {
            alert("Texte copié !");
            h3.textContent = "";
        });
    };
});

// Code coller
coller.addEventListener('click', () => {
    navigator.clipboard.readText().then((texte) => {
        h3.textContent = texte;
    })
});

// Déchiffrage
btnDechiff.addEventListener('click', () => {
    let arrayH3 = Array.from(h3.textContent);
    let arrayFinal = [];

    arrayH3.map((letter) => {
        if (letter == "a") {arrayFinal.push('z')};
        if (letter == "b") {arrayFinal.push('y')};
        if (letter == "c") {arrayFinal.push('x')};
        if (letter == "d") {arrayFinal.push('w')};
        if (letter == "e") {arrayFinal.push('v')};
        if (letter == "f") {arrayFinal.push('u')};
        if (letter == "g") {arrayFinal.push('t')};
        if (letter == "h") {arrayFinal.push('s')};
        if (letter == "i") {arrayFinal.push('r')};
        if (letter == "j") {arrayFinal.push('q')};
        if (letter == "k") {arrayFinal.push('p')};
        if (letter == "l") {arrayFinal.push('o')};
        if (letter == "m") {arrayFinal.push('n')};
        if (letter == "n") {arrayFinal.push('m')};
        if (letter == "o") {arrayFinal.push('l')};
        if (letter == "p") {arrayFinal.push('k')};
        if (letter == "q") {arrayFinal.push('j')};
        if (letter == "r") {arrayFinal.push('i')};
        if (letter == "s") {arrayFinal.push('h')};
        if (letter == "t") {arrayFinal.push('g')};
        if (letter == "u") {arrayFinal.push('f')};
        if (letter == "v") {arrayFinal.push('e')};
        if (letter == "w") {arrayFinal.push('d')};
        if (letter == "x") {arrayFinal.push('c')};
        if (letter == "y") {arrayFinal.push('b')};
        if (letter == "z") {arrayFinal.push('a')};
        if (letter == " ") {arrayFinal.push(' ')};
    })

    let arrayFinal2 = arrayFinal.toString().replace(/,/g,"");
    h3.textContent = arrayFinal2;
});