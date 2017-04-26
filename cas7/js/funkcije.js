
function nekaFunkcija(ime, prezime){
 //document.write(ime + " " + prezime)l
  return ime + " " + prezime;
}

var nekaFun = function () {

}
var name = "Zika";
var lastname = "Pavlovic";


var fullname = nekaFunkcija(name, lastname);
//document.write(fullname)

// 1. napisi funkciju koja prihvata 3 broja i onda nam vrati zbir ta tri broja, a zatim pozovite tu funkciju i ispisite njen rezultat na strani

function sabiranje(br1, br2, br3) {
  return br1 + br2 + br3;
}
var res = sabiranje(80, 7, 12);
//document.write(res);

//2. napisi funkciju koja prihvata distancu u kilometrima a vraca distancu u miljama, a zatim pozovite tu funkciju i ispisite njen rezultat na strani

function milje(brojKm) {
  return brojKm * 1.6;
}

var rez = milje(100);
console.log(rez)

//3. napisi funkciju kojoj poaljete iznos u dinarima i valutu u koju zelite da konvertujete (usd ili eur) i ona vam vrati iznos u toj valuti, a zatim pozovite tu funkciju i ispisite njen rezultat na strani

function konvertuj(iznos, valuta) {
  var rezultat;

  if(valuta== "eur") {
    rezultat = iznos / 123;
  } else if(valuta == "usd") {
    rezultat = iznos / 111;
  }

  return Math.round(rezultat);
}



document.write(
    konvertuj(10000, "usd")
);

//4. BONUS napisi funkciju koja ce da primi array brojeva i zatim vrati taj array tako sto je svaki element pomnozen sa 2












