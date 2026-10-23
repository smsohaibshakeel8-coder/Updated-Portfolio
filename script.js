document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Navigation Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Dynamic Typing Effect
    const words = ["Software Development", "C & Python Programming", "Mathematics & Physics Tutoring", "Graphic Designing"];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                const target = document.getElementById('type-text');
                if (target) target.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 90);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                const target = document.getElementById('type-text');
                if (target) target.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 40);
        };
        loopDeleting();
    }

    typingEffect();
});