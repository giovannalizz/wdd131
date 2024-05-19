const year = document.querySelector('#year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const menu = document.querySelector("nav ul");
    const gallery = document.querySelector(".gallery");

    function toggleMenu() {
        menu.classList.toggle("hide");
    }

    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
    }

    function viewerTemplate(pic, alt) {
        return `
            <div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${pic}" alt="${alt}">
            </div>
        `;
    }

    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        if (viewer) {
            viewer.remove();
        }
    }

    function viewHandler(event) {
        if (event.target.tagName === 'IMG') {
            const pic = event.target.src;
            const alt = event.target.alt;
            const viewerHTML = viewerTemplate(pic, alt);
            document.body.insertAdjacentHTML('afterbegin', viewerHTML);
            const closeViewerButton = document.querySelector(".close-viewer");
            closeViewerButton.addEventListener("click", closeViewer);
        }
    }

    menuButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
    gallery.addEventListener("click", viewHandler);

    // Call handleResize immediately when the page loads
    handleResize();
});
