function vetores(){
    let vetorX = []
    let vetorA = []
    let vetorB = []
    for(let i =0;i<5;i++){
        alert('primeiro for')
        vetorA[i] = Number(prompt(`Informe o número ${i+1}`))
         
    }
    for(let i =0;i<5;i++){
        if (vetorA[i] %2 == 0){
            vetorX[i] = vetorA[i]
            alert(`este indice é par${i+1}`)
        }
        else{
            vetorB[i] = vetorA[i]
            
        }
        alert(vetorA,vetorB)
        } 
    
}