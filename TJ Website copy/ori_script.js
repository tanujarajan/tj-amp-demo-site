document.addEventListener("DOMContentLoaded", function () {
    // Fake product details data for tracking
    const products = {
        1: { name: "Product 1", price: "$10", description: "This is a great product." },
        2: { name: "Product 2", price: "$20", description: "This is another great product." },
        3: { name: "Product 3", price: "$30", description: "This is yet another great product." },
    };

    // Simple cart management
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get product ID from URL and load product details if present
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        fetchProductDetails(parseInt(productId));
        // Initialize experiment for product details page
        initializeProductExperiment(parseInt(productId));
    }

    // ✅ Track "viewedHomepage" event properly on every page
    document.querySelectorAll('a[href="index.html"]').forEach(function (homeLink) {
        homeLink.addEventListener("click", function () {
            amplitude.track("viewedHomepage");
        });
    });

    // ✅ Track "viewedProducts" event properly on every page
    document.querySelectorAll('a[href="products.html"]').forEach(function (productsLink) {
        productsLink.addEventListener("click", function () {
            amplitude.track("viewedProducts");
        });
    });

    // ✅ Track "viewedAboutUs" event properly
    document.querySelectorAll('a[href="about.html"]').forEach(function (aboutUsLink) {
        aboutUsLink.addEventListener("click", function () {
            amplitude.track("viewedAboutUs");
        });
    });

    // ✅ Track "clickedSignIn" properly
    document.querySelectorAll('a[href="sign-in.html"]').forEach(function (signInLink) {
        signInLink.addEventListener("click", function () {
            amplitude.track("clickedSignIn");
        });
    });

    // ✅ Track "viewedProductDetails" with price & description
    document.querySelectorAll('a[href^="product-details.html?id="]').forEach(function (link) {
        link.addEventListener("click", function () {
            const clickedProductId = this.href.split('id=')[1]; // Get product ID
            const productData = products[clickedProductId]; // Get product details

            if (productData) {
                amplitude.track("viewedProductDetails", {
                    productId: clickedProductId,
                    price: productData.price,
                    product_description: productData.description
                });
            }
        });
    });

    // Cart management functions
    function addToCart(productId) {
        const product = products[productId];
        if (product) {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price
            });
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log(`✅ Added ${product.name} to cart`);

            // Track the add to cart event
            amplitude.track("clickedAddToCart", {
                productId: productId,
                product_name: product.name,
                price: product.price,
                cart_item_count: cart.length
            });
        }
    }

    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function clearCart() {
        localStorage.removeItem('cart');
        cart = [];
    }

    // Experiment initialization for product details page
    async function initializeProductExperiment(productId) {
        // Wait for experiment client to be ready
        setTimeout(async () => {
            if (window.experimentClient) {
                try {
                    console.log("🧪 Fetching experiment variants...");

                    // Fetch variants using official SDK method
                    await window.experimentClient.fetch();
                    console.log("✅ Fetch completed successfully");

                    // Get variant using official SDK method  
                    const variant = window.experimentClient.variant('add-to-cart-shake-1');
                    console.log(`🎯 Experiment variant: ${variant.value || 'no_variant'}`);

                    // Only apply experiment if user got a real variant (control/treatment)
                    if (variant.value === 'control' || variant.value === 'treatment') {
                        console.log(`✅ User is in experiment: ${variant.value}`);
                        applyExperimentVariant(variant.value, productId);
                    } else {
                        console.log(`ℹ️ User not in experiment (no targeting match)`);
                        // User gets default experience - no experiment applied
                    }
                } catch (error) {
                    console.error("❌ Failed to fetch experiment variants:", error);
                    console.log("ℹ️ Using default experience (no experiment)");
                    // Don't apply any experiment variant - use default experience
                }
            } else {
                console.warn("⚠️ Experiment client not available, using default experience");
                // Don't apply any experiment variant - use default experience
            }
        }, 300); // Give experiment client time to initialize (reduced for faster animation start)
    }

    function applyExperimentVariant(variant, productId) {
        console.log(`🎨 Applying variant: ${variant} for product ${productId}`);

        // Add variant as a data attribute for CSS styling
        const addToCartButton = document.getElementById('add-to-cart-btn');
        if (addToCartButton) {
            addToCartButton.setAttribute('data-variant', variant);

            if (variant === 'treatment') {
                addToCartButton.classList.add('shake-animation');
                console.log("✨ Treatment: Added shake animation to Add to Cart button");
            }
        }
    }

    // Make functions globally available
    window.addToCart = addToCart;
    window.getCart = getCart;
    window.clearCart = clearCart;
    window.initializeProductExperiment = initializeProductExperiment;
});

function fetchProductDetails(productId) {
    // Fake product details data
    const products = {
        1: { name: "Product 1", price: "$10", description: "This is a great product." },
        2: { name: "Product 2", price: "$20", description: "This is another great product." },
        3: { name: "Product 3", price: "$30", description: "This is yet another great product." },
    };

    const product = products[productId];

    if (product) {
        document.getElementById("product-details").innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <div class="product-actions">
                <button id="add-to-cart-btn" onclick="addToCart(${productId})" class="btn btn-primary">
                    Add to Cart
                </button>
                <button id="checkout-btn" onclick="goToCheckout()" class="btn btn-secondary">
                    Checkout
                </button>
            </div>
        `;
    } else {
        document.getElementById("product-details").innerHTML = "<h2>Product not found.</h2>";
    }
}

// Function to navigate to checkout page
function goToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Track checkout click event
    amplitude.track("clickedCheckout", {
        cart_item_count: cart.length,
        cart_items: cart.map(item => item.name).join(', ')
    });

    console.log("🛒 Navigating to checkout page");
    window.location.href = 'checkout.html';
}
