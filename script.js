
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.getElementById('menu');

if (mobileMenuBtn && menu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        mobileMenuBtn.classList.toggle('open', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            mobileMenuBtn.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));

const currentPage = document.body.dataset.page;
document.querySelectorAll('nav a[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
});

const resumePrintButton = document.querySelector('.resume-print-button');
resumePrintButton?.addEventListener('click', () => window.print());
/* =========================================================
   PORTFOLIO CASE STUDIES JAVASCRIPT
   Jasmine Marin | Shopify E-commerce Operations
   ========================================================= */


/* ---------------------------------------------------------
   PORTFOLIO SCROLL REVEAL
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {

    const portfolioReveals = document.querySelectorAll(
        ".portfolio-case-studies .reveal"
    );

    if (portfolioReveals.length) {

        if ("IntersectionObserver" in window) {

            const portfolioObserver = new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

            portfolioReveals.forEach(function (element) {
                portfolioObserver.observe(element);
            });

        } else {

            portfolioReveals.forEach(function (element) {
                element.classList.add("visible");
            });

        }

    }


    /* -----------------------------------------------------
       PORTFOLIO IMAGE ACCESSIBILITY
    ----------------------------------------------------- */

    const portfolioImages = document.querySelectorAll(
        ".portfolio-case-studies img"
    );

    portfolioImages.forEach(function (image) {

        image.addEventListener("error", function () {

            image.classList.add("image-error");

            console.warn(
                "Portfolio image could not be loaded:",
                image.getAttribute("src")
            );

        });

    });


    /* -----------------------------------------------------
       CASE STUDY IMAGE LINKS
       Opens screenshots in a new browser tab.
    ----------------------------------------------------- */

    const screenshotLinks = document.querySelectorAll(
        ".portfolio-case-studies a[href$='.webp'], " +
        ".portfolio-case-studies a[href$='.jpg'], " +
        ".portfolio-case-studies a[href$='.jpeg'], " +
        ".portfolio-case-studies a[href$='.png']"
    );

    screenshotLinks.forEach(function (link) {

        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");

    });


    /* -----------------------------------------------------
       SMOOTH INTERNAL PORTFOLIO LINKS
    ----------------------------------------------------- */

    const portfolioAnchors = document.querySelectorAll(
        ".portfolio-case-studies a[href^='#']"
    );

    portfolioAnchors.forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId = anchor.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});