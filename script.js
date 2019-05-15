// Quando si passa con il mouse sulle conversazioni cambia il loro colore di background
$(".messages").mouseenter(function() {
  $(this).css("background", "#e5e4e3");
})
$(".messages").mouseleave(function() {
  $(this).css("background", "white");
});

// Al click sul tasto di invio messaggio, il messaggio compare sullo schermo
$(".fas.fa-play").click(function() {
  // Controllo che l'utente abbia digitato qualcosa prima di cliccare su invio
  if($(".invio_mess input").val() != '') {
    // Clono il contenitore del messaggio dell'utente e rimuovo la classe (.nascosto) in modo da visualizzarlo a video
    var template_utente = $(".contenitore_messaggio_utente.nascosto").clone();
    template_utente.removeClass("nascosto");
    // Leggo il il messaggio che l'utente ha inserito nell'input text e lo salvo nella variabile testo
    var testo = $(".invio_mess input").val();
    // inserisco il testo contenuto nella var testo nel div con classe messaggio_utente (div figlio del
    // div con classe contenitore_messaggio_utente e quindi del clone template_utente)
    template_utente.children(".messaggio_utente").text(testo);
    // Inserisco il clone template_utente nel box-messages
    $(".box-messages").append(template_utente);
    // Resetto l'input text
    $(".invio_mess input").val('');

    // Funzione che ad ogni messaggio inviato dall'utente genera la risposta "ok" dell'interlocutore
    setTimeout(function () {
      // Clono il contenitore del messaggio dell'interlocutore e rimuovo la classe (.nascosto) in modo da visualizzarlo a video
      var template_interlocutore = $(".contenitore_messaggio_interlocutore.nascosto").clone();
      template_interlocutore.removeClass("nascosto");
      // inserisco "ok" nel div con classe messaggio_interlocutore (div figlio del
      // div con classe contenitore_messaggio_interlocutore e quindi del clone template_interlocutore)
      template_interlocutore.children(".messaggio_interlocutore").text("Ok");
      // Inserisco il clone template_interlocutore nel box-messages
      $(".box-messages").append(template_interlocutore);
    }, 1000);
  } // Chiusura if
})
