//Variaveis
const box1 = document.querySelector(".before");
const box2 = document.querySelector(".after");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const luckParagraph = document.querySelector(".luck");

// Lista de frases
const frases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível."
];

// Esconder e mostrar 'before' e 'after'
btnTry.addEventListener('click', toggleBox);
btnReset.addEventListener('click', resetBox);

function toggleBox() {
    box1.classList.add("hide");
    box2.classList.remove("hide");
    // Seleciona uma frase aleatória
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    // Define a frase no parágrafo
    luckParagraph.textContent = fraseAleatoria;
}

function resetBox() {
    box1.classList.remove("hide");
    box2.classList.add("hide");
}

