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
            if(window.scrollY > 10){
              document.querySelector('.backtotop').style.display = 'block';
            }else{
              document.querySelector('.backtotop').style.display = 'none';
            }
          });
          const appDiv = document.querySelector('.App');
          const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              if (mutation.attributeName === "class") {
                const currentClassValue = appDiv.getAttribute("class");
                if (currentClassValue.includes("blur")) {
                  appDiv.style.filter = "blur(5px)";
                } else {
                  appDiv.style.filter = "none";
                }
              }
            });
          });
          observer.observe(appDiv, {
            attributes: true
          });

          function handleHashChange() {
            const hash = location.hash.replace('#', '')
            const target = document.querySelector('.' + hash)
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          }
          window.onhashchange = handleHashChange;
          
        `,
  },
};
