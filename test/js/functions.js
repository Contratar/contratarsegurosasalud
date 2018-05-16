function mostrar(id,id2) {
    var theDetail = document.getElementById(id);
        theDetail.style.display="block";

var theDetail = document.getElementById(id2);
    theDetail.style.display="none";

}

function start(){

  if (typeof localStorage.getItem("estado_cookies_4") === 'undefined' || !localStorage.getItem("estado_cookies_4")) { alert("Establecer estado_cookies en no_aceptadas"); localStorage.setItem("estado_cookies_4", "no_aceptadas"); };

    if (localStorage.getItem("estado_cookies_4") == "no_aceptadas") {

        bloque_cookies.style.display="block";
  }
  else if (localStorage.getItem("estado_cookies_4") == "aceptadas") {

        bloque_cookies.style.display="none";
  }



}

function aceptar_cookies(){
alert("Establecer estado_cookies en aceptadas");
localStorage.setItem("estado_cookies_4", "aceptadas");
bloque_cookies.style.display="none";
}
