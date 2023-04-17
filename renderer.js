// Variables
const h3 = document.getElementById("ecriture");
const btn = document.getElementById("copy");
const btnColler = document.getElementById("coller");
const btnDechiff = document.getElementById("dechif");

// Crédit
console.log("Langue de Tagogue || Tagogue || all rights @2022");

const convertAtoZ = (a) =>
  a === " "
    ? " "
    : String.fromCharCode(97 + (122 - a.toLowerCase().charCodeAt()));

// Savoir sur quel touche on appuie
document.addEventListener("keydown", (e) =>
  e.key == "Backspace"
    ? (h3.textContent = h3.textContent.slice(0, -1))
    : (h3.textContent += convertAtoZ(e.key))
);

// Code copier
btn.addEventListener("click", () => {
  if (h3.textContent == "") {
    alert("Le texte est vide !");
  } else {
    navigator.clipboard.writeText(h3.textContent).then(() => {
      alert("Texte copié !");
      h3.textContent = "";
    });
  }
});

// Code coller
coller.addEventListener("click", () => {
  navigator.clipboard.readText().then((texte) => {
    h3.textContent = texte;
  });
});

// Déchiffrage
btnDechiff.addEventListener("click", () => {
  h3.textContent = [...h3.textContent]
    .map((letter) => convertAtoZ(letter))
    .join("")
    .replace(/,/g, "");
});

// Delete
const sup = document.querySelector('.sup');

sup.addEventListener('click', () => {
  h3.textContent = "";
})