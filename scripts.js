(function($) {

  function insertRandomFaces() {
    var html = '',
        faces = shuffle(['helior', 'jake', 'roger', 'steve', 'tony', 'jose']);

    for (var i=0;i<faces.length;i++) {
      html += '<div class="col s6 m4"><img class="responsive-img" src="/images/face-' + faces[i] + '.png" /></div>';
    }
    $('.faces').html(html);
  }

  // Fisher–Yates shuffle from the Internet.
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  insertRandomFaces();
})(jQuery);
