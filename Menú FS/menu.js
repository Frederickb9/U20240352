const readline = require('readline');

const create = require('./create');
const addStudent = require('./add');
const read = require('./read');
const modify = require('./modify');
const contar = require('./count');
const deleteStudent = require('./delete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('\n---Menu---')
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log('3. Agregar estudiante');
    console.log('4. Modificar estudiante');
    console.log('5. Eliminar estudiante');
    console.log('6. Ver cuantos estudiantes estan inscritos');
    console.log('7. Salir')
}

function manejarMenu(opcion) {
    switch (opcion) {
        case '1':
            create();
            break;
        case '2':
            read();
            break;
        case '3':
            addStudent();
            break;
        case '4':
            modify();
            break;
        case '5':
            deleteStudent();
            break;
        case '6':
            contar();
            break;
        case '7':
            console.log("Saliendo del programa...");
            rl.close();
            return;
        default:
            console.log("Opcion no valida. Intente de nuevo.")
            break;
    }

    setTimeout(promptMenu, 2000);
}

function promptMenu(){
    mostrarMenu();
    rl.question('Seleccione una opcion: ', manejarMenu);
}

promptMenu();
