
// Codigo JS para eliminar estudiante

// 1. Función para cargar estudiantes y acceder a los estuidantes guardados en el localStorage.
function cargarEstudiantes() {
    let datosGuardados = localStorage.getItem("students");

    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    } else {
        return { "listaEstudiantes": [] };
    }
}

// 2. Guardar estudiantes en el local Storage despues de eliminar un estudiante. 
function guardarEstudiantes(obj) {
    localStorage.setItem("students", JSON.stringify(obj));
}

// 3. Función para eliminar estudiante por ID
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



























