$('.hits__slider').slick({
  slidesToShow: 4,
  arrows: true,
  nextArrow: '<button class="slick-arrow--next"><svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.03796 9.21999L3.31797 5.49999L7.03796 1.77999L5.85896 0.600986L2.13897 4.32099L0.959965 5.49999L2.13897 6.67899L5.85896 10.399L7.03796 9.21999Z" fill="#888888"/></svg></button>',
  prevArrow: '<button class="slick-arrow--prev"><svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.03796 9.21999L3.31797 5.49999L7.03796 1.77999L5.85896 0.600986L2.13897 4.32099L0.959965 5.49999L2.13897 6.67899L5.85896 10.399L7.03796 9.21999Z" fill="#888888"/></svg></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        // centerMode: true,
        // centerPadding: '20%',
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
})