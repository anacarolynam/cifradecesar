
function cifrar() {
    //Vetor do alfabeto
    var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //variavél pra guardar o texto codificado
    var cifra = "";

    //Inicializaçao da variavel
    var texto2 = document.getElementById('palavra').value;
    var texto = texto2.toUpperCase()
    var chave = document.getElementById('chavecifra').value;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == " ") {
            cifra += " "
        } else {
            let letraCifrada = ""
            let j = 0
            while (letraCifrada != texto[i]) {
                letraCifrada = alfabeto[j]
                j++
            }
            console.log(j);
            
            if (j < alfabeto.length + chave) {
                cifra += alfabeto[j + chave]
            }
            else if (j > alfabeto.length + chave) {
                cifra += alfabeto[j]
            }
            else {
                alert('Erro!')
            }
        }
        console.log(cifra);
        

    }
    document    .getElementById("criptografia").value = cifra;
}


function decifrar() {
    //Vetor do alfabeto
    var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //variavél pra guardar o texto codificado
    var cifra = " ";

    //Inicializaçao da variavel

    var texto = document.getElementById('textocifra');
    var chave = document.getElementById('chavecifra');
    var ch = parseInt(chave);

    for (var i = 0; i <= texto.length; i++) {
        if (texto[i] == ' ') {
            cifra += ' '

        } else {
            for (var j = 0; j <= alfabeto.length; j++) {
                if (texto[i] == alfabeto[i]) {
                    cifra += alfabeto[(j + ch)];
                }
            }
        }
    }
    document.getElementById("descriptografia").value = cifra;
}




