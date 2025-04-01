let products = [
    {
        id: 1,
        name: "Women's Platinum Ring",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/5-1.jpg",
        price: 230.00

    },
    {
        id: 2,
        name: "Artificial Jewellery",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/6-1.jpg",
        price: 170.00

    },
    {
        id: 3,
        name: "Ring Set With Five Crystals",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/7-1.jpg",
        price: 230.00

    },
    {
        id: 4,
        name: "Silver and Diamond Ring",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/8-1.jpg",
        price: 215.00

    },
    {
        id: 5,
        name: "Women's Platinum Ring",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/5-1.jpg",
        price: 230.00

    },
    {
        id: 6,
        name: "Women's Platinum Ring",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/5-1.jpg",
        price: 230.00

    },
    {
        id: 7,
        name: "Women's Platinum Ring",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/5-1.jpg",
        price: 230.00

    },

]
function addToCart(productid) {
    console.log(productid)

};
let productElement = document.getElementById("product");
products.forEach((product, idx) => {
    productElement.innerHTML += `
     <div class="col-3">       
     <div>
     <img src="${product.image}" alt="${product.name}">
     </div>
     <div class="text-body-secondary my-2 fw-bold">
     <h6>${product.name}</h6>
     </div>
     <div class="fw-bold d-flex justify-content-between align-content-center fw-bold">
     <span>$ ${product.price}</span>
     <button class="btn btn-danger" onclick="addToCart(${product.id})">Add To Cart</button>
     </div>
     </div>
            `
})




