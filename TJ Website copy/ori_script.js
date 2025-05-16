document.addEventListener("DOMContentLoaded", function() {
    // Fake product details data for tracking
    const products = {
        1: { name: "Product 1", price: "$10", description: "This is a great product." },
        2: { name: "Product 2", price: "$20", description: "This is another great product." },
        3: { name: "Product 3", price: "$30", description: "This is yet another great product." },
    };

    // Get product ID from URL and load product details if present
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        fetchProductDetails(parseInt(productId));
    }

    // ✅ Track "viewedHomepage" event properly on every page
    document.querySelectorAll('a[href="index.html"]').forEach(function(homeLink) {
        homeLink.addEventListener("click", function() {
            amplitude.track("viewedHomepage");
        });
    });

    // ✅ Track "viewedProducts" event properly on every page
    document.querySelectorAll('a[href="products.html"]').forEach(function(productsLink) {
        productsLink.addEventListener("click", function() {
            amplitude.track("viewedProducts");
        });
    });

    // ✅ Track "viewedAboutUs" event properly
    document.querySelectorAll('a[href="about.html"]').forEach(function(aboutUsLink) {
        aboutUsLink.addEventListener("click", function() {
            amplitude.track("viewedAboutUs");
        });
    });

    // ✅ Track "clickedSignIn" properly
    document.querySelectorAll('a[href="sign-in.html"]').forEach(function(signInLink) {
        signInLink.addEventListener("click", function() {
            amplitude.track("clickedSignIn");
        });
    });

    // ✅ Track "viewedProductDetails" with price & description
    document.querySelectorAll('a[href^="product-details.html?id="]').forEach(function(link) {
        link.addEventListener("click", function() {
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
        `;
    } else {
        document.getElementById("product-details").innerHTML = "<h2>Product not found.</h2>";
    }
}














/////////////////// V2 - works with event properties ///////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     // Fake product details data for tracking
//     const products = {
//         1: { name: "Product 1", price: "$10", description: "This is a great product." },
//         2: { name: "Product 2", price: "$20", description: "This is another great product." },
//         3: { name: "Product 3", price: "$30", description: "This is yet another great product." },
//     };

//     // Get product ID from URL and load product details if present
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get("id");

//     if (productId) {
//         fetchProductDetails(parseInt(productId));
//     }

//     // Track "viewedHomepage" event
//     const homeLink = document.querySelector('a[href="index.html"]');
//     if (homeLink) {
//         homeLink.addEventListener("click", function() {
//             amplitude.track("viewedHomepage");
//         });
//     }

//     // Track "viewedProducts" event
//     const productsLink = document.querySelector('a[href="products.html"]');
//     if (productsLink) {
//         productsLink.addEventListener("click", function() {
//             amplitude.track("viewedProducts");
//         });
//     }

//     // Track "viewedAboutUs" event
//     const aboutUsLink = document.querySelector('a[href="about.html"]');
//     if (aboutUsLink) {
//         aboutUsLink.addEventListener("click", function() {
//             amplitude.track("viewedAboutUs");
//         });
//     }

//     // Track "viewedProductDetails" with price & description
//     const detailsLinks = document.querySelectorAll('a[href^="product-details.html?id="]');
//     detailsLinks.forEach(function(link) {
//         link.addEventListener("click", function() {
//             const clickedProductId = this.href.split('id=')[1]; // Get the product ID from URL
//             const productData = products[clickedProductId]; // Fetch product details

//             if (productData) {
//                 amplitude.track("viewedProductDetails", {
//                     productId: clickedProductId,
//                     price: productData.price,
//                     product_description: productData.description
//                 });
//             }
//         });
//     });
// });

// function fetchProductDetails(productId) {
//     // Fake product details data
//     const products = {
//         1: { name: "Product 1", price: "$10", description: "This is a great product." },
//         2: { name: "Product 2", price: "$20", description: "This is another great product." },
//         3: { name: "Product 3", price: "$30", description: "This is yet another great product." },
//     };

//     const product = products[productId];

//     if (product) {
//         document.getElementById("product-details").innerHTML = `
//             <h2>${product.name}</h2>
//             <p>Price: ${product.price}</p>
//             <p>Description: ${product.description}</p>
//         `;
//     } else {
//         document.getElementById("product-details").innerHTML = "<h2>Product not found.</h2>";
//     }
// }






/////////////////// V1 - works for tracking events, no properties ///////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     // Get product ID from URL and load product details if present
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get("id");

//     if (productId) {
//         fetchProductDetails(parseInt(productId));
//     }

//     // Track "viewedHomepage" event when "Home" link is clicked
//     const homeLink = document.querySelector('a[href="index.html"]');
//     if (homeLink) {
//         homeLink.addEventListener("click", function() {
//             amplitude.track("viewedHomepage");
//         });
//     }

//     // Track "viewedProducts" event when "Products" link is clicked
//     const productsLink = document.querySelector('a[href="products.html"]');
//     if (productsLink) {
//         productsLink.addEventListener("click", function() {
//             amplitude.track("viewedProducts");
//         });
//     }

//     // Track "viewedAboutUs" event when "About Us" link is clicked
//     const aboutUsLink = document.querySelector('a[href="about.html"]');
//     if (aboutUsLink) {
//         aboutUsLink.addEventListener("click", function() {
//             amplitude.track("viewedAboutUs");
//         });
//     }

//     // Track "viewedProductDetails" when any "Details" link is clicked
//     const detailsLinks = document.querySelectorAll('a[href^="product-details.html?id="]');
//     detailsLinks.forEach(function(link) {
//         link.addEventListener("click", function() {
//             amplitude.track("viewedProductDetails", { productId: this.href.split('id=')[1] });
//         });
//     });
// });

// function fetchProductDetails(productId) {
//     // Fake product details data
//     const products = {
//         1: { name: "Product 1", price: "$10", description: "This is a great product." },
//         2: { name: "Product 2", price: "$20", description: "This is another great product." },
//         3: { name: "Product 3", price: "$30", description: "This is yet another great product." },
//     };

//     const product = products[productId];

//     if (product) {
//         document.getElementById("product-details").innerHTML = `
//             <h2>${product.name}</h2>
//             <p>Price: ${product.price}</p>
//             <p>Description: ${product.description}</p>
//         `;
//     } else {
//         document.getElementById("product-details").innerHTML = "<h2>Product not found.</h2>";
//     }
// }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ORIGINAL

// document.addEventListener("DOMContentLoaded", function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get("id");

//     if (productId) {
//         fetchProductDetails(parseInt(productId));
//     }

//     // Track "viewedHomepage" event when "Home" link is clicked
//     const homeLink = document.querySelector('a[href="index.html"]');
//     if (homeLink) {
//         homeLink.addEventListener("click", function() {
//             amplitude.track("viewedHomepage");
//         });
//     }
// });

// function fetchProductDetails(productId) {
//     // Fake product details data
//     const products = {
//         1: { name: "Product 1", price: "$10", description: "This is a great product." },
//         2: { name: "Product 2", price: "$20", description: "This is another great product." },
//         3: { name: "Product 3", price: "$30", description: "This is yet another great product." },
//     };

//     const product = products[parseInt(productId)];


//     if (product) {
//         document.getElementById("product-details").innerHTML = `
//             <h2>${product.name}</h2>
//             <p>Price: ${product.price}</p>
//             <p>Description: ${product.description}</p>
//         `;
//     } else {
//         document.getElementById("product-details").innerHTML = "<h2>Product not found.</h2>";
//     }
// }
