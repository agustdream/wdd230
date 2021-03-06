// let imagesToLoad = document.querySelectorAll("img[data-src]");

// const loadImages = (image)=>{
//     image.setAttribute("src",image.getAttribute("data-src"));
//     image.onload = () => {
//       image.removeAttribute("data-src");
//   };
// };

// if('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if(item.isIntersecting) {
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     imagesToLoad.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//       loadImages(img);
//     });
//   }

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src')
    };
};

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -200px 0px"
};

const intersectionCallback = (items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
}

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(intersectionCallback, imgOptions);
    
    imagesToLoad.forEach((img) => {
        observer.observe(img)
    });
    
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
  