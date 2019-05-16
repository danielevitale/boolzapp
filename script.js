//-----------------------------FUNZIONI-----------------------------------------

// Funzione che consente di mettere lo scroll della chat in basso consentendo di visualizzare i messaggi appena
// vengono inviati
function scrolldown() {
  var scoll = $(".box-messages")[0];
  scoll.scrollTop += 9999;
}

// Funzione di invio messaggi dell'utente e risposta dell'template_interlocutore
function invio_risposta() {
  if($(".invio_mess input").val() != '') {
    // Clono il contenitore del messaggio dell'utente e rimuovo la classe (.nascosto) in modo da visualizzarlo a video
    var template_utente = $(".contenitore_messaggio_utente.nascosto").clone();
    template_utente.removeClass("nascosto");
    console.log(template_utente);
    // Leggo il il messaggio che l'utente ha inserito nell'input text e lo salvo nella variabile testo
    var testo = $(".invio_mess input").val();
    // inserisco il testo contenuto nella var testo nello span del clone template_utente
    template_utente.find("span").text(testo);
    // Genero la data attuale
    var time = new Date();
    // inserisco l'ora e i minuti attuali nello small del clone template_utente
    template_utente.find("small").text(time.getHours() + ':' + time.getMinutes());
    // Inserisco il clone template_utente nel box-messages
    $(".box-messages").append(template_utente);
    // Resetto l'input text
    $(".invio_mess input").val('');
    scrolldown(); // Per i messaggi dell'utente

    // Funzione che ad ogni messaggio inviato dall'utente genera la risposta "ok" dell'interlocutore
    setTimeout(function () {
      // Clono il contenitore del messaggio dell'interlocutore e rimuovo la classe (.nascosto) in modo da visualizzarlo a video
      var template_interlocutore = $(".contenitore_messaggio_interlocutore.nascosto").clone();
      template_interlocutore.removeClass("nascosto");
      // inserisco il testo contenuto nella var testo nello span del clone template_interlocutore
      template_interlocutore.find("span").text("Ok");
      // Genero la data attuale
      var ora = new Date();
      // inserisco l'ora e i minuti attuali nello small del clone template_interlocutore
      template_interlocutore.find("small").text(ora.getHours() + ':' + ora.getMinutes());
      // Inserisco il clone template_interlocutore nel box-messages
      $(".box-messages").append(template_interlocutore);
      scrolldown(); // Per i messaggi dell'interlocutore
    }, 1000);
  } // Chiusura if
}

//----------------------------FINE FUNZIONI------------------------------------




// Richiamo la funzione scroll per visualizzare la conversazione a partire dagli ultimi messaggi
scrolldown();

// Quando si passa con il mouse sulle conversazioni cambia il loro colore di background
$(".messages").mouseenter(function() {
  $(this).css("background", "#e5e4e3");
})
$(".messages").mouseleave(function() {
  $(this).css("background", "white");
});

// Quando si digita un tasto nell'area di input compare l'icona del messaggio
$(".invio_mess input").keypress(function() {
  $("i.fa-paper-plane").removeClass("nascosto");
  $("i.fa-microphone").addClass("nascosto");
})
// Quando si clicca in un punto diverso dall'area di input e la stessa area di input è vuota, ricompare
// l'icona del microfono
$(".invio_mess input").blur(function() {
  if ($(".invio_mess input").val() === '') {
    $("i.fa-paper-plane").addClass("nascosto");
    $("i.fa-microphone").removeClass("nascosto");
  }
})


// Al click sul tasto di invio messaggio, il messaggio compare sullo schermo e l'interlocutore risponde "Ok"
$(".fa-paper-plane").click(function() {
  invio_risposta();
  // Al click sul tasto di invio messaggio compare l'icona di invio messaggio e scompare l'icona del microfono
  $("i.fa-paper-plane").addClass("nascosto");
  $("i.fa-microphone").removeClass("nascosto");
})

// Al digitare del tasto invio sulla tastiera il messaggio compare sullo schermo e l'interlocutore risponde "Ok"
$(".invio_mess input").keypress(function(event) {
  if (event.which == 13) {
    invio_risposta();
    // Al digitare del tasto invio sulla tastiera compare l'icona di invio messaggio e scompare l'icona del microfono
    $("i.fa-paper-plane").addClass("nascosto");
    $("i.fa-microphone").removeClass("nascosto");
  }
})

// Ricerca delle conversazioni con gli utenti
$("input.ricerca_nome").keyup(function(event) {
  // Nascondo tutte le conversazioni
  $(".messages").hide();
  // Rendo tutto minuscolo
  var carattere_inserito = $("input.ricerca_nome").val().toLowerCase();
  // Per ogni nome verifico se il carattere digitato dall'utente è incluso in esso. In caso positivo mostro
  // la conversazione
  $(".messages h3").each(function() {
    var nome = $(this).text().toLowerCase();
    if (nome.includes(carattere_inserito)) {
      $(this).parent(".testo").parent(".testo_messaggi").parent(".messages").show();
    }
  })
})
