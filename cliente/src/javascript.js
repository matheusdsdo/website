window.onload = principal;

function principal(){
    var btRegistra = document.getElementById("registrar");
    btRegistra.onclick = verifica();
};


function verifica(){
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("rsenha").value;

    if (s1 == s2){
        console.log("Iguais!");
    } else {
        window.alert("As duas senhas devem ser iguais!");
    };

};