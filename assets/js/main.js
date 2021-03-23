// Descrizione
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

//Instanzio Vue
var app = new Vue(
  {
    //collego vue al DOM
    el: '#root',
    data: {
      message: 'La prima volta che scrivo con Vue',
      input: 'Ciao sono un input.',
      vuoto: '',
      img:'assets/img/vue.png'
    }
  }
);
