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
            typingText.textContent = text.substring(0, charIndex);
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

    // Wait for initial slide/fade animation (1.5s) + all other animations (2.2s) + 2s extra delay
    setTimeout(() => {
        animate();
    }, 5700); // 1.5s + 2.2s + 2s = 5.7s total delay
});