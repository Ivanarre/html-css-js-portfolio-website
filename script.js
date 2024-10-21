function toggleMenu() {
    // Get the menu and hamburger icon elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the "open" class on both elements
    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    } else {
        console.error("Menu or Hamburger icon not found.");
    }
}
