// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Animate the main content to fade in
    const mainContent = document.querySelector("main");
    mainContent.style.opacity = 0;
    setTimeout(() => {
        mainContent.style.transition = "opacity 1s ease-in-out";
        mainContent.style.opacity = 1;
    }, 100);

    // Focus input field animation
    const searchInput = document.querySelector("main input");
    searchInput.addEventListener("focus", () =>]{
        searchInput.style.transition = "box-shadow 0.3s ease-in-out";
        searchInput.style.boxShadow = "0 0 8px rgba(255, 69, 0, 0.8)";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.boxShadow = "none";
    });

    // Smooth Scroll for internal links (for navigation, if any)
    const links = document.querySelectorAll("header ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
