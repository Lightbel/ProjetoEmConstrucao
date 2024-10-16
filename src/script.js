function loadedDatasFullStack(){

let counts = JSON.parse(localStorage.getItem('colunThree')) || 0;
let colIII = document.getElementsByTagName('td')[3].innerHTML = counts
let colII = document.getElementsByTagName('td')[2].innerHTML = Math.floor((counts) / 100);
let colI = document.getElementsByTagName('td')[1].innerHTML = Math.floor((colII / 10 )); 

}function fullStack(){
    let counts = JSON.parse(localStorage.getItem('colunThree')) || 0;
    counts+=50;  
    localStorage.setItem("colunThree", counts);
    let colIII = document.getElementsByTagName('td')[3].innerHTML = counts;
    let colII = document.getElementsByTagName('td')[2].innerHTML = Math.floor((counts) / 100);
    let colI = document.getElementsByTagName('td')[1].innerHTML = Math.floor((colII / 10 )); 
}
function loadedDatasScienceComputer(){

let counts = JSON.parse(localStorage.getItem('colunThree1')) || 0;
let colIII = document.getElementsByTagName('td')[8].innerHTML = counts
let colII = document.getElementsByTagName('td')[7].innerHTML = Math.floor((counts) / 100);
let colI = document.getElementsByTagName('td')[6].innerHTML = Math.floor((colII / 10 )); 


}function scienceComputer(){
    let counts = JSON.parse(localStorage.getItem('colunThree1')) || 0;
    counts+=50;  
    localStorage.setItem("colunThree1", counts);
    let colIII = document.getElementsByTagName('td')[8].innerHTML = counts;
    let colII = document.getElementsByTagName('td')[7].innerHTML = Math.floor((counts) / 100);
    let colI = document.getElementsByTagName('td')[6].innerHTML = Math.floor((colII / 10 )); 

}
function loadedDatasMeditation(){

    let counts = localStorage.getItem('colunThree2') || 0; 
    let colIII = document.getElementsByTagName('td')[13].textContent = counts;  
    let colII = document.getElementsByTagName('td')[12].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[11].textContent = parseInt((colII / 10 ));  


}function meditation(){

    let counts = JSON.parse(localStorage.getItem('colunThree2')) || 0; 
    counts+=50;
    localStorage.setItem('colunThree2', JSON.stringify(counts))
    let colIII = document.getElementsByTagName('td')[13].textContent = counts;  
    let colII = document.getElementsByTagName('td')[12].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[11].textContent = parseInt((colII / 10 ));  
   
}
function loadedDatasEnglish(){

    let counts = JSON.parse(localStorage.getItem('colunThree3')) || 0;
    let colIII = document.getElementsByTagName('td')[18].textContent = counts;  
    let colII = document.getElementsByTagName('td')[17].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[16].textContent = parseInt((colII / 10 ));  
  

}function english(){

    let counts = JSON.parse(localStorage.getItem('colunThree3')) || 0;
    counts+=50;
    localStorage.setItem('colunThree3', JSON.stringify(counts))
    let colIII = document.getElementsByTagName('td')[18].textContent = counts;  
    let colII = document.getElementsByTagName('td')[17].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[16].textContent = parseInt((colII / 10 ));  
  
}
function loadedDatasFrench(){

    let counts = JSON.parse(localStorage.getItem('colunThree4')) || 0;
    let colIII = document.getElementsByTagName('td')[23].textContent = counts;  
    let colII = document.getElementsByTagName('td')[22].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[21].textContent = parseInt((colII / 10 ));  


}function french(){
    
    let counts = JSON.parse(localStorage.getItem('colunThree4')) || 0;
    counts+=50;
    localStorage.setItem('colunThree4', JSON.stringify(counts))
    let colIII = document.getElementsByTagName('td')[23].textContent = counts;  
    let colII = document.getElementsByTagName('td')[22].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[21].textContent = parseInt((colII / 10 ));  
    
}
function loadedDatasReading(){

    let counts = JSON.parse(localStorage.getItem('colunThree5')) || 0;
    let colIII = document.getElementsByTagName('td')[28].textContent = counts;  
    let colII = document.getElementsByTagName('td')[27].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[26].textContent = parseInt((colII / 10 ));  

}function reading(){

    let counts = JSON.parse(localStorage.getItem('colunThree5')) || 0;
    counts+=50;
    localStorage.setItem('colunThree5', JSON.stringify(counts))
    let colIII = document.getElementsByTagName('td')[28].textContent = counts;  
    let colII = document.getElementsByTagName('td')[27].textContent = parseInt((counts / 100));
    let colI = document.getElementsByTagName('td')[26].textContent = parseInt((colII / 10 ));  

}
window.onload = function(){

    loadedDatasFullStack()
    loadedDatasScienceComputer()
    loadedDatasMeditation()
    loadedDatasEnglish()
    loadedDatasFrench()
    loadedDatasReading()

}
                     
// 1 - Variável 'count' com valor de zero atribuído, deve ser atribuído...
// ...fora da função! 
// var countI = 0;
// var countII = 0;
// var countIII = 0;
// var countIV = 0;
// var countV = 0;
// var countVI = 0;

// 2 - Função para adicionar pontos a* tabela!...
// ... A - "count+=50" - atribui o valor 'mais 50' para a variável!...
// ... B - "let colIII" - pega a "TAG - 'td'" e atribui o valor da variével 'count'...
    
// function AddPointV(){
//     counts.countVI+=50;
//     let colIII = document.getElementsByTagName('td')[28].textContent = counts.countVI;  
//     let colII = document.getElementsByTagName('td')[27].textContent = parseInt((counts.countVI / 100));
//     let colI = document.getElementsByTagName('td')[26].textContent = parseInt((colII / 10 ));  
//     localStorage.setItem("colunThree13", colIII)
//     localStorage.setItem("colunTwo14", colII)
//     localStorage.setItem("colunOne15", colI)
// }