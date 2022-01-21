const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//1

//  const galleryListEl = document.querySelector("ul");

//  const elements = images.map(image => {
  
//   const galleryItemEl = document.createElement("li");
//   galleryItemEl.classList.add("img-item");

//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.src = image.url;
//   galleryImgEl.alt = image.alt;

//   galleryItemEl.appendChild(galleryImgEl);

//   return galleryItemEl;

// });

// galleryListEl.append(...elements);


//2

// const galleryListEl = document.querySelector("ul");
// const makeGallaryImg = galleryImg =>{
//   return galleryImg.map(image => {
  
//   const galleryItemEl = document.createElement("li");
//   galleryItemEl.classList.add("img-item");

//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.src = image.url;
//     galleryImgEl.alt = image.alt;
//     galleryItemEl.appendChild(galleryImgEl);
//     console.log(galleryItemEl);
//   return galleryItemEl;

// });

// }

// const elements = makeGallaryImg(images);
// galleryListEl.append(...elements);


//3
const galleryListEl = document.querySelector("ul");
const element = images
  .map(function ({ url, alt }) {
    return `<li><img src = '${url}' alt = '${alt}' width="320"></li>`;
  })
  .join("");
galleryListEl.insertAdjacentHTML("afterbegin", element);

document.body.style.margin = '0px';


galleryListEl.style.cssText = `display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  `;


