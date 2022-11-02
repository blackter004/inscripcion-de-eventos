function validar(){
    var id = document.getElementById('idEv').value;
    var name = document.getElementById('nameEv').value;
    var responsable = document.getElementById('nameRe').value;
    var valor = document.getElementById('valorTicket').value;
    var numeroTick = document.getElementById('numberTicket').value;
    var telefono = document.getElementById('phoneCon').value;
    var correo = document.getElementById('mailCon').value;

    //por aca hice todo lo basico de validacion, como que no esten vacios, que solo sean numericos y que sea un email valido

    if (isNaN(id || valor || telefono)){
        alert('Rellene los campos correctamente');
        return false;
    }
    if (!isNaN(responsable)){
        alert('Rellene los campos correctamente');
        return false;
    }
    if (id == length || name == length || responsable == length || valor == length || numeroTick == length || telefono == length || correo == length){
        alert('Rellene todos los campos');
        return false;
    }
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(correo) ){
        alert('Error: La dirección de correo ' + correo + ' no es valida.');
        return false;
    }

    // Aqui cree los objetos 
    const event = {
        id_evento: id,
        name_evento: name,
        name_responsable: responsable,
        valor_total: valor*0.16,
        cantidad_ticket: numeroTick,
        numero_telefono: telefono,
        email: correo
    }

    // Aqui los parse con json y los mande al localstorage... tambien les hice el stringify

    let LSevent =  JSON.parse(localStorage.getItem('event'))  || [] ;

    LSevent.push(event);

    localStorage.setItem('event', JSON.stringify(LSevent))

    return false;


}

 function search(){

    // Obtener todos los eventos del local storage
    const events = JSON.parse(localStorage.getItem('event'))

    // Eventos filtrados por total
    const eventsFiltered =  events.filter(function(event){
        return event.valor_total <= 1000;
    });

    // Guardar eventos filtrados en el local storage
    localStorage.setItem('lowTickets', JSON.stringify(eventsFiltered));

    console.log(localStorage.getItem('lowTickets'))
}
