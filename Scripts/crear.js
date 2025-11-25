
// Codigo JS para crear estudiante

// 1. Estructura base
const estudiante = {"listaEstudiantes": []};

// 2. Guardar estudiantes
function guardarEstudiantes(obj) {
    localStorage.setItem("students", JSON.stringify(obj));
}

// 3. Cargar estudiantes
function cargarEstudiantes() {
    let datosGuardados = localStorage.getItem("students");

    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    } else {
        return { "listaEstudiantes": [] };
    }
}


// 4. Obtener endpoint de carreras
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://demo4673823.mockable.io/carreras ');
        const datos = await respuesta.json();
        cargarCarreras(datos);
    } catch (error) {
        console.log('Error: ', error);
    }
}
obtenerUsuarios();


// 5. Cargar carreras al select
function cargarCarreras(datos) {
    let carrera = document.getElementById('carrera-form');

    for (let i = 0; i < datos.carreras.length; i++) {
        let nuevoElemento = document.createElement("option");
        nuevoElemento.value = datos.carreras[i].id;
        nuevoElemento.textContent = datos.carreras[i].nombre;
        carrera.append(nuevoElemento);
    }
}


// 5. Funcion para capturar los datos del formulario 
function guardar(){
    // Carga los estudiantes almacenados
    let estudiantes = cargarEstudiantes(); 

    // Captura los datos del form
    let nombre = document.getElementById("nombre-form").value;
    let apellido = document.getElementById("apellidos-form").value;
    let edad = document.getElementById("edad-form").value;
    let carrera = document.getElementById("carrera-form").value;
    let estrato = document.getElementById("estrato-form").value;


    // Validación para que no se guarden estudiantes con datos incompletos en el form
     if (nombre === "" || apellido === "" || edad === "" || carrera === "0" || estrato === "") {
        alert("Por favor completa todos los campos.");
        return;
    }
    
    // Crear objeto del estudiante nuevo
    const nuevoEstudiante = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        carrera: carrera,
        estrato: estrato
    };


    // Agregar estudiante al final de la lista
    estudiantes.listaEstudiantes.push(nuevoEstudiante);

    // Guardar en el localStorage
    guardarEstudiantes(estudiantes);
    alert("Estudiante agregado correctamente!");

    // Para limpiar los datos del form
    document.getElementById("formulario").reset();
}


// 7. Evento del botón
document.getElementById("boton-form").addEventListener("click", function(e){
    e.preventDefault();
    guardar();
});




