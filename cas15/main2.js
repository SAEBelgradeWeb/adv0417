function convertor(number) {
  var roman = "";
  var sifrarnik = {
    "_1000": "M",
    "_900": "CM",
    "_500": "D",
    "_400": "CD",
    "_100": "C",
    "_90": "XC",
    "_50": "L",
    "_40": "XL",
    "_10": "X",
    "_9": "IX",
    "_5": "V",
    "_4": "IV",
    "_1": "I"
  };
  for(var el in sifrarnik) {
    el = parseInt(el.substr(1))
    while (number >= el) {
     roman += sifrarnik["_" + el];
      number -= el;
    }
  }

  return roman;
}

var result = convertor(5);
document.getElementById("number").innerText = result;
