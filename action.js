function showAvisos(){
    var content ="";

    for(var i=0; i<avisos.length; i++){

        content+= "<div class='item'>";
        content+= "<h5>Fecha</h5>" + avisos[i].date;
        content+= "<h5>Mensaje</h5>" + avisos[i].message;
        content+= "<br>";
        content+= "<img class='pic' src='img/" + avisos[i].photo + "'>";
        content+= "<div>";
        content+= "<button type='button' class='btn btn-primary botonc'>Comentar</button>";
        content+= "</div>";
        content+= "</div>"
    }
    document.getElementById("result").innerHTML=content;
}

function agregar(){
    var date = document.getElementById("date").value
    var message = document.getElementById("message").value
      
  
    var addAviso ={date:date,message:message} 
    console.log(addAviso)
    avisos.push(addAviso)
    showAvisos()
  }

  