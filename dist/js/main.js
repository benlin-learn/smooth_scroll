// option 2
// $('.navbar a').on('click', function (e) {
//   // console.log(this);
//   console.log(this.hash);
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     console.log($(hash).offset().top);
//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
// });

// option 3 - window.scroll
const links = document.querySelectorAll('.navbar a');
links.forEach((link) => {
  link.addEventListener('click', function (e) {
    const el = this.hash;
    e.preventDefault();
    // console.log(
    //   window.pageYOffset +
    //     document.querySelector(el).getBoundingClientRect().top
    // );
    window.scroll({
      top:
        window.pageYOffset +
        document.querySelector(el).getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth'
    });
  });
});
