function mostrar(id,id2) {
    var theDetail = document.getElementById(id);
        theDetail.style.display="block";

var theDetail = document.getElementById(id2);
    theDetail.style.display="none";

}

function start(){

  if (localStorage.getItem("estado_cookies_5") == "aceptadas") {

        bloque_cookies.style.display="none";
  }



}

function aceptar_cookies(){
alert("Establecer estado_cookies en aceptadas");
localStorage.setItem("estado_cookies_5", "aceptadas");
bloque_cookies.style.display="none";
}
