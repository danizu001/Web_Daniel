let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Python");
		habilidades[1].classList.add("R");
        habilidades[2].classList.add("Git");
        habilidades[3].classList.add("SQL");
        habilidades[4].classList.add("Domo");
        habilidades[5].classList.add("Responsabilidad");
        habilidades[6].classList.add("Innovacion");
        habilidades[7].classList.add("Ingles");
        habilidades[8].classList.add("Trabajo");
        habilidades[9].classList.add("Comunicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 