let str = document.location.href;
let url = new URL(str);
let search_params = new URLSearchParams(url.search);
let id = null;
if (search_params.has("id")) {
  id = search_params.get("id");
  console.log(id);
}

fetch("http://localhost:3000/api/products/" + id)
  .then((response) => {
    let responsejson = response.json();
    return responsejson;
  })

//creation de la boucle pour appel des produits
  .then((product) => { 

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

      //couleurs
      const ColorsChoice = product.colors;
      for (let color of ColorsChoice) {
        document.getElementById("colors").innerHTML += `<option value="${color}">${color}</option>`;
      };
    })
    .catch((error) => {
      alert("produit indisponible",error)
});

//Création du kanapProd avec ses éléments
class kanapProd {
  constructor(id, option, quantity) {
    this.id = id;
    this.option = option;
    this.quantity = quantity;
  }
}






    





  ;
