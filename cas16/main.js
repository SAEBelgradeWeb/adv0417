// new Vue({
//   el: "#app",
//   data: {
//     unos: "",
//     poruka: "Cao svima"
//   }
// });


// $('#unos').on('keyup', function (){
//     var tekst = $('#unos').val()
//     $('h1').text(tekst);
// })

//var cars  = ['Mazda', 'Honda', 'Toyota'];
//napraviListu();

// $('button').on('click', function (){
//     var vrednost = $('#unos').val();
//     cars.push(vrednost)
//     napraviListu();
//     $('#unos').val("");
// })
//
// function napraviListu() {
//   $('li').remove();
//   $.each(cars, function (index, el) {
//     $('<li>', {
//       text: el
//     }).appendTo('ul');
//   })
// }

new Vue({
  el: "#app",
  data: {
    cars: ['Mazda', 'Honda', 'Toyota'],
    unos: "",
    users: [
      { username: "John", avatar: "http://lorempixel.com/200/200/1", tekst: "Bla bla truc tru"},
      { username: "Jane", avatar: "http://lorempixel.com/200/200/2", tekst: "Obozavam da idem na putovanja"},
      { username: "Miroslav", avatar: "http://lorempixel.com/200/200/3", tekst: "Polomicu case od kristala"}

    ]
  },
  methods: {
    dodajCar: function (){
      this.cars.push(this.unos)
      this.unos = ""
    }
  }
});