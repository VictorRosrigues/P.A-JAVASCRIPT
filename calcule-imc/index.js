function calcular() {

/* Definindo as variais, sendo as três primeiras "name", "altura" e "peso", são entradas definidas no HTML atrás de Id com o mesmo nome;
   A variavel "imc" é o recebe o processamento das informações fornecedas pelo usuario;
   A variavel "imcFormatado" transforma o resultado do calculo, em um número real com somente duas cadas após a virgula.
*/
var name = document.getElementById("name").value;
var altura = document.getElementById("altura").value;
var peso = document.getElementById("peso").value;

var imc = peso/(altura**2);
var imcFormatado = parseFloat(imc.toFixed(2));

/* 
    if - se | else = senao
    Estrutura de condição, caso seja verdadeiro ele executa uma ação,
    caso contrario executa outra, e vai percorrendo o codigo até que encontre
    a ação verdadeira.
*/
if (imc <18.5) {
    document.getElementById("executar").innerText = name + " Seu IMC é de " + imcFormatado + " e isso é representado como: Magreza";
}

else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById("executar").innerText =  name + " Seu IMC é de " + imcFormatado + " e isso é representado como: Normal";
}

else if (imc >= 25.0 && imc <= 29.9) {
    document.getElementById("executar").innerText =  name + " Seu IMC é de " + imcFormatado + " e isso é representado como: Sobrepeso";
}

else if (imc >= 30.0 && imc <= 39.9) {
    document.getElementById("executar").innerText =  name + " Seu IMC é de " + imcFormatado + " e isso é representado como: Obesidade";
}

else if (imc >= 40.0) {
    document.getElementById("executar").innerText =  name + " Seu IMC é de " + imcFormatado + " e isso é representado como: Obesidade Grave";
}

}