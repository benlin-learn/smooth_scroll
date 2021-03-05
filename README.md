## Three ways smooth scroll

1. css

```css
scroll-behavior: smooth;
```

2. jQuery

```javascript
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
```

3. js - window.scroll

```javascript
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
```

#### Reference

[lightweight JS script](https://github.com/cferdinandi/smooth-scroll) (Archived)

###### 2018/8

[practical css scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/)

###### 2020/3

[How to animate scrolling to anchor links with one line of CSS](https://gomakethings.com/how-to-animate-scrolling-to-anchor-links-with-one-line-of-css/)

[How to prevent anchor links from scrolling behind a sticky header with one line of CSS](https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/)

###### window.scroll

[smoothscroll from iamdustan](http://iamdustan.com/smoothscroll/)
