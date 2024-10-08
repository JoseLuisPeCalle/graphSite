document.addEventListener('DOMContentLoaded', () => {
    showSection('introduction');
});

function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('is-visible');
    });

    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';

    // Aplicar la animación
    setTimeout(() => {
        sectionToShow.classList.add('is-visible');
    }, 100);
}
function toggleGraphs() {
    var graphSection = document.getElementById("graphSection");
    var button = document.querySelector(".toggle-button"); // Selecciona el botón
    if (graphSection.style.display === "none" || graphSection.style.display === "") {
        graphSection.style.display = "flex"; // Muestra el bloque de gráficos
        button.textContent = "Hide Plot"; // Cambia el texto del botón
    } else {
        graphSection.style.display = "none"; // Oculta el bloque de gráficos
        button.textContent = "Show Plot"; // Cambia el texto del botón
    }
}

// Oculta el bloque de gráficos por defecto al cargar la página
window.onload = function() {
    var graphSection = document.getElementById("graphSection");
    graphSection.style.display = "none"; // Asegúrate de que los gráficos estén ocultos al inicio
};
