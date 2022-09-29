let str = document.location.href;
let url = new URL(str);
let search_params = new URLSearchParams(url.search); 
let id = null;
if(search_params.has('id')) {
  id = search_params.get('id');
  console.log(id)
}

fetch('http://localhost:3000/api/products/' + id)
  .then((response) => {
   let responsejson = response.json()
   return responsejson
  })
  .then((product) => //creation de la boucle pour appel des produits
  { 

  console.log(product)

  //Images
  let contenerimg = document.querySelector(".item__img");
  contenerimg.innerHTML = `<img src="${product.imageUrl}" alt=${product.altTxt}>`;
  
  //nom
  let productTitle = document.getElementById("title"); 
  productTitle.innerHTML = product.name;

  //prix
  let productPrice = document.getElementById("price"); 
  productPrice.innerHTML = product.price;

  //description
  let productDescription = document.getElementById("description"); 
  productDescription.innerHTML = product.description;

  const productColorsChoice = document.getElementById("colors");
  
  for (let i = 0; i < productColorsChoice.length; i++) {
   const ColorsChoice = document.createElement("option");
   ColorsChoice.value = product.colors[i];
   ColorsChoice.innerHTML = product.colors[i];
   productColorsChoice.appendChild(ColorsChoice);
  }

})