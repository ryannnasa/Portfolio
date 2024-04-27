const OpenMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        document.querySelector("header .material-icons").innerHTML = "close"
    } else {
        document.querySelector("header .material-icons").innerHTML = "menu"
    }
}

document.querySelectorAll(".header-menu li a").forEach(item => {
    item.addEventListener("click", () => {
        OpenMenu(); // Fermer le menu
        const sectionId = item.getAttribute("href"); // Récupérer l'ID de la section à laquelle l'élément est lié
        const section = document.querySelector(sectionId); // Trouver la section correspondante
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // Faire défiler jusqu'à la section de manière fluide
        }
    });
});