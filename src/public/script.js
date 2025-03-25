document.getElementById('botonBuscar').addEventListener('click', async () => {
    const textoBuscador = document.getElementById('buscador').value.trim();
    if (!textoBuscador) {
        alert('Por favor ingresa un título de película.');
        return;
    }

    const response = await fetch(`/peliculas/buscar?titulo=${textoBuscador}`);
    const peliculas = await response.json();

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; 
    
    if (peliculas.error) {
        resultadosDiv.innerHTML = `<p>${peliculas.error}</p>`;
        return;
    }

    peliculas.Search.forEach(pelicula => {
        const peliculaElement = document.createElement('div');
        peliculaElement.classList.add('pelicula');
        peliculaElement.innerHTML = `
            <img src="${pelicula.Poster}" alt="${pelicula.Title}">
            <h3>${pelicula.Title}</h3>
            <p>Año: ${pelicula.Year}</p>
        `;
        resultadosDiv.appendChild(peliculaElement);
    });
});
