/*	
    Cifrado y descifrado de Vigenère
    Con el algoritmo de Vigenère en mod 27, cifra el siguiente texto M con la clave K.
    M = El final del verano llegó y tú partirás
    K = Dúo Dinámico
    Entrega en el informe solamente el criptograma en bloques de 5 letras.*/


const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}    

var allAsciiPrintables = JSON.stringify((Array.from(Array(192 + 32 ).keys()).slice(32).map((item) => {
    
    return String.fromCharCode(item);
})).join(''));
/**
* Definición de caracteres para mod 27
* Definicion de caracteres para mod 29
*/
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charactersEnglish = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const charactersAscii = Array.from(allAsciiPrintables);


//console.log(allAsciiPrintables);
//cambiamos a mayúsculas los caracteres y eliminamos las tildez

const text = removeAccents("El final del verano llegó y tú partirás").toUpperCase().replace(/ /g, "");
const key = removeAccents("Dúo Dinámico").toUpperCase().replace(/ /g, "");



const getVigenere = (array) => {
    let countCharts =  array.length;
    //console.log(countCharts);
    let newArray = new Array(new Array());
    //console.log(newArray);
}


//getVigenere(characters);
/**
 * en esta parte del algoritmo lo que hacemos es que igualamos la longuitud de la clave con la del texto a cifrar
 */
const getTotalKeyChars = (string, password) =>{
    let resp = "";
    let countText = string.length;
    let countKey = password.length;


    fullKey = "";
    recuersiveKey = Math.ceil(countText / countKey);
    for(var num=0; num<recuersiveKey; num++)
    {
        fullKey = fullKey + password ;  
    }
    return fullKey;
}

/**
 * En este algoritmo lo que hacemos es que emparejamos los textos con su respectivo caracter de la clave
 */
const getTextByChar = (string, password) =>
{
    let matriz = new Array();
    partialKey = getTotalKeyChars(string, password);
    //console.log(partialKey);

    let countText = string.length;
    for(var k = 0; k< countText; k++)
    {
        matriz.push([string[k], partialKey[k]]);
        
    }
    return matriz;
}

/**
 * 
 * @param {Cre} chars listado de caracteres
 *  Creamos la matriz del vigenere 
 */
const makeVigenereTable = (chars, typeIndex) => {
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

//Decifra un string cifrado con vigenere
const decipher = (string, password, chars, vigenereTable) => {
    pairs = getTextByChar(string, password);
    
    cipheredString = "";
    for(const element of pairs)
    {
        column = tableVigenere.get(element[1]);
       
        const found = column.findIndex(val => val == element[0]);
        cipheredString = cipheredString + chars[found];
    }
   
    console.log(cipheredString);
 
}

console.log("Respuesta primer punto: ");
first = cipher(toCipherMatrix, tableVigenere, characters);



textoAdecifrar = "HFTLU NLOMNK HMOPWX LPÑQNW OEDZGI DIU".replace(/ /g, "");
password = removeAccents("Dúo Dinámico").toUpperCase().replace(/ /g, "");


decipher(textoAdecifrar, password, characters,  makeVigenereTable(characters));




textoAdecifrar = "¥ÝÕXá ×ÙâÒÇ ÚäÅâÜ ÝÇÖÜæ ÓÅàç´ ÎâÖê± ÓßàÌ× Ù|¤ØÌ ÔÅáÙÉ ØÅàØÒ ½ÚÙ®Á æàZ¿Ï Ù_MÒË ½ÕÍ_ß r·ÐÞË ÓáâÖ² çç´m¶ ÕêµÚÙ TÝÓÔÚ ÄÓÞÔÙ áÔÌÃÄ ÐØÖ´Ï Ü¦ÌÔÃ í±àáT ÏÓºÏÑ ÒÓVÙâ ÐÚp´Ü ×ÓÄÓë °Óàâå ±ÜábÞ áËÞÈÖ ÏÖÖQÙ ÍÐÅÙç Í¶Ûè° lÖâå» ÚOZÝ× ÓÏÖÉÙ ÝÅÛ×Ý ØÉÎ¡© ÄÖç³Á ×Øå»à Öey".replace(/ /g, ""); 
password = removeAccents("Monólogo del replicante Roy Batty").toUpperCase().replace(/ /g, "");
console.log(charactersAscii[32])
//decipher(textoAdecifrar, password, charactersAscii,  makeVigenereTable(charactersAscii));



