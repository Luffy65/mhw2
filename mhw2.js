// ************ PULSANTE DEI PREFERITI ************************************
let isFavorite = false; // Variabile per memorizzare lo stato del pulsante dei preferiti

function favoriteFunction() {
    const favoriteButton = this; // 'this' si riferisce al button cliccato
    const favoriteImage = favoriteButton.querySelector('img'); // L'immagine della stella nel button dei preferiti

    isFavorite = !isFavorite; // Inverte lo stato del pulsante dei preferiti

    if (isFavorite) {
        favoriteImage.src = "https://s-lol-web.op.gg/images/icon/icon-bookmark-on-w.svg?v=1710914129937";
        favoriteImage.classList.add("pref-giallo");
        favoriteImage.classList.remove("pref-nongiallo");
        console.log("Aggiunto ai preferiti");
    } else {
        favoriteImage.src = "https://s-lol-web.op.gg/images/icon/icon-bookmark.svg?v=1710914129937";
        favoriteImage.classList.remove("pref-giallo");
        favoriteImage.classList.add("pref-nongiallo");
        console.log("Rimosso dai preferiti");
    }
}

// Seleziona tutti i pulsanti con la classe "favorite"
const preferiti = document.querySelectorAll(".favorite"); 

// Aggiungi l'eventListener a ciascun pulsante con la classe "favorite"
for (preferito of preferiti)
{
    preferito.addEventListener("click", favoriteFunction); 
}

// ************ LIGHT / DARK MODE ************************************
function darkLightFunction() {
    const interosito = document.querySelector("#intero-sito");
    const foot = document.querySelector("#footer");
    const DarkLightButton = document.querySelector(".dark"); // il pulsante dark/light mode

    // Recupera il valore corrente dell'attributo 'data-mode'
    const currentMode = DarkLightButton.dataset.mode;

    // Inverti il ​​valore
    const newMode = currentMode === 'light' ? 'dark' : 'light';

    // Aggiorna attributo 'data-mode'
    DarkLightButton.dataset.mode = newMode; 

    // Aggiorna le classi in base al nuovo stato
    if(newMode == 'light') { // Light mode
        interosito.classList.add("light-mode");
        interosito.classList.remove("dark-mode");
        foot.classList.add("light-mode");
        foot.classList.remove("dark-mode");
        DarkLightButton.classList.add("light");
    }
    else { // Dark mode
        interosito.classList.remove("light-mode");
        interosito.classList.add("dark-mode");
        foot.classList.remove("light-mode");
        foot.classList.add("dark-mode");
        DarkLightButton.classList.remove("light");
    }
    console.log("Sito impostato in " + newMode + " mode"); 
}

// Seleziona il pulsante della dark/light mode
const DarkLightButton = document.querySelector(".dark"); 
DarkLightButton.addEventListener("click", darkLightFunction);

// ************ FAQ ************************************
// Quando si clicca sul pulsante FAQ compare un piccolo menù a tendina con 2 opzioni: "Contact us" e "Help center".
const divSottoFaq = document.querySelector(".FAQ div");
const faqButton = document.querySelector('.button-non-cliccato.menu-faq');  // Riferimento al pulsante FAQ
const articleref = document.querySelector("#intero-sito") // Riferimento all'intero sito.

function closeFAQMenu(event) {
    const menuButton = event.currentTarget; // Il pulsante FAQ
    menuButton.removeEventListener('click', closeFAQMenu);
    menuButton.addEventListener('click', compareFAQ);

    const faqMenu = document.querySelector('.FAQ div div'); // Seleziona il menu
    if (faqMenu) {
        faqMenu.remove(); // Rimuove il menu a tendina
        console.log('faq rimosso');
    }
}

function compareFAQ(event) {
    const menuButton = event.currentTarget; // Il pulsante FAQ
    menuButton.removeEventListener('click', compareFAQ);
    menuButton.addEventListener('click', closeFAQMenu);

    /* Creo il FAQ menu */
    const newDiv = document.createElement("div");
    const newButton1 = document.createElement("button");
    const newButton2 = document.createElement("button");
    const newSpan1 = document.createElement("span");
    const newSpan2 = document.createElement("span");
    const newContent1 = document.createTextNode("Contact Us");
    const newContent2 = document.createTextNode("Help Center");

    newButton1.classList.add("pulsanti-faq");
    newButton2.classList.add("pulsanti-faq");

    newSpan1.appendChild(newContent1);
    newSpan2.appendChild(newContent2);
    newButton1.appendChild(newSpan1);
    newButton2.appendChild(newSpan2);
    newDiv.appendChild(newButton1);
    newDiv.appendChild(newButton2);

    // Aggiungo l'elemento appena creato e il suo contenuto nel DOM
    divSottoFaq.appendChild(newDiv);
}

// Aggiungo l'EventListener
var faqVariable = document.querySelector('.FAQ div div');
faqButton.addEventListener('click', compareFAQ);

// ************ MORE SEASON TIER ************************************
// Cliccando su "more season tier", compare una lista dei rank del giocatore nelle stagioni precedenti.
let isRankHidden = true;
const listaRank = document.querySelector(".more-tier-list"); // Riferimento alla lista da far comparire / nascondere
const pulsanteRank = document.querySelector(".more-tier"); // Riferimento al pulsante da cliccar eper far comparire / nascondere la lista.

function toggleRank() {
    isRankHidden = !isRankHidden;

    if(isRankHidden) {
        listaRank.classList.add("NASCOSTO");
        console.log("Nascosti i rank precedenti");
    }
    else {
        listaRank.classList.remove("NASCOSTO");
        console.log("visibili i rank precedenti");
    }
}

listaRank.classList.add("NASCOSTO"); // In questo modo, al primo caricamento della pagina avremo il menu nascosto.
pulsanteRank.addEventListener('click', toggleRank);

// ************ WELCOME ************************************
// Fa stampare alla console un messaggio in base a un elemento "data-*" contenuto nell'article.
const articolo = document.querySelector("#intero-sito");
const numHomework = articolo.dataset.nhomework;
console.log("Benvenuto all'homework " + numHomework + "!");

