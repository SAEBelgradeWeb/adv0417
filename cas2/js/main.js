// 1. napravi stranicu sa jednim crvenim kvdratom (100 X 100) i napravi u js da te pita koliku visinu zelis da postavis na kvardar i da se zatim ta visina primeni

// var visina = prompt("Koliku visinu zelis?")
// document.getElementById("prvi").style.height = visina + "px";

//2. napraviti da pitanje bude koliko puta da uvecam visinu diva
var kolicnik = prompt("Koliku puta zelis da povecas visinu?")
var tr_visina = document.getElementById("prvi").style.height;
document.getElementById("prvi").style.height = parseInt(tr_visina) * kolicnik + "px"

//3. npraviti da postoje dva kvadrata (zeleni i crveni) i da postoji confirm - kao semafor koji ce da pali zeleni na ok, a crveni na cancel

//Number("200px") // 200 * 2 "px"
// var boja = prompt("Koju boju zelite?");
//
// if(boja == "crvena") {
//   document.body.style.backgroundColor = "red";
// } else if(boja == "zelena") {
//   document.body.style.backgroundColor = "green";
// } else if(boja == "zuta") {
//   document.body.style.backgroundColor = "yellow";
// } else {
//   alert('Ta boja nije definisana');
// }

// if (dan == "ponedeljak") {
//
// } else if (dan == "utorak") {
//
// } else if (dan == "sreda") {
//
// } else {
//
// }

// switch (dan) {
//   case 'ponedeljak':
//     console.log('ponedeljak je')
//     break;
//
//   case 'utorak':
//     console.log('ponedeljak je')
//     break;
//
//   case 'sreda':
//     console.log('ponedeljak je')
//     break;
//
//   case 'cetvrtak':
//     console.log('ponedeljak je')
//     break;
//
//   default:
//     console.log('sve ostalo')
//     break;
// }
// var benzin = 0.1;
// var auto_stanje;
//
// if (benzin > 0) {
//   auto_stanje = "krece se";
// } else {
//   auto_stanje = "ne krece se";
// }
//
// //ternary
// var auto_stanje = (benzin > 0) ? "krece se" : "ne krece se";
//
// var hodam = (lift != "radi") ? "da" : "ne";
//
// var registovan = (sifra == true) ? true : false;
//
// (sifra == true) ? ime="Pera" :  prezime = "Mika";
//
// if ("nikola" == ime) {
//
// }
//
//
//
//
//
