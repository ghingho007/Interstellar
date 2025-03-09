document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
    const starPositions = [];

    stars.forEach(star => {
        let x, y, overlapping;
        do {
            overlapping = false;
            x = Math.random() * (window.innerWidth - star.offsetWidth);
            y = Math.random() * (window.innerHeight - star.offsetHeight);

            for (let pos of starPositions) {
                const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
                if (distance < star.offsetWidth) {
                    overlapping = true;
                    break;
                }
            }
        } while (overlapping);

        starPositions.push({ x, y });
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("dark-background");
});