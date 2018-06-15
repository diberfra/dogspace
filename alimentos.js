function ventas() {
    var alimentos = [
       {
         
         "label": "Nupec",
         "type": "Adulto",
         "medida": "8 kg",
         "ingredient": "Res, maíz, arroz, trigo",
         "price": "$839.00",
         "photo": "activo.jpg",

       },

       {
         
        "label": "Perfect Sense",
        "type": "Adulto MLB",
        "medida": "8 kg",
        "ingredient": "Pollo, trigo, arroz, cerdo",
        "price": "$598.00",
        "photo": "adulto-mlb.jpg",

      },

      {
         
        "label": "Aderezo Ternera",
        "type": "Adulto",
        "medida": "125 ml",
        "ingredient": "Proteína, Grasa cruda, Fibra cruda",
        "price": "$598.00",
        "photo": "aderezo-ternera-250ml.jpg",

      },

      {
         
        "label": "Hill´s Science Diet",
        "type": "Adult Lamb & Rice",
        "medida": "1.5 kg",
        "ingredient": "Cordero, arroz, trigo, sorgo",
        "price": "$1,850.00",
        "photo": "adult-lamb-rice.jpg",

      },

      {
         
        "label": "Eukanuba",
        "type": "Adulto",
        "medida": "8 kg",
        "ingredient": "Pollo, Maíz, Sorgo, Pollo",
        "price": "$839.00",
        "photo": "adult-large-breed.jpg",

      },

      {
        
       "label": "Excellent",
       "type": "Adulto",
       "medida": "1 kg",
       "ingredient": "Pollo, trigo, arroz, cerdo, maíz",
       "price": "$100.00",
       "photo": "adultoexcellent.jpg",

     },

     {
        
       "label": "Tier Holistic",
       "type": "Adulto",
       "medida": "2 kg",
       "ingredient": "Proteína, Grasa, Fibra, Humedad",
       "price": "$273.00",
       "photo": "adult-small-bites.jpg",

     },

     {
        
       "label": "Tier Holistic",
       "type": "Adult",
       "medida": "2 kg",
       "ingredient": "Pollo, arroz, avena,",
       "price": "$238.00",
       "photo": "adulth.jpg",

     },
   
     ];

    var content = "";

    for(var i = 0; i < alimentos.length; i++){

        content += "<div class='dogItem card  justify-content-center align-items-center '>";  
        content += "<img id='dogfoto' src='img/" + alimentos[i].photo + "'>";
        content += "<h3>" + alimentos[i].label + "</h3>"; 
        content += "<p>" + alimentos[i].type + " | " + alimentos[i].medida + "</p>";
        content += "<p class='ingrediente'>" + alimentos[i].ingredient + "</p>";
        content += "<p class='price'>" + alimentos[i].price + "</p>";
        content += "<button class='btn'>" + "Comprar" + "</button>";
        content += "</div>"



        document.getElementById("result").innerHTML = content;

    }
}
