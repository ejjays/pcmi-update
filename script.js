document.addEventListener("DOMContentLoaded", function () {
    const text = "New Update";
    const exclamation = "!";
    const typingText = document.getElementById("typing-text");
    let charIndex = 0;
    let isDeleting = false;
    let exclamationCount = 0;

    function animate() {
        // Handle exclamation point blinking
        if (charIndex === text.length) {
            if (exclamationCount < 4) {
                typingText.textContent = text + (exclamationCount % 2 === 0 ? exclamation : '');
                exclamationCount++;
                setTimeout(animate, 500);
                return;
            } else {
                isDeleting = true;
                exclamationCount = 0;
            }
        }

        // Deleting animation
        if (isDeleting) {
            typingText.textContent = text.substring(0, charIndex) + exclamation;
            charIndex--;
            
            if (charIndex < 0) {
                isDeleting = false;
                charIndex = 0;
            }
            setTimeout(animate, 100);
            return;
        }

        // Typing animation
        typingText.textContent = text.substring(0, charIndex + 1) + exclamation;
        charIndex++;

        setTimeout(animate, 150);
    }

    // Start the animation
    animate();

    // Keep your existing card animation code
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.setProperty("--i", index);
        setTimeout(() => {
            card.classList.add("pulse");
        }, (2000 + index * 500));
    });
});