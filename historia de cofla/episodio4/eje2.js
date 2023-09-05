// const obtenerInformacion = (materia)=>{
//     materias = {
//         fisica: ["pablo","manu","pedro","martin"],
//         matematicas: ["mariana","manu","dalto","jose","martin"],
//         programacion: ["silvia","manu","pedro","dalto","jose","martin"],
//         gimnacio: ["paolo","pedro","jose","martin"]
//     }
//     if (materias[materia] !== undefined){
//         return [materias[materia],materia,materias];
//     } else {
//         return materias;
//     }
// }

// const mostrarInformacion = (materia)=>{
//     let informacion = obtenerInformacion(materia);

// if (informacion !== false){
//     let profesor = obtenerInformacion(materia)[0][0];
//     alumnos = obtenerInformacion(materia)[0];
//     alumnos.shift();
//     document.write(`la materia es: ${informacion[1]}, y su profesor es: ${profesor},<br>
//     y  los alumnos presentes son : ${alumnos}<br><br>`);
// }
// }

// mostrarInformacion("fisica");
// mostrarInformacion("matematicas");
// mostrarInformacion("programacion");
// mostrarInformacion("gimnacio");

// const cantidadDeClases = (alumno)=>{
//     let informacion = obtenerInformacion();
//     let cantidadTotal = 0;
//     let cursando = [];
//     for (info in informacion){
//         if(informacion[info].includes(alumno)){
//             cantidadTotal++;
//             cursando.push(" "+ info);
//         }
//     }
//     return `${alumno} esta en ${cantidadTotal} clases.<br>
//     y esta cursando: ${cursando}<br><br> `;
// }

// document.write(cantidadDeClases("manu"));

const obtenerMaterias = (materia)=>{
    materias = {
        fisica: ["lopez","manuel","pedro","maria","esteban"],
        matematicas: ["rodriguez","jose","manuel","pedro","maria","esteban"],
        programacion: ["dalto","jose","manuel","maria","esteban"],
        deportes: ["diaz","jose","manuel","pedro","maria","esteban"]
}
    if(materias[materia] !== undefined){
        return  [materias[materia],materia];
    } else {
        return false, materias;
    }
}

const obtenerInformacion = (materia)=>{
    let info = obtenerMaterias(materia);
    if (info !== false){
        let profesor = info[0][0];
        let alumnos = info[0]
        alumnos.shift();
        document.write(`el profesor en ${info[1]} es <b>${profesor}</b>. <br> 
        los alumnos son <b style="color:red" >${alumnos}</b><br><br>`);
    }
}

const totalDeClases = (alumno)=>{
    let info = obtenerMaterias();
    let clasesPresentes = [];
    let cantidadtotal = 0;
    for (inf in info){
        if (info[inf].includes(alumno)){
            cantidadtotal++
            clasesPresentes.push(" "+ inf);
        }
    }
    return `<b style="color:red">${alumno}</b> esta en ${cantidadtotal} de clases:
    <b style="color:green">${clasesPresentes}</b><br><br>`
}

obtenerInformacion("fisica")
obtenerInformacion("matematicas")
obtenerInformacion("programacion")
obtenerInformacion("deportes")

document.write(totalDeClases("jose"));
document.write(totalDeClases("maria"));
document.write(totalDeClases("pedro"));