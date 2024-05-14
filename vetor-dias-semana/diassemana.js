function executar(){
    var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

    for (i = 0; i < semana.length; i++) {
        console.log(semana[i]);
        document.getElementById("resultado").innerHTML = semana;
    }
    

}


