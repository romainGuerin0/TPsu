function calcul_moyenne(){
var n1= prompt("donner la 1ère note: ");
var n2= prompt("donner la 2e note: ");
var n3= prompt("donner la 3e note: ");

var somme = Number(n1)+Number(n2)+Number(n3);

document.write("Voici la somme:"+somme+ "<Hr>");
var moyenne= somme/3;

document.write("Voici la moyenne:"+moyenne+"<br>");

if (moyenne<10)
document.write("redoublant");
else
document.write("admis");

}

function test_age(){
    let n1= prompt("donner votre age ");
    if(n1>18){
    document.write("majeur");
    document.bgColor="red";
    }
    else{
    document.write("mineur");
    document.bgColor="green";
}
}

function simple_affichage(){
    var n1= prompt("donner votre prenom");
    document.write("votre prenom est:"+n1);
}

function test_couleur(){
let c = prompt("donner une valeur");
if(c=="rouge"|| c== "ROUGE"){
document.body.style.background="red";
}
else if (c== "bleu" || c== "Bleu"){
    document.body.style.background="blue";
}
else{
    document.write("Couleur non comprise")
}
}