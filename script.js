/* =========================================
   DHARANI PATNAIKUNI PORTFOLIO
   JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    const isOpen =
        navMenu.classList.toggle("open");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation"
            : "Open navigation"
    );

});


/* ================= CLOSE MENU ================= */

const navigationLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }
    );

});


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


yearElement.textContent =
    new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .highlight, .timeline-card, .cert-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    observer.observe(element);

});