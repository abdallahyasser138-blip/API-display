const productsDiv = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      productsDiv.innerHTML += `
                <div class="product">
                    <img src="${product.image}">
                    <h2>${product.title}</h2>
                    <p>$${product.price}</p>
                </div>
            `;
    });
  });
