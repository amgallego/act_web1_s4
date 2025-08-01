
const saludo = function(nombre){
    let vacio;
    if(nombre === vacio){
        return "Hola invitado"
    }else{
        return `¡Hola, ${nombre}!`
    }
};
console.log (saludo())