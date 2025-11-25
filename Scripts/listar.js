
// Codigo JS para listar estudiantes 
function cargarEstudiantes() {
    let datosGuardados = localStorage.getItem("students");

    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    } else {
        return { "listaEstudiantes": [] };
    }
}

// 2. Función para listar los estudiantes en tabla
function mostrarEstudiantes() {
    const tabla = document.querySelector("#tabla-estudiantes tbody");
    tabla.innerHTML = ""; 

    const datos = cargarEstudiantes();

    datos.listaEstudiantes.forEach((est, index) => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${index}</td>
            <td>${est.nombre}</td>
            <td>${est.apellido}</td>
            <td>${est.edad}</td>
            <td>${est.carrera}</td>
            <td>${est.estrato}</td>
        `;

        tabla.appendChild(fila);
    });
}

mostrarEstudiantes();
