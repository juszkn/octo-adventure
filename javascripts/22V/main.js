console.log(data.products);

// let html = '';

// for(let i = 0; i < data.products.length; i++) {
//     html += data.products[i].title;
// }

// document.querySelector('body').innerHTML = html;

const calculateWidth = (rating, width, max) => {
    return rating * width / max;
}

const result = data.products.map(value => {
    const discountPrice = (value.price - (value.price / 100 * value.discountPercentage)).toFixed(2);

    return `<div class="row">
                <div class="col-auto image">
                    <img src="${value.thumbnail}">
                </div>
                <div class="col info">
                    <h3>${value.title}</h3>
                    <div class="rating">
                        <div class="gray-stars">
                            ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                        </div>
                        <div class="yellow-stars" style="width: ${calculateWidth(value.rating, 80, 5)}px">
                            <div class="stars-container">
                                ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                            </div>
                        </div>
                    </div>
                    <div class="description pt-5">${value.description}</div>
                </div>
                <div class="col-auto checkout">
                    <div class="price mb-3">
                        ${value.discountPercentage === 0 ? `
                            <span class="original-price">&dollar;${value.price}</span>
                        ` : `
                            <span class="discount-price">&dollar;${discountPrice}</span>
                            <span class="regular-price">&dollar;${value.price}</span>
                        `}
                    </div>
                    <a id="${value.id}" class="btn btn-warning" onclick="goToCart(event)">Add to Cart</a>
                </div>
            </div>`;
});

document.querySelector('.result').innerHTML = result.join('');

const cartArray = [];

function goToCart(e) {
    const productID = e.target.getAttribute('id');
    console.log(typeof productID);
    
    console.log(data.products[productID - 1])
    if(data.products[productID - 1])
    
    data.products[productID - 1];
    const index = cartArray.findIndex(el => el.id == productID);
    
    console.log(typeof index);
    
    if(index >= 0) {
    //     Padidinam kieki
        cartArray[index].qty += 1;
    } else {
        cartArray.push({
            id: data.products[productID - 1].id,
            category: data.products[productID - 1].category,
            title: data.products[productID - 1].title,
            price: data.products[productID - 1].price + ' €',
            thumbnail: data.products[productID - 1].thumbnail,
            qty: 1
        });
    }
    
    const html = cartArray.map(value => {

        return `
                <div class="row">
                    <div class="col-auto image">
                        <img src="${value.thumbnail}">
                    </div>
                    <div class="col info">
                        <h3>${value.category}</h3>
                    <div class="description pt-5">${value.title}</div>
                </div>
                <div class="col-auto">
                    <button onclick="minusQty()">-</button>
                        <input type="number" value="${value.qty}">
                    <button onclick="plusQty()">+</button>
                </div>
                <div class="col-auto">
                    <div class="price mb-3">
                       <span class="regular-price">&dollar;${value.price}</span>
                    </div>
                </div>    
                <div class="col-auto">
                   <button onclick="removeProduct()">x</button>
                </div>
                `;
    });

    document.querySelector('.cart').innerHTML = html.join('');

    console.log(cartArray[0].preke)
    
    if (cartArray[0].preke) {
        console.log("true");
    } else {
        console.log("false");
    }
}

function minusQty() {
    document.querySelector('.input')
}


// Remove products from cart
// const removeBtn = document.getElementsByClassName('remove-btn');
// for (var i = 0; i < removeBtn.length; i++) {
//     button = removeBtn[i]
//     button.addEventListener('click', removeItem)
// }
// function removeItem (event) {
//     btnClicked = event.target
//     btnClicked.parentElement.parentElement.remove()
//     updateCartPrice()
// }

// function removeProduct(e){
//     ecartArray = cartArray.slice(0)
// }


// const goToCart = (event) = result.getElementById(`${value.id}`);
// console.log(goToCart);


// console.log(event);
// console.log(event.target.attributes)
    
    
    //
    // document.querySelector('.result').style.display = 'none';
    // document.querySelector('.cart').style.display = 'block';



// document.querySelector('.products-main').innerHTML


