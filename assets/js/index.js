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
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/2-1.jpg",
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
        id: 6,
        name: "Women's Platinum Ring",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/4-1.jpg",
        price: 230.00

    },
    {
        id: 7,
        name: "Women's Platinum Ring",
        image: "https://d-themes.com/html/riode/images/demos/demo-diamart/products/1-1.jpg",
        price: 230.00

    },


]
function addToCart(productid) {
    console.log(productid)

};
let productElement = document.getElementById("product");
products.forEach((product, idx) => {
    productElement.innerHTML += `
     <div class="col-md-4 mb-4">
                        <div class="product-card text-center shadow-sm">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid product-image mb-3">
                            <h5 class="text-dark fw-bold">${product.name}</h5>
                            <p class="text-danger fw-bold">$${product.price}</p>
                            <button class="btn btn-success" onclick="addToCart(${product.id})">Add To Cart</button>
                        </div>
                    </div>
            `
})




