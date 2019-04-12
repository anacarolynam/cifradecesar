
function cifrar(texto) {
    //Vetor do alfabeto
    var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    //variavél pra guardar o texto codificado
    var cifra = "";

    //Inicializaçao da variavel
    var texto = document.getElementById('textocifra').value;
    var chave = document.getElementById('chavecifra').value;
    var ch = parseInt(chave);

    for (var i = 0; i <= texto.length; i++){
        if (texto[i] == ' ') {
        cifra += ' '
        
        }else{
            for (var j = 0; j <= alfabeto.length; j++){
                if(texto[i] == alfabeto[i]){
                cifra += alfabeto[(j + ch)];
                }
            }
        }
    }
    document.getElementById("criptografia").value = cifra;
}


function decifrar(texto) {
    //Vetor do alfabeto
    var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    //variavél pra guardar o texto codificado
    var cifra = " ";

    //Inicializaçao da variavel
    
    var texto = document.getElementById('textocifra');
    var chave = document.getElementById('chavecifra');
    var ch = parseInt(chave);

    for (var i = 0; i <= texto.length; i++){
        if (texto[i] == ' ') {
        cifra += ' '
        
        }else{
            for (var j = 0; j <= alfabeto.length; j++){
                if(texto[i] == alfabeto[i]){
                cifra += alfabeto[(j + ch)];
                }
            }
        }
    }
    document.getElementById("descriptografia").value = cifra;
}






