document.getElementById('botonBuscar').addEventListener('click', async () => {
    const textoBuscador = document.getElementById('buscador').value.trim();
    if (!textoBuscador) {
        alert('Por favor ingresa un título de película.');
        return;
    }

    try {
        const response = await fetch(`/peliculas/buscar?titulo=${textoBuscador}`);
        const peliculas = await response.json();

        const responseDB = await fetch('/peliculas/meGusta'); 
         const peliculasDB = await responseDB.json();

        const idsEnBaseDeDatos = [];
        for (let i = 0; i < peliculasDB.length; i++) {
        idsEnBaseDeDatos.push(peliculasDB[i].id_pelicula);
        }

        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = ''; 
        
        if (peliculas.error) {
            resultadosDiv.innerHTML = `<p>${peliculas.error}</p>`;
            return;
        }

        
        peliculas.Search.forEach(pelicula => {
            const peliculaElement = document.createElement('div');
            peliculaElement.classList.add('pelicula');

            const idPelicula = pelicula.imdbID; 
            const leGusta = idsEnBaseDeDatos.includes(idPelicula);

            peliculaElement.innerHTML = `
                <img src="${pelicula.Poster}" alt="${pelicula.Title}">
                <h3>${pelicula.Title}</h3>
                <p>Año: ${pelicula.Year}</p>
               <button class="botonMeGusta " idPeli="${idPelicula}">
                    ${leGusta ? '❤️ Te gusta ❤️' : 'Agregar a me gusta'}
                </button>`;
            resultadosDiv.appendChild(peliculaElement);
        });
        document.querySelectorAll('.botonMeGusta').forEach(boton => {
            boton.addEventListener('click', async (e) => {
                const idPelicula = e.target.getAttribute('idPeli');
                const leGusta = e.target.innerText.includes('Te gusta');

                if (leGusta) {
                    await fetch(`/peliculas/meGusta/${idPelicula}`, { method: 'DELETE' });
                    e.target.innerText = 'Agregar a me gusta';
                } else {
                    await fetch(`/peliculas/meGusta`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id_pelicula: idPelicula })
                    });
                    e.target.innerText = '❤️ Te gusta ❤️';
                }
            });
        });

    } catch (error) {
        console.error('Error al buscar películas:', error);
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const recomendacionesDiv = document.getElementById("recomendaciones");
    const peliculas = [
        "https://www.omdbapi.com/?t=Gladiator&apikey=717322b7",
        "https://www.omdbapi.com/?t=spider+man&apikey=717322b7",
        "https://www.omdbapi.com/?t=batman&apikey=717322b7",
        "https://www.omdbapi.com/?t=iron+man&apikey=717322b7"
    ];

    const cargarPeliculas = async () => {

        for (const url of peliculas) {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.Response === "True") {
                    const img = document.createElement("img");
                    img.src = data.Poster;
                    img.alt = data.Title;
                    img.style.width = "150px";
                    img.style.margin = "10px";
                    img.style.borderRadius = "10px";

                    recomendacionesDiv.appendChild(img);
                }
            } catch (error) {
                console.error("Error al cargar imagenes de recomendaciones s", error);
            }
        }
    };

    cargarPeliculas();
});