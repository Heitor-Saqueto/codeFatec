function exe0(){
    let contador = 1
    
    let soma = 0
    while (contador <= 10){
        let nomeProduto = (prompt(`Qual o produto ${contador} :`))//opicional
        let precoProduto = Number(prompt(`qual o valor`))
        let soma = soma + precoProduto
        contador++
    }
    let media = (soma / contador)
    alert (`A media dos produtos foi ${media}`)
    }
    function ex1(){
        let a = input()
    }
    
    function exe3(){
        let contador = 1
        let idade 
        let f1 = 0; f2 = 0; f3 = 0; f4 = 0; f5 = 0;
        while(contador <= 8){
            idade = Number(prompt(`Informe a idade ${contador}`))
             if (idade <= 15){
                f1++
             }else if (idade <= 30){
                f2++
             }else if (idade <= 45){
                 f3++
             }else if (idade <= 60 ){
                f4++
             }else{
                 f5++
             }
             contador++
        }
    
    }
    function exe6(){
        let contador = 1
        let valor
        let codigo
        let totalVista = 0
        let totalPrazo = 0
        while (contador <= 15){
            valor = Number(prompt(`informe o valor do produto ${contador}`))
            //converte pra maiusculo 
            codigo = prompt(`Informe V para a vista e P para a prazo`).toUpperCase()
            switch(codigo) {
                case 'V' : totalVista += valor
                    break
                case 'P' : totalPrazo += valor  
                    break
                default: alert(`forma de pagamento invalido`)    
            }
            contador++       
        }
        alert(`Primeira parcela do valor total a prazo ${(totalPrazo/3).toFixed(2)}`)
        alert(`Total a vista ${totalVista.toFixed(2)} total a prazo ${totalPrazo.toFixed(2)} Total geral ${(totalVista + totalVista).toFixed(2)}`)
    }
    
    
    
    function exe23(){
        let opcao
        let salario
        do{
            opcao = Number(prompt(`digite \n1. Novo salario \n2. Ferias \n3. Decimo terceiro \n4. Sair`))
            switch(opcao){
                case 1: let salario = Number(prompt(`informe o salario`))
                        let novoSalario
                        if(salario < 210) {
                            novoSalario = salario + (15*salario)/100
                        }
                        else if (salario <= 600){
                            novoSalario = salario +(10*salario)/100
                        }else{
                            novoSalario = salario (5*salario)/100
                        }
                    break
                case 2: let salario = Number(prompt(`Informe o salario`))
                        alert(`as ferias serao ${salario + salario/ 3}`)
                    break
                case 3: let salario = Number(prompt(`informe o salario`))
                        alert(`Decimo terceiro salario ${salario* meses/12}`)
                    break
                case 4: alert(`O programa sera encerrado`)
                    break
                default: alert(`Opcao invalida`)
            }
    
        }
    
        while (opcao != 4)
        function ex1(){
          let a,b,c,d
            let aux = 0 
            a = Number(prompt ("Digite o valor de A :"))
            b = Number(prompt ("Digite o valor de B :"))
            c = Number(prompt ("Digite o valor de C :"))
            d = Number(prompt ("Digite o valor de D :"))
           for (let cont = 1;cont <= 3;cont++){
               if (a > b ){
                   aux =  a
                   a = b
                   b = aux
               }
               if (b > c){
                   aux  = c
                   b = c
                   b = aux
               }
               if (c > d)
                  aux =  c
                  c = d 
                  d = aux
           }
    
        }
    }
    