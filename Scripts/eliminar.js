
// Codigo JS para eliminar estudiante

// 1. Cargar estudiantes
function cargarEstudiantes() {
    let datosGuardados = localStorage.getItem("students");

    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    } else {
        return { "listaEstudiantes": [] };
    }
}

// 2. Guardar estudiantes
function guardarEstudiantes(obj) {
    localStorage.setItem("students", JSON.stringify(obj));
}

// 3. Mostrar estudiantes
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



// Función para eliminar estudiante por ID
function eliminarEstudiante() {
    const idInput = document.getElementById("id-estudiante").value.trim();

    if (idInput === "" || isNaN(idInput)) {
        alert("Ingresa un ID válido.");
        return;
    }

    const id = parseInt(idInput);

    let datos = cargarEstudiantes();
    let lista = datos.listaEstudiantes;

    if (id < 0 || id >= lista.length) {
        alert("El ID ingresado no existe.");
        return;
    }

    lista.splice(id, 1);

    guardarEstudiantes(datos);
    alert("Estudiante eliminado correctamente.");
    
    document.getElementById("id-estudiante").value = "";
}



























