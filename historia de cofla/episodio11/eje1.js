const materiasHtml = document.querySelector(".materias");

const datos = [
    {
        materia : "Fisica 4",
        nota : 7
    },
    {
        materia : "Matematicas discretas 3",
        nota : 8
    },
    {
        materia : "Calculo 3",
        nota : 9
    },
    {
        materia : "programacion 4",
        nota : 7
    },
    {
        materia : "Bases de datos",
        nota : 9
    },
];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        let dato = datos[id];
        if (dato == undefined){ reject("la materia no se encontro")}
        else {setTimeout(()=>{resolve(dato)},Math.random()*250)}
    })
}

const obtenerInfo = async ()=>{
    let dato = [];
    for (let i = 0; i < datos.length; i++) {
        dato[i] = await obtenerMateria(i);
        let newHTMlCode = `
        <div class="materia">
            <div class="nombre">${dato[i].materia}</div>
            <div class="nota">${dato[i].nota}</div>
        </div>`
        materiasHtml.innerHTML += newHTMlCode;
    };
}
obtenerInfo();