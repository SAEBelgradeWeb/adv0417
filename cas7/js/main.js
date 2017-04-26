
//var meni = ['Home', 'About', 'Contact', 'Shop'];

//document.getElementById('naslov').innerText = meni;

// 1. inkrement je i++ i to uvecava varijablu za 1
// pored toga mozemo da uvecavamo i za bilo koji drugi broj
//pa se to pise i += 5
// a = a + 10



for(var i = 1; i < 111; i++){
  var el = document.createElement('p');
  var node = document.createTextNode('Hello from paragraph no ' + i );
  el.appendChild(node)
 // document.body.appendChild(el)
}
//var i = 0;
// while(i < 111) {
//   i++;
// }

// for(var i = 2; i <= 100; i+=2) {
//   document.write(i + "<br>")
// }

// var meni = ['Home', 'About', 'Contact', 'Shop', 'Blog', 'Privacy'];
//
// document.write('<ul>')
// for(var i = 0; i < meni.length; i++) {
//   document.write("<li>" + meni[i] + "</li>")
// }
// document.write('</ul>')



var devojke = ['Jelena', 'Milica', 'Zorana', 'Ema', 'Ela', 'Eta'];

document.write('<ul>');

for(var i = 0; i < devojke.length; i++) {
  if(devojke[i] == "Zorana" || devojke[i] == "Ela") {
    document.write('<li><strike>' + devojke[i] + "</strike></li>");
  } else {
    document.write('<li>' + devojke[i] + "</li>");
  }

}




document.write('</ul>');











