// option2
$('.navbar a').on('click', function (e) {
  // console.log(this);
  console.log(this.hash);
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    console.log($(hash).offset().top);
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
