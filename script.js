console.log("JavaScript connected successfully!");

// PRODUCT DATA

const products = [
    {
        id: 1,
        name: "Smart Watch",
        category: "electronics",
        price: 999,
        image: "https://m.media-amazon.com/images/I/71XA0QCW5lL.jpg"
    },
    {
        id: 2,
        name: "Airbuds Pro",
        category: "electronics",
        price: 999,
        image: "https://img.us.news.samsung.com/us/wp-content/uploads/2023/08/28102904/galaxy-buds2-pro-le-audio-auracast-featured.png"
    },
    {
        id: 3,
        name: "Running Sneakers",
        category: "fashion",
        price: 999,
        image: "https://img1.junaroad.com/uiproducts/22582175/pri_175_p-1783508894.jpg"
    },
    {
        id: 4,
        name: "Branded T-Shirt",
        category: "fashion",
        price: 599,
        image: "https://blackships.in/cdn/shop/files/WhatsAppImage2025-08-25at10.29.16AM_1.jpg?v=1756101063"
    },
    {
        id: 5,
        name: "Branded Handbag",
        category: "accessories",
        price: 3999,
        image: "https://www.mytheresa.com/image/2310/2612/100/45/P01132887.jpg"
    },
    {
        id: 6,
        name: "Sunglasses",
        category: "accessories",
        price: 399,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        id: 7,
        name: "Smartphone",
        category: "electronics",
        price: 18999,
        image: "https://static.toiimg.com/thumb/resizemode-4,msid-132795548,imgsize-1752507,width-500/132795548.jpg"
    },
    {
        id: 8,
        name: "Diamond Ring",
        category: "accessories",
        price: 1499,
        image: "https://thealchemystudio.co.in/cdn/shop/files/V14_f8ded16f-aa13-430c-97f8-0d3afafdb728.jpg?v=1756973123&width=2048"
    },

   {
    id: 9,
    name: "MacBook",
    category: "electronics",
    price: 1499,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/FH/CG/IX/97646359/apple-macbook-laptop-500x500.jpg"
    },
{
    id: 10,
    name: "Lamp",
    category: "electronics",
    price: 899,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZbULqafLQLaVZK5MOFWohLx0k0TPSKO_d3fRA35sdTbm7f855pFPF2GB&s=10"
},
{
    id: 11,
    name: "Leg Massager",
    category: "electronics",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/61nZhXxIJKL._AC_UF1000,1000_QL80_.jpg"
},
{
    id: 12,
    name: "Dresses",
    category: "fashion",
    price: 3999,
    image: "https://media.istockphoto.com/id/951233816/photo/elegant-lace-dress-on-dummy-in-wedding-fashion-shop.jpg?s=612x612&w=0&k=20&c=bY0o4zuUcNwSID4yVzo7C9OvNGPWnUZIX4tEMBYMKY0="
},
{
    id: 13,
    name: "Makeup Kit",
    category: "fashion",
    price: 999,
    image: "https://images.meesho.com/images/products/989590650/c4nfw_512.webp?width=512"
},
{
    id: 14,
    name: "Earrings",
    category: "accessories",
    price: 999,
    image: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20251121/6QKJ/692026cf88d6d62ff8faa982/shein_gold_shein_women_pearl_crystal_stone_curved_design_stud_earrings.jpg"
},
{
    id: 15,
    name: "Bracelet",
    category: "accessories",
    price: 499,
    image: "https://images.meesho.com/images/products/947174888/bbjbp_512.webp?width=512"
},
{
    id: 16,
    name: "Perfume",
    category: "Fashion",
    price: 1199,
    image: "https://i.pinimg.com/videos/thumbnails/originals/f5/3c/d3/f53cd397557783b7581eccbd23484c34.0000000.jpg"
}

];



 // CART

let cart = [];


// WISHLIST

let wishlist = [];

function toggleWishlist(productId, button) {

    const product = products.find(
        p => p.id === productId
    );

    const existingIndex = wishlist.findIndex(
        item => item.id === productId
    );

    if (existingIndex === -1) {

        wishlist.push(product);

        button.innerHTML = "♥ Added";
        button.classList.add("wishlisted");

    } else {

        wishlist.splice(existingIndex, 1);

        button.innerHTML = "♡ Wishlist";
        button.classList.remove("wishlisted");

    }

    console.log("Wishlist:", wishlist);

}


// DISPLAY PRODUCTS

function displayProducts(productList = products) {

    const container = document.getElementById("productContainer");

    if (!container) {
        console.error("Product container not found!");
        return;
    }

    container.innerHTML = "";

    if (productList.length === 0) {

        container.innerHTML = `
            <div class="no-products">
                No products found.
            </div>
        `;

        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <div class="product-buttons">

                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button
                        class="wishlist-btn"
                        onclick="toggleWishlist(${product.id}, this)"
                    >
                        ♡ Wishlist
                    </button>

                </div>

            </div>
        `;

        container.appendChild(card);

    });

}


// SEARCH AND FILTER

function applyFilters() {

    const searchValue =
        document.getElementById("searchInput").value.toLowerCase();

    const categoryValue =
        document.getElementById("categoryFilter").value;

    const priceValue =
        document.getElementById("priceFilter").value;

    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            product.category.toLowerCase() === categoryValue.toLowerCase();

        const matchesPrice =
            priceValue === "all" ||
            product.price <= Number(priceValue);

        return matchesSearch && matchesCategory && matchesPrice;

    });

    displayProducts(filteredProducts);

}


// ADD TO CART

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    const existingProduct = cart.find(
        item => item.id === productId
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCart();

}


// UPDATE CART

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");

    if (!cartItems || !cartTotal || !cartCount) {
        console.error("Cart elements not found!");
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty!</h3>
                <p>Looks like you haven't added anything yet.</p>
            </div>
        `;

        cartTotal.textContent = "0";
        cartCount.textContent = "0";

        return;
    }

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        count += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                    × ${item.quantity}
                </p>
            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart(${item.id})"
            >
                Remove
            </button>
        `;

        cartItems.appendChild(cartItem);

    });

    cartTotal.textContent = total.toLocaleString("en-IN");
    cartCount.textContent = count;

}


// REMOVE FROM CART

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    updateCart();

}


// OPEN AND CLOSE CART

function toggleCart() {

    const cartSidebar =
        document.getElementById("cartSidebar");

    cartSidebar.classList.toggle("active");

}


// CHECKOUT

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");
        return;

    }

    alert("Thank you for shopping with LittleThing!");

    cart = [];

    updateCart();

    toggleCart();

}


// INITIAL DISPLAY

console.log("Products:", products);

displayProducts(products);

updateCart();
