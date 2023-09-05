// let materias = {
//         fisica: ["pablo","manu","pedro","martin"],
//         matematicas: ["mariana","manu","dalto","jose","martin"],
//         programacion: ["silvia","manu","pedro","dalto","jose","martin"],
//         gimnasio: ["paolo","pedro","jose","martin"]
// }
// const inscribir = (alumno,materia)=>{
//     personas = materias[materia];
//     if(personas.length >= 21){
//         document.write("lo siento, ya hay mas de 20 alumnos en esta materia, no te puedes inscribir <br><br>");
//     } else {
//         personas.push(alumno)
//         if (materias == "fisica"){
//             materias = {
//                 fisica: personas,
//                 matematicas: materias['matematicas'],
//                 programacion: materias['programacion'],
//                 gimnasio: materias['gimnasio']
//             }
//         }
//         else if (materias == "fisica"){
//             materias = {
//                 fisica: materias['fisica'],
//                 matematicas: personas, 
//                 programacion: materias['programacion'],
//                 gimnasio: materias['gimnasio']
//             }
//         }
//         else if (materias == "fisica"){
//             materias = {
//                 fisica: materias['fisica'],
//                 matematicas: materias['matematicas'],
//                 programacion: personas, 
//                 gimnasio: materias['gimnasio']
//             }
//         }
//         else if (materias == "gimnasio"){
//             materias = {
//                 fisica:  materias['fisica'],
//                 matematicas: materias['matematicas'],
//                 programacion: materias['programacion'],
//                 gimnasio: personas
//             }
//         } document.write("felicidades te as inscrito correctamente"+ `<br><br>`);
//     }
// }
// document.write(materias['fisica']+`<br><br>` );
// inscribir("pedrito","fisica");
// inscribir("marto","fisica");
// inscribir("mia","fisica");
// inscribir("ema","fisica");
// inscribir("pedrito","fisica");
// inscribir("marto","fisica");
// inscribir("mia","fisica");
// inscribir("ema","fisica");
// inscribir("pedrito","fisica");
// inscribir("marto","fisica");
// inscribir("mia","fisica");
// inscribir("ema","fisica");
// inscribir("ema","fisica");
// inscribir("pedrito","fisica");
// inscribir("marto","fisica");
// inscribir("mia","fisica");
// inscribir("ema","fisica");
// inscribir("ema","fisica");
// inscribir("ema","fisica");
// inscribir("ema","fisica");


// document.write(materias['fisica']+`<br><br>`);


let materias = {
    fisica: ["lopez","manuel","pedro","maria","esteban"],
    matematicas: ["rodriguez","jose","manuel","pedro","maria","esteban"],
    programacion: ["dalto","jose","manuel","maria","esteban"],
    deportes: ["diaz","jose","manuel","pedro","maria","esteban"]
};

const inscribir = (alumno,materia)=>{
    let personas = materias[materia];
    personas.shift();
    if(personas.length >= 20){
        document.write(`lo siento <b style="color:blue">${alumno}</b> ya hay mas de 20 alumnos en esta materia,
         <b style="color:red">no es posible inscribirse </b> a ${materia}`);
    } else {
        personas.push(alumno)
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                matematicas: materia['matematicas'],
                programacion: materia['programacion'],
                deportes: materia['deportes']
            };
        }
        else if(materia == "matematicas"){
            materias = {
                fisica: materia['fisica'],
                matematicas: personas,
                programacion: materia['programacion'],
                deportes: materia['deportes']
            };
        }
        else if(materia == "programacion"){
            materias = {
                fisica: materia['fisica'],
                matematicas: materia['matematicas'],
                programacion: personas,
                deportes: materia['deportes']
            };
        }
        else if(materia == "deportes"){
            materias = {
                fisica: materia['fisica'],
                matematicas: materia['matematicas'],
                programacion: materia['programacion'],
                deportes: personas
            };
        } 
        document.write(`felicidades <b style="color:blue">${alumno}</b> 
        <b style="color:green">te inscribiste correctamente</b> a ${materia}`);
    }
}
inscribir("mia","fisica");


