
// Codigo JS para crear estudiante

// Codigo de repuesto de mockable
// {
//   "carreras": [
//     { "id": 1, "nombre": "Ingeniería de Sistemas" },
//     { "id": 2, "nombre": "Administración de empresas" },
//     { "id": 3, "nombre": "Contaduría" },
//     { "id": 4, "nombre": "Psicología" },
//     { "id": 5, "nombre": "Medicina" },
//     { "id": 6, "nombre": "Enfermeria" },
//     { "id": 7, "nombre": "Ingenieria industrial" },
//     { "id": 8, "nombre": "Ingenieria civil" }
//   ]
// }



// 1. Objeto inicial en donde se van a guardar los estudiantes. 
const estudiante = {"listaEstudiantes": []};

// 2. Convierte el objeto inicial a JSON y se guarda en el localStorage.
function guardarEstudiantes(obj) {
    localStorage.setItem("students", JSON.stringify(obj));
}

// 3. Valida si ya hay estudiantes y los convierte a JSON, si no, devuelve el objeto inicial.
function cargarEstudiantes() {
    let datosGuardados = localStorage.getItem("students");

    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    } else {
        return { "listaEstudiantes": [] };
    }
}


// 4. Obtención del endpoint de las carreras en Mockable.
async function obtenerCarreras() {
    try {
        const respuesta = await fetch('https://demo4673823.mockable.io/carreras ');
        const datos = await respuesta.json();
        cargarCarreras(datos);
    } catch (error) {
        console.log('Error: ', error);
    }
}
obtenerCarreras();


// 5. Recorre el arreglo de carreras y para cada un crea un option en el select con su respectivo value y nombre de la carrera.
function cargarCarreras(datos) {
    let carrera = document.getElementById('carrera-form');

    for (let i = 0; i < datos.carreras.length; i++) {
        let nuevoElemento = document.createElement("option");
        nuevoElemento.value = datos.carreras[i].id;
        nuevoElemento.textContent = datos.carreras[i].nombre;
        carrera.append(nuevoElemento);
    }
}


// 6. Guardar estudiante desde el formulario.
function guardar(){
    let estudiantes = cargarEstudiantes(); 

    let nombre = document.getElementById("nombre-form").value;
    let apellido = document.getElementById("apellidos-form").value;
    let edad = document.getElementById("edad-form").value;
    let carrera = document.getElementById("carrera-form").value;
    let estrato = document.getElementById("estrato-form").value;


    // Evita que se guarden estudiantes con datos incompletos.
     if (nombre === "" || apellido === "" || edad === "" || carrera === "0" || estrato === "") {
        alert("Por favor completa todos los campos.");
        return;
    }
    
    // Crear objeto del estudiante nuevo.
    const nuevoEstudiante = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        carrera: carrera,
        estrato: estrato
    };

    estudiantes.listaEstudiantes.push(nuevoEstudiante);
    guardarEstudiantes(estudiantes);
    alert("Estudiante agregado correctamente!");
    document.getElementById("formulario").reset();
}


// 7. Evento del botón 
document.getElementById("boton-form").addEventListener("click", function(e){
    e.preventDefault();
    guardar();
});




