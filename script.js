// Lista de mensajes románticos que aparecerán en burbujas
const message = [
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


// Función que crea una burbuja de texto con un mensaje aleatorio
function createTextBubble() {
    // Creamos un nuevo elemento <div>
    const bubble = document.createElement("div");

    // Le asignamos la clase CSS "text-bubble" (debes definirla en tu CSS)
    bubble.className = "text-bubble";

    // Seleccionamos un mensaje aleatorio del arreglo
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    // Calculamos una posición aleatoria dentro de la pantalla (entre 10% y 90%)
    const left = Math.random() * 70 + 20;
    const top = Math.random() * 70 + 20;

    // Establecemos la posición absoluta y aplicamos las coordenadas calculadas
    bubble.style.position = "absolute";
    bubble.style.left = left + "vw"; // vw = porcentaje del ancho de la ventana
    bubble.style.top = top + "vh";   // vh = porcentaje del alto de la ventana

    // Buscamos el contenedor con ID "bubbles-text" y añadimos la burbuja
    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    // Esperamos un momento (10ms) para asegurarnos de que se renderizó
    setTimeout(() => {
        const rect = bubble.getBoundingClientRect(); // Obtenemos las coordenadas reales del div

        // Si la burbuja se sale por la derecha, la ajustamos hacia la izquierda
        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

        // Si la burbuja se sale por la parte inferior, la subimos
        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        // Si se va muy a la izquierda, la traemos hacia adentro
        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        // Si se va muy arriba, la bajamos un poco
        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    // Eliminamos la burbuja automáticamente después de 8 segundos
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);
