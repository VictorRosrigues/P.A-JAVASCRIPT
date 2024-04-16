# P.A-JAVASCRIPT

ATIVIDADE - DESAFIO

Criar a tabuada, onde o usuário entre com o valor e ele calcule a tabuada do valor digitado.

--------------------------------------------------------------------------------------

CODIGO NO PORTUGOL:

programa {
  funcao inicio() {

    inteiro numero, resultado, contador

    escreva("Digite o digito para ver a tabuada: ")
    leia(numero)

    contador = 1

    enquanto (contador <= 10) {
        resultado = numero * contador
        escreva(numero, " x ", contador, " = ", resultado, "\n")
        contador = contador + 1
    }
  }
}