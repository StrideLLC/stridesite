export const scrollScript = {
    dangerouslySetInnerHTML: {
        __html: `
          window.addEventListener('scroll', function() {
            const red = 20;
            const green = 0;
            const blue = 35;
            const section1 = document.querySelector('.first-section');
            const y = 1 + (window.scrollY || window.pageYOffset) / 1000;
            const [r, g, b] = [red*y, green*y, blue*y].map(Math.round);
            section1.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
          });
        `,
      }
}