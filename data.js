function validar(){
    var id = document.getElementById("idEv").value;
    var name = document.getElementById("nameEv").value;
    var responsable = document.getElementById("nameRe").value;
    var valor = document.getElementById("valorTicket").value;
    var numeroTick = document.getElementById("numberTicket").value;
    var telefono = document.getElementById("phoneCon").value;
    var correo = document.getElementById("mailCon").value;

    //por aca hice todo lo basico de validacion, como que no esten vacios, que solo sean numericos y que sea un email valido

    if (isNaN(id || valor || telefono)){
        alert("Rellene los campos correctamente");
        return false;
    }
    if (!isNaN(responsable)){
        alert("Rellene los campos correctamente");
        return false;
    }
    if (id == length || name == length || responsable == length || valor == length || numeroTick == length || telefono == length || correo == length){
        alert("Rellene todos los campos");
        return false;
    }
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(correo) ){
        alert("Error: La dirección de correo " + correo + " no es valida.");
        return false;
    }

    //aqui cree los objetos 
    var evento = {
        id_evento: id,
        name_evento: name,
        name_responsable: responsable,
        valor_ticket: valor,
        cantidad_ticket: numeroTick,
        numero_telefono: telefono,
        email: correo
    }

    //aqui los parse con json y los mande al localstorage... tambien les hice el stringify

    let ev =  JSON.parse(localStorage.getItem("registro"))  || [] ;

    ev.push(evento);
        let rEvento = JSON.stringify(ev);
        localStorage.setItem("registro", rEvento)

    //aqui idee como enviar el contenido del localstorage a la consola    
    if(valor>1000){
        let barato =  JSON.parse(localStorage.getItem("ticketEconomico"))  || [] ;

        barato.push(evento);
            let total = JSON.stringify(barato);
            localStorage.setItem("ticketEconomico", total)
    }

    console.log(localStorage);
    return false;


}

//aqui cree una nueva funcion para añadirle el iva al valor de los tickets en una nueva llave, lo puse con el id para identificarlos
function iva(){
    var valor = document.getElementById("valorTicket").value;
    var id = document.getElementById("idEv").value;

    var precioIva = {
        id_evento: id,
        valor_total: valor*0.16
    }

    let precio =  JSON.parse(localStorage.getItem("valorTotal"))  || [] ;
    precio.push(precioIva);
    let rPrecio = JSON.stringify(precio);
    localStorage.setItem("valorTotal", rPrecio)
}

function search(){
    let economico =  JSON.parse(localStorage.getItem("ticketEconomico"))  || [] ;
    let rPrecio = JSON.stringify(economico);
    localStorage.setItem("ticketBarato", rPrecio)
}