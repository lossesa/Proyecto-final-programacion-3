
// Codigo JS para listar estudiantes 

// 1. Diccionario de carreras para mostrar el nombre de la carrera en la tabla.
const carrerasDict = {
    1: "Ingeniería de Sistemas",
    2: "Administración de empresas",
    3: "Contaduría",
    4: "Psicología",
    5: "Medicina",
    6: "Enfermería",
    7: "Ingeniería Industrial",
    8: "Ingeniería Civil"
};


// 2. Funcion para cargar estudiantes
function cargarEstudiantes() {
    let datosGuardados = localStorage.getItem("students");

    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    } else {
        return { "listaEstudiantes": [] };
    }
}

// 3. Función para listar los estudiantes en tabla
function mostrarEstudiantes() {
    const tabla = document.querySelector("#tabla-estudiantes tbody");
    tabla.innerHTML = ""; 

    const datos = cargarEstudiantes();

    datos.listaEstudiantes.forEach((est, index) => {
        let fila = document.createElement("tr");

        // Obtener el nombre de la carrera por medio del ID
        const nombreCarrera = carrerasDict[est.carrera] || "Carrera desconocida";

        fila.innerHTML = `
            <td>${index}</td>
            <td>${est.nombre}</td>
            <td>${est.apellido}</td>
            <td>${est.edad}</td>
            <td>${nombreCarrera}</td>
            <td>${est.estrato}</td>
        `;

        tabla.appendChild(fila);
    });
}
mostrarEstudiantes();
