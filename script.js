// Quando si passa con il mouse sulle conversazioni cambia il loro colore di background
$(".messages").mouseenter(function() {
  $(this).css("background", "#e5e4e3");
})
$(".messages").mouseleave(function() {
  $(this).css("background", "white");
});

// Al click sul tasto di invio messaggio, il messaggio compare sullo schermo
$(".fas.fa-play").click(function() {
  if($(".invio_mess input").val() != '') {
    var template = $(".contenitore_messaggio.nascosto").clone();
    template.removeClass("nascosto");
    var testo = $(".invio_mess input").val();
    $(".invio_mess input").val('')
    template.children(".messaggio_utente").text(testo)
    $(".box-messages").append(template);
  }
})
