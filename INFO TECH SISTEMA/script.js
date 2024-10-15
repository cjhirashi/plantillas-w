document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const content = document.querySelectorAll('.info-content h3, .info-content p');

    content.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.parentElement.style.display = text.includes(query) ? 'block' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Cargar sistemas desde JSON
    fetch('sistemas.json')
        .then(response => response.json())
        .then(data => {
            const sistemasList = document.getElementById('sistemas-list');
            data.sistemas.forEach(sistema => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" onclick="loadSistema('${sistema.nombre}')">${sistema.nombre}</a>`;
                sistemasList.appendChild(li);
            });
        });
});

// Función para cargar detalle del sistema
function loadSistema(nombre) {
    fetch('sistemas.json')
        .then(response => response.json())
        .then(data => {
            const sistema = data.sistemas.find(s => s.nombre === nombre);
            if (sistema) {
                displaySistemaDetalle(sistema);
            }
        });
}

// Función para mostrar detalle del sistema
function displaySistemaDetalle(sistema) {
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = `
        <section>
            <h1>${sistema.nombre}</h1>
            <img src="${sistema.detalle.imagen}" alt="Pantalla Gráfica del Sistema" style="width: 100%; max-width: 600px;">
            <h2>Detalles del Control</h2>
            <p>${sistema.detalle.descripcion}</p>
            <h2>Puntos de Control</h2>
            <ul>${sistema.detalle.puntos_control.map(p => `<li>${p}</li>`).join('')}</ul>
            <h2>Diagrama de Conexión</h2>
            <ul>${sistema.detalle.diagramas.map(d => `<li><a href="${d}" target="_blank">Diagrama de Conexión</a></li>`).join('')}</ul>
        </section>
    `;
}
