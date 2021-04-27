 // Smooth Scrolling
 $('.btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        5000
      ); //how slow u want it to move
    }
  });