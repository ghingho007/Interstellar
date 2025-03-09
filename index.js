let StartBtn = document.getElementById("next");

function start() {
    StartBtn.style.display = "none"; 
    document.body.classList.add("black-background");

    // Primo cerchio bianco
    setTimeout(() => {
        document.body.classList.add("white-circle");
        document.body.classList.add("zoom-effect");  
    }, 1000);

    setTimeout(() => {
        window.location.href = "pagina-redirect.html";
    }, 7000);
}

StartBtn.addEventListener("click", start);

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
    });
});