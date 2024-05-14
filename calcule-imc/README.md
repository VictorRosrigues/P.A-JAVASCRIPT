# P.A-JAVASCRIPT

ATIVIDADE - DESAFIO

Criar um programa que calcule o IMC. A pessoa entra com o nome, altura e o peso.
Faz o cálculo, e classifique o resultado:
IMC
Menor que 18.5 Magreza
Entre 18.5 e 24.9 Normal
Entre 25.0 e 29.9 Sobrepeso
Entre 30.o e 39.9 Obesidade
Maior que 40.0 Obesidade grave

Formula do IMC
IMC =  Peso / Altura(m)2

--------------------------------------------------------------------------------------

CODIGO NO PORTUGOL:

programa {
  funcao inicio() {

    real imc, altura, peso
    cadeia nome

    escreva("Digite seu Nome: ")
    leia(nome)

    escreva("Digite sua Altura: ")
    leia(altura)

    escreva("Digite seu peso: ")
    leia(peso)

    imc = peso/(altura*altura)

    se (imc < 18.5){
        escreva(nome, " Seu IMC de: ", imc, " Representa: Magreza")
    }

    senao se (imc >= 18.5 e imc <= 24.9){
        escreva(nome, " Seu IMC de: ", imc, " Representa: Normal")
    }

    senao se (imc >= 25.0 e imc <= 29.9){
        escreva(nome, " Seu IMC de: ", imc, " Representa: Sobrepeso")
    }

    senao se (imc >= 30.0 e imc <= 39.9){
        escreva(nome, " Seu IMC de: ", imc, " Representa: Obesidade")
    }

    senao se (imc >= 40.0){
        escreva(nome, " Seu IMC de: ", imc, " Representa: Obesidade Grave")
    }
    
  }
}