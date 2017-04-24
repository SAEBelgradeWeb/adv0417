

var name = "John Smith";
//staro pisanje
var autmobili = new Array('mazda', 'honda', 'toyota', 2, true);
//novo pisanje
var automobili2 = ['mazda', 'honda', 'toyota', ['ZIKA', 'LAZA ']];

var voce = [];
voce[0] = "Jabuka";
voce[1] = "Kruska";
voce[2] = "Lubenica";
// console.log(voce);
//da izvucemo element pisemo broj indeksa
//console.log(     automobili2[3][1]  );

automobili2[19] = "Yugo";
//console.log(automobili2);
//dodaje elemente na kraj
voce.push('Visnja', 'Tresnja');

//brise poslednji element
voce.pop()

//dodaje elemente na pocetak
voce.unshift('Dinja', 'Mandarina');

//brise prvi element
voce.shift();

voce = ['lubenica', 'dinja', 'mandarina', 'pomorandza'];
//za sve ostalo SPLICE
voce.splice(-1, 0, 'mango', 'kivi');
console.log(voce)

//NAPRAVI ARRAY ['lubenica', 'dinja', 'mandarina', 'pomorandza'];
//1. obrisi dinju
//2. dodaj avokado izmedju mandarine i pomorandze
//3. obirisi lubenicu
//4. zameni avokado sa visnjom

