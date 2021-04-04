/*	
    Cifrado y descifrado de Vigenère
    Con el algoritmo de Vigenère en mod 27, cifra el siguiente texto M con la clave K.
    M = El final del verano llegó y tú partirás
    K = Dúo Dinámico
    Entrega en el informe solamente el criptograma en bloques de 5 letras.*/


const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}    

/**
* Definición de caracteres para mod 27
* Definicion de caracteres para mod 29
*/
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charactersEnglish = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charactersAscii = [];

//cambiamos a mayúsculas los caracteres y eliminamos las tildez

const text = removeAccents("El final del verano llegó y tú partirás").toUpperCase().replace(/ /g, "");
const key = removeAccents("Dúo Dinámico").toUpperCase().replace(/ /g, "");



const getVigenere = (array) => {
    let countCharts =  array.length;
    console.log(countCharts);
    let newArray = new Array(new Array());
    console.log(newArray);
}


//getVigenere(characters);
/**
 * en esta parte del algoritmo lo que hacemos es que igualamos la longuitud de la clave con la del texto a cifrar
 */
const getTotalKeyChars = (text, key) =>{
    let resp = "";
    let countText = text.length;
    let countKey = key.length;


    fullKey = "";
    recuersiveKey = Math.ceil(countText / countKey);
    for(var num=0; num<recuersiveKey; num++)
    {
        fullKey = fullKey + key ;  
    }
    return fullKey
}

/**
 * En este algoritmo lo que hacemos es que emparejamos los textos con su respectivo caracter de la clave
 */
const getTextByChar = (text, key) =>
{
    let matriz = new Array();
    partialKey = getTotalKeyChars(text, key);
    let countText = text.length;
    for(var k = 0; k< countText; k++)
    {
        matriz.push([text[k], partialKey[k]]);
        
    }
    return matriz;
}

/**
 * 
 * @param {Cre} chars listado de caracteres
 *  Creamos la matriz del vigenere 
 */
const makeVigenereTable = (chars) => {
    countChars = chars.length;
    copychars = Object.assign([] , chars);
    table = new Map();
    for(var k = 0; k < countChars ; k++)
    {
        let lineArray = new Array();

        for(var i = 0; i < countChars ; i++)
        {
            lineArray.push(copychars[i]);
        }
        
        table.set(chars[k],lineArray);

        unsetChart =  copychars[0];
        copychars.shift(1) ;
        copychars.push(unsetChart);
    }
    return table;
    
}



toCipherMatrix = getTextByChar(text, key);
tableVigenere = makeVigenereTable(characters);

const cipher = (matrix, tableVigenere, chars) => {
    //console.log(matriz, tableVigenere);
   
    cipheredString = "";
    spaces = 5;
    count = 1;
    for(const element of matrix)
    {
       
        column = tableVigenere.get(element[0])
        //console.log(column);

        const found = chars.findIndex(val => val == element[1]);
       
        if(count < 6)
        {
            cipheredString = cipheredString + column[found];
            count++;

        }
        else
        {
            cipheredString =  cipheredString  +" "+ column[found];
            count =1 ;
        }
        
       
    }
    console.log(cipheredString);

}


cipher(toCipherMatrix, tableVigenere, characters);


