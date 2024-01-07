const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// https://regex101.com/
// Matches todo lo que no sea [a-zA-Z0-9_] 
const regex = /[^a-zA-Z0-9]/gm;

const formatter = (string)=>{
    const justCharacters = string.replace(regex,"");
    return justCharacters.toLowerCase();
    
};


const palindromeChecker= (formattedString)=>{
    for(let i = 0, j=formattedString.length-1 ; i<Math.round(formattedString.length/2); i++, j--){
        console.log(formattedString[i], formattedString[j]);
        if(formattedString[i]===formattedString[j]){
            if(i==Math.round(formattedString.length/2)-1){
                return true;
            }
            continue;
        } else {
            return false;
        }
        
    }
}






checkBtn.addEventListener("click", (event)=>{
    // si no uso esto cada vez que uso el boton se actualiza la página y se borra el contenido.
    event.preventDefault();
    // para que no se acumulen los resultados
    result.innerHTML="";
    // obtengo el input
    const input = textInput.value;

    // Como las cadenas vacias son falsy puedo usar directamente el input para comprobar si esta vacía
    // (cuando no pones nada en un input es una "" y resulta ser falsy)
    if(input){

        // lo formateo con la funcion que he creado
        const inputFormatted = formatter(input);
        // Compruebo si es palindromo y actuo en consecuencia
        const isPalindrome = palindromeChecker(inputFormatted);
        let textResult;
        if(isPalindrome){
            textResult = `<p><strong>${input}</strong> is a palindrome</p>`;
        } else {
            textResult = `<p><strong>${input}</strong> is not a palindrome</p>`;
        }
        result.innerHTML=textResult;
    } else {
        alert("Please input a value");
    }


});