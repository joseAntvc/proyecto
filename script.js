// Lista de mensajes románticos que aparecerán en burbujas
const messages = [
    "Te amo muchísimo ❤️",
    "Gracias por estar en mi vida 🌟",
    "Eres mi persona favorita 💕",
    "Juntos por siempre 🥰",
    "Tú y yo, para siempre 💖",
    "Tu sonrisa me ilumina 💫",
    "Eres lo mejor que me ha pasado 😍",
    "Cada momento contigo es mágico ✨",
    "Siempre pienso en ti 💭",
    "Mi corazón es tuyo 💘",
    "Te amo de aquí a la luna en pasitos de tortuga 🐢",
    "Contigo todo es mejor 🫶",
    "Solo tú sabes hacerme sentir así 💓",
    "Nunca me había sentido tan bien con alguien 🤍",
    "Te elijo una y mil veces 💍",
    "Solo quiero hacerte feliz todos los días ☀️",
    "Eres mi hogar, aunque estemos lejos 🏠",
    "Si me pierdo, que sea en tu abrazo 🤗",
    "A veces siento que nací para encontrarte ✨",
    "No importa el lugar, si estoy contigo es perfecto 🌈",
    "Mi morenita chula hermosa 😍",
    "Eres mi ternurita 💞",
    "Qué haría sin ti, mi niña linda 💐",
    "Me encantas como no tienes idea 😘",
    "Mi amor por ti no tiene fin infinito ♾️",
    "Tu voz es mi lugar seguro 🎧",
    "Morenita chula, te llevo en el corazón cada segundo 💖"
];

const heartEmojis = ["❤️", "💖", "💕", "💘", "💗", "💓", "💞", "💝", "🩷", "🫶"];

// Función que crea una burbuja de corazón en una posición aleatoria
function createHeartBubble() {
    const heart = document.createElement("div");
    heart.className = "heart-bubble";
    heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    // Posición aleatoria en la pantalla
    const left = Math.random() * 80 + 10; // entre 10vw y 90vw
    const top = Math.random() * 80 + 10;  // entre 10vh y 90vh

    heart.style.position = "absolute";
    heart.style.left = left + "vw";
    heart.style.top = top + "vh";
    heart.style.fontSize = (Math.random() * 1.5 + 1) + "em"; // tamaño aleatorio

    // Animación de aparecer y desaparecer como los textos
    heart.style.animation = "floatHeart 6s ease-in-out forwards";

    const container = document.getElementById("bubbles-text");
    container.appendChild(heart);

    // Elimina el corazón después de 6 segundos
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

let lastBubblePositions = [];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    let left, top, tries = 0, tooClose;
    do {
        left = Math.random() * 80 + 10;
        top = Math.random() * 80 + 10;
        tooClose = lastBubblePositions.some(pos =>
            Math.abs(pos.left - left) < 10 && Math.abs(pos.top - top) < 10
        );
        tries++;
    } while (tooClose && tries < 10);

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    // Guarda la posición
    lastBubblePositions.push({ left, top });
    if (lastBubblePositions.length > 10) lastBubblePositions.shift();

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }
        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }
        if (rect.left < 0) {
            bubble.style.left = "10px";
        }
        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);
setInterval(createHeartBubble, 800); 