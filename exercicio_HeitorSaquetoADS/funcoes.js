function exe1(){
let nota0 = Number(document.getElementById("nota0").value)//peguei os dados usando id
let nota1 = Number(document.getElementById("nota1").value)
let nota2 = Number(document.getElementById("nota2").value)
let nota3 = Number(document.getElementById("nota3").value)

let media = (nota0+nota1+nota2+nota3) / 4 // calculei a media

// e finalmente as condicionais
if ( media >= 7){
    document.getElementById("resultado").innerHTML = `Sua media foi ${media} bom trabalho`
} else{
    document.getElementById("resultado").innerHTML = `Sua media foi ${media} estude mais e faça seus exercicios!`
 }
}
function exe2(){
  // entrada de dados
  let nota1 = Number(document.getElementById("nota1").value)
  let nota2 = Number(document.getElementById("nota2").value)
  // calcula a média
  let media = (nota1 + nota2) / 2
  // operadores lógicos
  // E -> &&
  let resultado 
  if ((media >=0) && (media < 3)){

      resultado = `Aluno reprovado com média ${media}`

  }
  else if ((media >= 3) && (media < 7)){

      resultado = `Aluno em exame com média ${media}`

  }
  else if ((media >= 7 ) && (media <= 10)){

      resultado = `Aluno aprovado com média ${media}`

  }
  else {

      resultado = `Notas informadas são inválidas`

  }
  // mostra resultado
  document.getElementById("resultado").innerHTML = resultado
}


function exe3(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    if (nro1 < nro2){
        document.getElementById("resultado").innerHTML = `O menor número é ${nro1}`
    }
    else if (nro2 < nro1){
        document.getElementById("resultado").innerHTML = `O menor número é ${nro2}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Não existe número menor, ambos são iguais`
    }
}

function exe4(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)

    // quem é o maior
    if ((nro1 == nro2) && (nro2 == nro3)){
        document.getElementById("resultado").innerHTML = `Todos os números são iguais`
    }
    else if ((nro1 > nro2) && (nro1 > nro3)){
            document.getElementById("resultado").innerHTML = `O maior número é ${nro1}`
    }
    else if (nro2 > nro3){  // nro1 não é maior
              document.getElementById("resultado").innerHTML = `O maior número é ${nro2}`
        }
    else {
            document.getElementById("resultado").innerHTML = `O maior número é ${nro3}`
        }
}

function exe5(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)//chamado id opcao para usar no switch case
    // processamento
    let resultado
    switch(opcao){//e dentro do switch vai a variavel criada na funçao que esta ligada no html exe5
            
        case 1: resultado = (nro1 + nro2) / 2
               break
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break
        case 3: resultado = (nro1 * nro2)
                break
        case 4: if (nro2 != 0){
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function exe6(){
     // entrada de dados
     let nro1 = Number(document.getElementById("nro1").value)
     let nro2 = Number(document.getElementById("nro2").value)
     let opcao = document.getElementById("opcao").value
     // processamento
     let resultado // ele serve daqui para baixo
     switch(opcao){
         case 'a': resultado = `O valor é ${Math.pow(nro1, nro2)}` // exponenciação 
                    break
         case 'b': resultado = `O valor é ${Math.sqrt(nro1)} e ${Math.sqrt(nro2)}`
                   break
         case 'c': resultado = `O valor é ${Math.cbrt(nro1)} e ${Math.cbrt(nro2)}`
                    break
         default: resultado = `Valor inválido`
     }
     document.getElementById("resultado").innerHTML = resultado
}

function exe7(){
     // entrada de dados
     let salario = Number(document.getElementById("salario").value)
     let aumento = 0
    if (salario < 500){
        aumento = (salario * 30) / 100
    }
    if (aumento == 0){
        document.getElementById("resultado").innerHTML = `Não houve aumento`
    }
    else {
        document.getElementById("resultado").innerHTML = `Aumento ${aumento} e salário reajustado: ${salario + aumento}`
    }
}
function exe8(){
    

    let salario = Number(document.getElementById("salario").value)
    let aumento
    let resultado = document.getElementById("resultado")
    if (salario <= 300){
        aumento = salario * 0.35+salario
       
        document.getElementById("resultado").innerText =`Seu salario agora é ${aumento} foi aumentado em 35 % !`
    }else{
        aumento = (salario * 0.15)+salario
        
        document.getElementById("resultado").innerText = `Seu salario agora é ${aumento} foi aumentado em 15 % !`
    }
}
function exe9(){
    let saldoMedio = Number(document.getElementById("saldoMedio").value)
    let credito = 0
    if (saldoMedio >= 400){
        
        credito = saldoMedio * 0.3
        document.getElementById("resultado").innerText =`seu saudo medio e de R$ ${saldoMedio} e voce tera o valor em credito de R$ ${credito}`
    
    }else if(saldoMedio >= 300 && saldoMedio < 400){ 

        credito = saldoMedio * 0.25
        document.getElementById("resultado").innerText =`seu saudo medio e de R$ ${saldoMedio} e voce tera o valor em credito de R$ ${credito}`
    }else if (saldoMedio >= 200 && saldoMedio < 300){ 

        credito = saldoMedio * 0.20
        document.getElementById("resultado").innerText =`seu saudo medio e de R$ ${saldoMedio} e voce tera o valor em credito de R$ ${credito}`
 } else{
     credito = saldoMedio * 0.10
     document.getElementById("resultado").innerText =`seu saudo medio e de R$ ${saldoMedio} e voce tera o valor em credito de R$ ${credito}`

 }
}
function exe10(){ 

    let custoFabrica = Number(document.getElementById("custoFabrica").value)
    let taxas = 0
    if (custoFabrica <= 12000){
        
        taxas = custoFabrica * 0.05
        document.getElementById("resultado").innerText =`voce pagara R$ ${taxas} do distribuidor e pagara R$ ${custoFabrica+taxas}`
    
    }else if (custoFabrica > 12000 && custoFabrica <= 25000){
        
        taxas = custoFabrica * 0.25
        document.getElementById("resultado").innerText =`voce pagara R$ ${taxas} do distribuidor + impostos pagara R$ ${custoFabrica+taxas}`
    } else{
     taxas = custoFabrica * 0.35
     document.getElementById("resultado").innerText =`voce pagara R$ ${taxas} do distribuidor + impostos pagara R$ ${custoFabrica+taxas}`
 }
 
}