

function imeIPrezime() {
  var ime = document.getElementById('ime').value;
  var prezime = document.getElementById('prezime').value;
  document.getElementById('naslov').innerText = ime + " " + prezime;
}

var promeniPozadinu = function(){
  var pozadina = document.getElementById('div').style.backgroundImage;
  if(pozadina == "") {
    document.getElementById('div').style.backgroundImage = "url(http://lorempixel.com/100/100/)"
  } else {
    document.getElementById('div').style.backgroundImage = ""
  }
}

function init(){
  var sadrzaj = document.getElementById('naslov2').innerText

  //alert(sadrzaj);
}

/*setInterval(function(){
  promeniPozadinu()
}, 4000);*/


var sirinaStrane = window.innerWidth;
var smer = "napred";

var mojInterval = setInterval(function(){
  //promeniPozadinu()


  var div = document.getElementById('div');

  if(parseInt(div.style.left) > sirinaStrane - 100) {
    smer = "nazad"
    //clearInterval(mojInterval);
  }

  if(smer == "napred") {
    div.style.left = parseInt(div.style.left) + 2 + "px";
  } else {
    div.style.left = parseInt(div.style.left) - 2 + "px";
  }
  //div.style.top = parseInt(div.style.top) + 2 + "px";
 console.log(div.style.left)
}, 20);




