 var ime = prompt("Kako se zoves?");
// alert("Zdravo " + ime + ", dobar dan!");
var odgovor = confirm(ime + ", da li zelis da se druzimo?");
if(odgovor == true){
  document.getElementById("slika").src = "http://www.clipartkid.com/images/479/smile-be-happy-5Z6StL-clipart.jpg";
  document.body.style.backgroundColor = "green";
document.getElementById("naslov").innerHTML = "Cas jos <em>malo</em> gotov!";
}