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
