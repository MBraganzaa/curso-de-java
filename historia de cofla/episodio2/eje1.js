// let free = false;

// const validarcliente = (time)=>{
//     let edad = prompt("que edad tenes?");
//     if (edad >= 18) {
//         if (time >= 2 && time <= 7 && free == false) {
//             alert("podes pasar gratis");
//             free = true; 
//         } else {
//             alert(`son las ${time}:00hs podes pasar pero tenes que pagar la entrada`)
//             } 
//     } else {
//             alert("no podes pasar sos menor")
//     }
// };

// validarcliente(1);
// validarcliente(2);
// validarcliente(4);
// validarcliente(3);
// validarcliente(8);




// const validarcliente = (time)=>{
//     let edad = prompt("cual es tu edad");
//     if (edad >= 18){
//         if(time >= 2 && time <= 7 && free == false){
//             alert("sos la primera persona en pasar despues de las 2 asi que pasas gratis!");
//             free = true;
//         } else {
//             alert("sos mayor, podes pasar");
//         }
//     }
//     else {
//         alert("no podes pasar sos menor de edad");
//     }
// }


// validarcliente(1);
// validarcliente(2);
// validarcliente(4);
// validarcliente(2);


// const validarcliente = (time)=>{
//     let edad = prompt("cual es tu edad");
//     if (edad >= 18){
//         if (time >= 2 && time <= 7){
//             if (time == 2 && free == false){
//                 alert("sos la primera persona en pasar despues de las 2 asique pasas gratis!");
//                 free = true;
//             } else {
//                 alert(`son las ${time}:00hs pasas pero tenes que pagar`);
//             }
//         } if (time < 2){
//             alert(`son las ${time}:00hs espera hasta las 2`);
//         } if (time > 7){
//         alert(`son las ${time}:00hs volve mañana`);
//         } 
//     } else {
//         alert("no podes pasar sos menor de edad");
//     }
// }

// validarcliente(8);
// validarcliente(2);
// validarcliente(3);
// validarcliente(2);
// validarcliente(1);


// const validarcliente = (hora)=>{
//     let edad = prompt("¿que edad tiene?");
//     if (edad >= 18){
//         if(hora >= 2 && hora <=7){
//             if (hora == 2 && free == false){
//                 alert(`felicidades sos la primera persona en entrar despues de las 2, pasas gratis!`);
//                 free = true;
//            }
//             else {
//                 alert(`son las ${hora} y la entrada esta 200$`);
//             }
//         }
//         if (hora <= 1.3 ){
//             alert(`son las ${hora} habre a las 1:30 hs...`);
//             }
//         if (hora >= 6.3 ){
//             alert(`son las ${hora} volve mañana`);
//             }    
//     }
//     else {
//         alert(`no podes pasar, sos menor de edad `)    
//     }
// }


// validarcliente(8);
// validarcliente(2);
// validarcliente(3);
// validarcliente(2);
// validarcliente(1);

// let free = false;

// const validarcliente = (time)=>{
//     let edad = prompt("¿que edad tienes?");
//     if (edad >= 18){
//         if (time >= 1.3 && time < 7){
//             if (time == 2 && free == false){
//                 alert("sos la primera persona en pasar despues de las 2... pasas gratis");
//                 free = true;
//         } else {
//             alert(`son las ${time} y la entrada cuesta 200`);
//         }
//     }
//     if (time < 1.3){
//             alert(`son las ${time} tenes que esperar hasta las 1:30`);
//         }
//     if (time > 7){
//             alert(`son las ${time} el boliche ya cerro, volve mañana.`);
//         } 
//     }
//     else {
//         alert("volve cuando tengas 18 pendejo");
//     }
// }

// validarcliente(1);
// validarcliente(8);
// validarcliente(2);
// validarcliente(3);
// validarcliente(2);

// let free = false;

// const validarcliente = (hora)=>{
//     let edad = prompt("le revisa el dni");
//     if (edad >= 18){
//         if(hora == 2 && free == false){
//             alert("¡Felicidades! sos la primera persona que pasa despues de las 2am, pasas gratis");
//             free = true;
//         }
//         else if (hora >= 1.30 && hora < 7){
//             alert("podes pasar la entrada esta 300$");
//         }
//         else {
//             alert("espera a que abra")
//         }
//     }
//     else {
//         alert("sos menor de edad, no podes pasar.");
//     }
// }

// validarcliente(1);
// validarcliente(2);
// validarcliente(3);
// validarcliente(2);

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Que edad tenes?");
    if (edad >= 18){
        if (time == 2 && free == false){
            alert(`!Felicidades! Sos la primera persona que pasa a las ${time}. !pasas gratis!`);
            free = true;
        } else if (time >= 1.30 && time < 5){
            alert("Podes pasar")
        } else if (time >= 5.01){
            alert("Volve mañana");
        } else {
            alert("Abrimos 1 y 30");
        }
    } else { alert("Sos menor de edad, No podes pasar")}
} 

validarCliente(1);
validarCliente(2);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(6);