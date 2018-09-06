//var randomMovieArray = ['Star Wars', 'Batman', 'spiderman', 'Game of Thrones', 'Lord of the rings', 'Harry Potter', 'Guardians of the Galaxy Vol. 2', 'grease'];
//var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
//var randomMovie = randomMovieArray[randomNumber];
//console.log(randomMovie);


function ajaxGet(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        //console.log(callback);
        // Llamada ala función callback pasándole la respuesta
        console.log(JSON.parse(req.response).results);
        // Transformación de formato JSON a JavaScript
        var movie = JSON.parse(req.response).Search;
        console.log(movie);
        // Extracción de información del objeto respuesta
        var movieContainer = document.getElementById("movies");
        var templateUno ="";
        movieContainer.innerHTML = "";
        /*var temFinal="";
        temFinal.html()="";*/
        for(var i = 0; i<movie.length; i++){ 
            var titulo = movie[i].Title;
            var poster = movie[i].Poster;
            if(poster === "N/A"){
              poster='assets/images/NA4.jpg'
              ;
            }
            /*var peli = document.createElement("p");
            var peliTexto = document.createTextNode(titulo);
            peli.appendChild(peliTexto);
            nombrePeli.appendChild(peli);

            var imagen = document.createElement("img");
            //imagen =  "<img src='poster'>";   
            imagen.setAttribute("src", poster);   
            nombrePeli.appendChild(imagen);*/

            //CREAR TEMPLATE
            var template = `
                          <div class="card-deck col-sm-3 m-2 card contenedor-imagen">
                          <img class="card-img-top imagen-peli" src="${poster}" alt="peliculas">
                          <div class="card-body">
                            <p class="card-text">${titulo}</p>
                          </div>
                          </div>
                          `;
                          
                          templateUno+=template   
          }

          $('#movies').append(templateUno);

            //callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText);
      }
    });
    req.addEventListener("error", function(){
      console.error("Error de red");
    });
    req.send(null);
  }

function search(){
  console.log("Estoy dentro de la funcion search");
  var valueInput = document.getElementById("text-movie").value;
  console.log(valueInput);
  //completar la url con lo queeste en el input
  var url = "http://www.omdbapi.com/?apikey=babe7cf8&s=" + valueInput;
  console.log(url);
  ajaxGet(url,ajaxGet)
}
ajaxGet("http://www.omdbapi.com/?apikey=babe7cf8&s=spiderman");
document.getElementById("search-movie").addEventListener("click", search);
/*function(respuesta) {
  //ajaxGet("http://www.omdbapi.com/?apikey=90359439&s=" + encodeURI(randomMovie), function(respuesta) {    
  console.log(randomMovie)
  
  /*1- var imagen= document.createElement("img"); //creas un elemento de imagen. 
  
  2- imagen.setAttribute("src", "ruta_la_imagen.jpg"); //ahora le acabas de agregar el src de la imagen (la ruta de donde se encuetra). 
  
  3- var bloq=document.getElementById("bloque"); //ahora tomas la referencia al elemento de bloque. 
  
  4-bloq.appendChild(imagen); // y despues insertas la imagen en el elemento de bloque (div). 
  
  }*/