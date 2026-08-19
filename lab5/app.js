const app = document.getElementById("app");


// HOME PAGE
function homePage() {

    app.innerHTML = `
        <section class="home">

            <button class="arrow left">
                ‹
            </button>

            <div class="product-card">

                <div class="product-image">
                    Product Image
                </div>

                <div class="price">
                    ₹
                </div>

                <div class="stock">
                    In Stock
                </div>

                <button class="cart-button">
                    Add to cart
                </button>

            </div>

            <button class="arrow right">
                ›
            </button>

        </section>
    `;
}


// ORDERS PAGE
function ordersPage() {

    app.innerHTML = `
        <section class="page">

            <h1>Orders</h1>

            <p>
                Your orders will appear here.
            </p>

        </section>
    `;
}


// PRODUCTS PAGE
function productsPage() {

    app.innerHTML = `
        <section class="page">

            <h1>Products</h1>

            <p>
                Browse all available products.
            </p>

        </section>
    `;
}


// ACCOUNT PAGE
function accountPage() {

    app.innerHTML = `
        <section class="page">

            <h1>Account</h1>

            <p>
                Manage your account.
            </p>

        </section>
    `;
}


// CART PAGE
function cartPage() {

    app.innerHTML = `
        <section class="page">

            <h1>Cart</h1>

            <p>
                Your cart is empty.
            </p>

        </section>
    `;
}


// ROUTER
function router() {

    const path = window.location.pathname;

    if (path === "/") {

        homePage();

    } else if (path === "/orders") {

        ordersPage();

    } else if (path === "/products") {

        productsPage();

    } else if (path === "/account") {

        accountPage();

    } else if (path === "/cart") {

        cartPage();

    } else {

        homePage();

    }
}


// NAVIGATION
document.addEventListener("click", function(event) {

    const link = event.target.closest("[data-route]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const url = link.getAttribute("href");

    history.pushState({}, "", url);

    router();

});


// BACK / FORWARD BUTTON
window.addEventListener("popstate", function() {

    router();

});


// LOAD INITIAL PAGE
router();