function tabuada(){

/*  Existem 3 variaveis "number", valor de entrada pelo ususario via HTML,
    "i", contador que inicia com o valor 1
    "resultado" que carrega uma string vazia que será preenchida ao longo do codigo.
*/
var number = document.getElementById("number").value;
var i = 1;
var resultado = "";

/*  Enquanto o contador for igual ou menor que 10 ele ira ficar em loop;
    A cada volta o "i" é adicionada ao "resultado", concatenando a string da multiplicação
    com o resultado do * de "number" por "i". Linha é adilcionada a resultado utilizando o operador +=, 
    que adiciona o valor do lado direito à variável do lado esquerdo.
    Em seguida, i é incrementado em 1, utilizando i++, para que a próxima interação do loop calcule a próxima linha da tabuada.
*/
while (i <= 10) {
    resultado += number + " x " + i + " = " + (number * i) + "\n";
    i++;
}

document.getElementById("mostrar").innerText = resultado;

}