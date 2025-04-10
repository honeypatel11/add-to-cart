let localArr = JSON.parse(localStorage.getItem("cart")) || [];
let total;


let counterMain = document.getElementById("counter");
let tableContent = document.getElementById("tableContent")
let newQuntity;

 

function updateCartCounters(count) {
    counterMain.innerText = count;
}
function deleteItem(idx) {
    localArr.splice(idx, 1)
    saveCartArray()
    displayItems()
}


function updateQuntity(idx, value) {
    newQuntity = localArr[idx].quantity += value;

    if (newQuntity <= 0) {
        deleteItem(idx)
    } else {
        localArr[idx].quantity = newQuntity;
        saveCartArray()
    }
    displayItems()
}



function displayItems() {
     total = 0;
    updateCartCounters(localArr.length);
    tableContent.innerHTML = ''
    localArr.forEach((data, idx) => {
        console.log(data);
        
        let subTotal = data.quantity * data.price;
       total = total + subTotal;
        tableContent.innerHTML += `
        <tr>
        <td class="product-thumbnail">
        <a href="product-simple.html">
        <img src="${data.image}" width="100" alt="Ring">
        </a>
        </td>
        <td class="product-name">
        <div class="product-name-section">
        <p>${data.name}</p>
        </div>
        </td>
        <td><span class="amount">$${data.price}</span></td>
        <td>
        <div class="input-group">
        <button class="quantity-minus" onclick = "updateQuntity(${idx},-1)">-</button>
        <input type="" class="form-control" min="1" max="10" value="${data.quantity}">
        <button class="quantity-plus" onclick = "updateQuntity(${idx},1)">+</button>
        </div>
        </td>
        <td><span class="amount">$${subTotal}</span></td>
        <td><a href="#" class="product-remove" onclick="deleteItem(${idx})"><i class="fas fa-times"></i></a></td>
        </tr>
        `
    })

    document.getElementById("total").innerHTML = "";
    document.getElementById("total").innerHTML += `
    
        <h5 class="card-title">Total :-</h5>
            <input type="" class="" id="totalamount">
            <p class="card-text">Thank You.</p>
           
    `
    document.getElementById("totalamount").value = total;

}


displayItems()
updateCartCounters(localArr.length);
// function clearAll() {
//     localStorage.removeItem("cart")
//     location.reload();
// }
function saveCartArray() {
    localStorage.setItem("cart", JSON.stringify(localArr));
}
