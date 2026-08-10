const contenedor = document.getElementById("contenedor");

function grupo(grupo){
    contenedor.classList.remove("jueves", "viernes", "todos");
    contenedor.classList.add(grupo)
}

function actividad(actividad){
    contenedor.classList.remove("actividad-1");
    contenedor.classList.add(actividad)
}


fetch("apps.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }
        return response.json();
    })
    .then(apps => {
        apps.forEach(app => {
            contenedor.innerHTML += `
            <div class="app-card ${app.grupo} app-${app.id} ${app.actividad.replace(" ", "-")}">
                <img src="${app.icono}" alt="${app.nombreapp}">
                <div class="app-info">
                    <h2>${app.nombreapp}</h2>
                    <p><strong>Descripción:</strong>${app.descripcion}</p>
                    <p><strong>Integrantes:</strong> ${app.integrantes.join(", ")}</p>
                    <p><strong>Actividad:</strong> ${app.actividad} ${app.fecha}</p>
                    <p><a href="${app.url}" target="_blank">Ver proyecto</a></p>
                </div>    
            </div>
        `;
        });
    })
    .catch(error => {
        contenedor.innerHTML = "<p>Error cargando los datos 😢</p>";
        console.error(error);
    });