// Core Navbar Menu Logic
const navbar = document.querySelector(".nav");
const menubar = document.querySelector("#menu-bar");
const close = document.querySelector(".close");

if (menubar) {
    menubar.addEventListener('click', () => {
        navbar.style.right = "0px";
    });
}

if (close) {
    close.addEventListener('click', () => {
        navbar.style.right = "-320px";
    });
}

// ==========================================
// 1. PRODUCTS DATASET (f1-f8, n1-n8)
// ==========================================
const products = [
    {
        id: "f1",
        name: "Vintage Hawaiian Floral Shirt",
        brand: "Zara",
        price: 64.99,
        image: "./img/products/f1.jpg",
        stars: 5,
        category: "featured",
        description: "Get ready for summer with this stunning Vintage Hawaiian Floral Shirt. Made from ultra-breathable premium cotton-blend fabric, it features a relaxed fit and a classic spread collar, making it perfect for beach vacations, casual gatherings, and sunny outdoor days."
    },
    {
        id: "f2",
        name: "Classic Indigo Denim Jacket",
        brand: "Levi's",
        price: 89.99,
        image: "./img/products/f2.jpg",
        stars: 4,
        category: "featured",
        description: "A wardrobe classic. This Classic Indigo Denim Jacket is crafted from heavyweight, authentic denim with custom branded button closures. Features dual chest pockets, side slit pockets, and button-adjustable cuffs for an iconic look."
    },
    {
        id: "f3",
        name: "Retro Stripes Casual Tee",
        brand: "Tommy Hilfiger",
        price: 49.99,
        image: "./img/products/f3.jpg",
        stars: 5,
        category: "featured",
        description: "Revive classic sportswear vibes with the Retro Stripes Casual Tee. Crafted from 100% premium soft cotton, this tee offers all-day comfort and a sleek retro look with its contrast ribbed crew neckline and horizontal knit stripes."
    },
    {
        id: "f4",
        name: "Minimalist Cotton Pocket Shirt",
        brand: "Uniqlo",
        price: 39.99,
        image: "./img/products/f4.jpg",
        stars: 4,
        category: "featured",
        description: "Simplicity at its best. This Minimalist Cotton Pocket Shirt offers a clean, contemporary silhouette. Made with lightweight organic cotton, it features a single chest utility pocket and neat tonal stitching, ideal for layering or solo wear."
    },
    {
        id: "f5",
        name: "Slim-Fit Linen Summer Shirt",
        brand: "Ralph Lauren",
        price: 79.99,
        image: "./img/products/f5.jpg",
        stars: 5,
        category: "featured",
        description: "Crafted from a lightweight linen-cotton blend, this Slim-Fit Linen Summer Shirt offers excellent ventilation and classic style. The slim silhouette keeps your look sharp while keeping you exceptionally cool during the warmest days."
    },
    {
        id: "f6",
        name: "Premium Heavyweight Hoodie",
        brand: "Nike",
        price: 95.00,
        image: "./img/products/f6.jpg",
        stars: 5,
        category: "featured",
        description: "Experience ultimate comfort with this Premium Heavyweight Hoodie. Featuring a plush brushed fleece lining, thick adjustable drawstring hood, and a spacious front kangaroo pocket. Perfect for cozy days or clean streetwear styling."
    },
    {
        id: "f7",
        name: "Active Stretch Track Pants",
        brand: "Adidas",
        price: 55.00,
        image: "./img/products/f7.jpg",
        stars: 4,
        category: "featured",
        description: "Designed for performance and leisure alike. These Active Stretch Track Pants feature advanced moisture-wicking technology, zippered side pockets, and an elastic waistband with interior drawcord for maximum comfort and flexibility."
    },
    {
        id: "f8",
        name: "Vintage Corduroy Overshirt",
        brand: "H&M",
        price: 59.99,
        image: "./img/products/f8.jpg",
        stars: 5,
        category: "featured",
        description: "A versatile layering piece, the Vintage Corduroy Overshirt is made from exceptionally soft 100% cotton corduroy fabric. Featuring dual utility buttoned pockets and a relaxed fit, it adds instant texture and classic style to any outfit."
    },
    {
        id: "n1",
        name: "Organic Cotton Basic Tee",
        brand: "Patagonia",
        price: 35.00,
        image: "./img/products/n1.jpg",
        stars: 5,
        category: "new-arrival",
        description: "A clean staple you can feel good about wearing. This Organic Cotton Basic Tee is made from sustainably sourced organic cotton with a premium soft-wash finish. It features a perfect crewneck cut and side-seam construction."
    },
    {
        id: "n2",
        name: "Breathable Mesh Running Shoes",
        brand: "Puma",
        price: 110.00,
        image: "./img/products/n2.jpg",
        stars: 4,
        category: "new-arrival",
        description: "Step up your daily workouts with these Breathable Mesh Running Shoes. Featuring high-grade ventilation, shock-absorbing lightweight foam midsoles, and a high-traction rubber outsole designed for durability and responsive stride support."
    },
    {
        id: "n3",
        name: "Urban Streetwear Graphic Hoodie",
        brand: "Champion",
        price: 69.99,
        image: "./img/products/n3.jpg",
        stars: 5,
        category: "new-arrival",
        description: "Make a bold statement with the Urban Streetwear Graphic Hoodie. Showcasing a premium high-density chest graphic print, soft brushed interior, and ribbed cuffs. Designed to elevate your street style while providing exceptional comfort."
    },
    {
        id: "n4",
        name: "Water-Resistant Windbreaker",
        brand: "The North Face",
        price: 125.00,
        image: "./img/products/n4.jpg",
        stars: 5,
        category: "new-arrival",
        description: "Don't let light weather hold you back. This lightweight Water-Resistant Windbreaker offers a protective hood, full front zip closure, and elastic storm cuffs. Easily packable and incredibly durable for all your daily outdoor adventures."
    },
    {
        id: "n5",
        name: "Chino Stretch Utility Shorts",
        brand: "Carhartt",
        price: 45.00,
        image: "./img/products/n5.jpg",
        stars: 4,
        category: "new-arrival",
        description: "Comfort meets rugged utility. These Chino Stretch Utility Shorts are crafted from heavy-duty stretch twill fabric. Designed with a clean flat-front fit, dual front slant pockets, and secure rear pockets. Perfect for active weekends."
    },
    {
        id: "n6",
        name: "Sleek Waterproof Smart Watch",
        brand: "Garmin",
        price: 199.99,
        image: "./img/products/n6.jpg",
        stars: 5,
        category: "new-arrival",
        description: "Track your health and daily routines with style. This Sleek Waterproof Smart Watch features a vibrant color touchscreen, multi-sport activity tracking, 24/7 heart rate monitoring, smart notifications, and a long-lasting battery."
    },
    {
        id: "n7",
        name: "Premium Leather Classic Belt",
        brand: "Timberland",
        price: 32.50,
        image: "./img/products/n7.jpg",
        stars: 4,
        category: "new-arrival",
        description: "Elevate your casual and formal attire with this Premium Leather Classic Belt. Crafted from 100% full-grain leather, it features a polished brushed-steel metal buckle and hand-finished feathered edges for ultimate refined durability."
    },
    {
        id: "n8",
        name: "Anti-Thft Commuter Backpack",
        brand: "Herschel",
        price: 85.00,
        image: "./img/products/n8.jpg",
        stars: 5,
        category: "new-arrival",
        description: "The perfect travel companion. This Anti-Theft Commuter Backpack features hidden zipper locks, a padded laptop compartment (up to 15.6\"), water-resistant fabric, and a built-in USB charging port for modern daily convenience."
    }
];

// ==========================================
// 2. INJECT TOAST & BADGE DYNAMIC CSS STYLES
// ==========================================
const styleElement = document.createElement("style");
styleElement.innerHTML = `
    /* Toast Notification styles */
    .toast-notification {
        position: fixed;
        bottom: 25px;
        right: -350px;
        background-color: #088178;
        color: #fff;
        padding: 16px 28px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(8, 129, 120, 0.3);
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        transition: right 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        align-items: center;
        gap: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .toast-notification.show {
        right: 25px;
    }
    .toast-notification i {
        font-size: 18px;
        color: #fff;
    }

    /* Cart badge styling */
    .cart-link-container {
        position: relative;
    }
    .cart-badge {
        position: absolute;
        top: -6px;
        right: -8px;
        background-color: #ff3f6c;
        color: white;
        font-size: 10px;
        font-weight: 700;
        border-radius: 50%;
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        animation: badgePop 0.3s ease-out;
    }
    @keyframes badgePop {
        0% { transform: scale(0); }
        80% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }

    /* Interactive Filters styling */
    .shop-filters {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: -20px;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }
    .filter-btn {
        background: none;
        border: 1px solid #cce7d0;
        padding: 8px 22px;
        border-radius: 25px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        color: #222;
        background-color: #f8faf9;
    }
    .filter-btn.active, .filter-btn:hover {
        background-color: #088178;
        color: #fff;
        border-color: #088178;
        box-shadow: 0 4px 12px rgba(8, 129, 120, 0.2);
    }
`;
document.head.appendChild(styleElement);

// Create Toast Notification Element
const toastElement = document.createElement("div");
toastElement.className = "toast-notification";
toastElement.innerHTML = `<i class="fa fa-check-circle"></i> <span id="toast-message">Item added to cart!</span>`;
document.body.appendChild(toastElement);

function showToast(message) {
    const toastMsg = document.getElementById("toast-message");
    if (toastMsg) toastMsg.textContent = message;
    toastElement.classList.add("show");
    setTimeout(() => {
        toastElement.classList.remove("show");
    }, 2500);
}

// ==========================================
// 3. CART SYSTEM (LOCALSTORAGE BACKED)
// ==========================================
function getCart() {
    try {
        const cartStr = localStorage.getItem("zoro_cart");
        return cartStr ? JSON.parse(cartStr) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("zoro_cart", JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, qty = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({ id: productId, quantity: qty });
    }
    
    saveCart(cart);
    showToast(`"${product.name}" added to cart!`);
}

function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Find desktop cart link
    const desktopCartLinks = document.querySelectorAll(".nav-links a.cart");
    // Find mobile cart link
    const mobileCartLink = document.querySelector(".menu a[href='./cart.html'], .menu a[href='cart.html']");
    
    const applyBadge = (linkEl) => {
        if (!linkEl) return;
        linkEl.classList.add("cart-link-container");
        
        let badge = linkEl.querySelector(".cart-badge");
        if (totalQty > 0) {
            if (!badge) {
                badge = document.createElement("span");
                badge.className = "cart-badge";
                linkEl.appendChild(badge);
            }
            badge.textContent = totalQty;
        } else if (badge) {
            badge.remove();
        }
    };
    
    desktopCartLinks.forEach(applyBadge);
    applyBadge(mobileCartLink);
}

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================

// HTML template for a single product card
function createProductCardHTML(product) {
    let starsHTML = '';
    for (let i = 0; i < product.stars; i++) {
        starsHTML += `<i class="fa fa-star"></i>`;
    }

    return `
        <div class="fashion-1-shirts" data-id="${product.id}">
            <img src="${product.image}" width="250" alt="${product.name}">
            <p>${product.brand}</p>
            <h4>${product.name}</h4>
            <p>
                ${starsHTML}
            </p>
            <div class="fashion-1-shirt-price">
                <p>$${product.price.toFixed(2)}</p>
                <p class="add-to-cart-btn" data-id="${product.id}"><i class="fa fa-shopping-cart"></i></p>
            </div>
        </div>
    `;
}

// Bind event listeners to product cards and add-to-cart buttons
function bindProductCardEvents(container) {
    if (!container) return;
    
    // Bind cart buttons
    const buttons = container.querySelectorAll(".add-to-cart-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = btn.getAttribute("data-id");
            addToCart(productId);
        });
    });

    // Bind card body click (except on cart button click)
    const cards = container.querySelectorAll(".fashion-1-shirts");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const productId = card.getAttribute("data-id");
            window.location.href = `sproduct.html?id=${productId}`;
        });
    });
}

// Render Products for the Home Page
function renderHomePageProducts() {
    const featuredContainer = document.getElementById("featured-products");
    const newArrivalsContainer = document.getElementById("new-arrivals");

    if (featuredContainer) {
        const featuredProducts = products.filter(p => p.category === "featured");
        featuredContainer.innerHTML = featuredProducts.map(createProductCardHTML).join("");
        bindProductCardEvents(featuredContainer);
    }

    if (newArrivalsContainer) {
        const newArrivals = products.filter(p => p.category === "new-arrival");
        newArrivalsContainer.innerHTML = newArrivals.map(createProductCardHTML).join("");
        bindProductCardEvents(newArrivalsContainer);
    }
}

// Render and Filter Products for the Shop Page
function renderShopPageProducts() {
    const shopContainer = document.getElementById("shop-products");
    if (!shopContainer) return;

    // Inject filter controls at the top of the section (just before the container)
    const featuredProductSection = document.getElementById("featured-product");
    if (featuredProductSection) {
        const filterWrapper = document.createElement("div");
        filterWrapper.className = "shop-filters";
        filterWrapper.innerHTML = `
            <button class="filter-btn active" data-category="all">All Products</button>
            <button class="filter-btn" data-category="featured">Featured Collection</button>
            <button class="filter-btn" data-category="new-arrival">New Arrivals</button>
        `;
        // Insert right after the title div
        const titleDiv = featuredProductSection.querySelector(".featured-product-title");
        if (titleDiv) {
            titleDiv.parentNode.insertBefore(filterWrapper, titleDiv.nextSibling);
        }

        // Set up filtering click handlers
        const filterBtns = filterWrapper.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                const category = btn.getAttribute("data-category");
                displayFilteredProducts(category);
            });
        });
    }

    // Default: Display all products
    displayFilteredProducts("all");

    function displayFilteredProducts(category) {
        let filtered = products;
        if (category !== "all") {
            filtered = products.filter(p => p.category === category);
        }
        
        shopContainer.innerHTML = filtered.map(createProductCardHTML).join("");
        bindProductCardEvents(shopContainer);
    }
}

// Advanced addToCart with custom quantity and size
function addToCartWithDetails(productId, quantity, size) {
    let cart = getCart();
    const existing = cart.find(item => item.id === productId && item.size === size);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity, size: size });
    }

    saveCart(cart);
    updateCartCount();
    showToast(`Added ${quantity}x "${products.find(p => p.id === productId).name}" (${size}) to cart!`);
}

// Render Single Product Detail View
function renderSingleProductPage() {
    const container = document.getElementById("product-details-container");
    if (!container) return;

    // Parse product ID from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const product = products.find(p => p.id === productId);

    if (!product) {
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 0; width: 100%;">
                <h2 style="font-size: 28px; font-weight: 600; color: #222; margin-bottom: 20px;">Oops! Product Not Found</h2>
                <p style="color: #666; margin-bottom: 30px; font-size: 16px;">The product you are looking for does not exist or has been removed.</p>
                <a href="./shop.html" style="background-color: #088178; color: #fff; padding: 12px 30px; border-radius: 8px; font-size: 15px; font-weight: 600; transition: background-color 0.2s;">Go to Shop</a>
            </div>
        `;
        return;
    }

    let starsHTML = '';
    for (let i = 0; i < product.stars; i++) {
        starsHTML += `<i class="fa fa-star"></i>`;
    }

    container.innerHTML = `
        <div class="sproduct-left">
            <img src="${product.image}" id="MainImg" alt="${product.name}">
            <div class="sproduct-thumbnails">
                <img src="${product.image}" class="small-img" alt="">
                <img src="${product.image}" class="small-img" style="filter: hue-rotate(45deg);" alt="">
                <img src="${product.image}" class="small-img" style="filter: hue-rotate(90deg);" alt="">
                <img src="${product.image}" class="small-img" style="filter: hue-rotate(180deg);" alt="">
            </div>
        </div>
        <div class="sproduct-right">
            <h6>Home / Shop</h6>
            <h2>${product.name}</h2>
            <div class="sproduct-stars">${starsHTML}</div>
            <h3>$${product.price.toFixed(2)}</h3>
            
            <p style="font-size: 13px; font-weight: 600; color: #555; margin-bottom: 10px;">Select Size:</p>
            <div class="sproduct-sizes-wrapper">
                <div class="sproduct-size-option">
                    <input type="radio" name="size" value="XXS" id="size-XXS">
                    <label for="size-XXS">XXS</label>
                </div>
                <div class="sproduct-size-option">
                    <input type="radio" name="size" value="XS" id="size-XS">
                    <label for="size-XS">XS</label>
                </div>
                <div class="sproduct-size-option">
                    <input type="radio" name="size" value="S" id="size-S">
                    <label for="size-S">S</label>
                </div>
                <div class="sproduct-size-option">
                    <input type="radio" name="size" value="M" id="size-M">
                    <label for="size-M">M</label>
                </div>
                <div class="sproduct-size-option">
                    <input type="radio" name="size" value="L" id="size-L">
                    <label for="size-L">L</label>
                </div>
                <div class="sproduct-size-option">
                    <input type="radio" name="size" value="XL" id="size-XL">
                    <label for="size-XL">XL</label>
                </div>
            </div>

            <div class="sproduct-actions">
                <div class="sproduct-qty-wrapper">
                    <button type="button" class="qty-btn" id="qty-minus-btn">-</button>
                    <input type="number" id="product-qty" value="1" min="1" readonly>
                    <button type="button" class="qty-btn" id="qty-plus-btn">+</button>
                </div>
                <button id="add-to-cart-detail-btn">Add To Cart</button>
            </div>
            <h4 class="sproduct-desc-title">Product Details</h4>
            <p class="sproduct-desc">${product.description}</p>
        </div>
    `;

    // Hook Thumbnail Swapping
    const mainImg = document.getElementById("MainImg");
    const smallImgs = container.querySelectorAll(".small-img");
    smallImgs.forEach(img => {
        img.addEventListener("click", () => {
            mainImg.src = img.src;
            mainImg.style.filter = img.style.filter;
        });
    });

    // Hook Plus / Minus Quantity selectors
    const minusBtn = document.getElementById("qty-minus-btn");
    const plusBtn = document.getElementById("qty-plus-btn");
    const qtyInput = document.getElementById("product-qty");

    if (minusBtn && plusBtn && qtyInput) {
        minusBtn.addEventListener("click", () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) {
                qtyInput.value = val - 1;
            }
        });

        plusBtn.addEventListener("click", () => {
            let val = parseInt(qtyInput.value) || 1;
            qtyInput.value = val + 1;
        });
    }

    // Hook Add to Cart from Detail Page
    const addToCartBtn = document.getElementById("add-to-cart-detail-btn");
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            const checkedSizeRadio = container.querySelector("input[name='size']:checked");
            const qtyInput = document.getElementById("product-qty");
            
            const size = checkedSizeRadio ? checkedSizeRadio.value : "";
            const qty = qtyInput ? parseInt(qtyInput.value) : 1;

            if (!size) {
                alert("Please select a size before adding to cart!");
                return;
            }

            if (isNaN(qty) || qty < 1) {
                alert("Please enter a valid quantity!");
                return;
            }

            addToCartWithDetails(product.id, qty, size);
        });
    }

    // Render 4 Related Products in the Bottom section
    const relatedContainer = document.getElementById("featured-products");
    if (relatedContainer) {
        // Filter out current product, get 4 related ones from the same category
        const related = products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4);
        
        relatedContainer.innerHTML = related.map(createProductCardHTML).join("");
        bindProductCardEvents(relatedContainer);
    }
}

// Render Cart items in cart.html and manage quantities/totals
function renderCartPage() {
    const tbody = document.getElementById("cart-items");
    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total-value");
    
    if (!tbody) return;

    const cart = getCart();

    if (cart.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="padding: 40px 0; text-align: center;">
                    <p style="font-size: 18px; font-weight: 500; color: #555; margin-bottom: 15px;">Your cart is empty!</p>
                    <a href="./shop.html" style="background-color: #088178; color: #fff; padding: 10px 25px; border-radius: 5px; font-size: 14px; font-weight: 500; transition: background-color 0.3s;">Start Shopping</a>
                </td>
            </tr>
        `;
        if (subtotalEl) subtotalEl.textContent = "$0.00";
        if (totalEl) totalEl.textContent = "$0.00";
        return;
    }

    let tbodyHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;

        const itemSubtotal = product.price * item.quantity;
        subtotal += itemSubtotal;

        tbodyHTML += `
            <tr data-id="${product.id}" data-size="${item.size || ''}">
                <td><a href="#" class="remove-cart-item" data-id="${product.id}" data-size="${item.size || ''}"><i class='fa fa-times-circle'></i></a></td>
                <td><img src="${product.image}" width="70" alt="${product.name}"></td>
                <td><p>${product.name} ${item.size ? `<span style="font-size: 11px; background: #e8f6ea; color: #088178; padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: 600;">${item.size}</span>` : ''}</p></td>
                <td><p>$${product.price.toFixed(2)}</p></td>
                <td><input type="number" class="cart-qty-input" data-id="${product.id}" data-size="${item.size || ''}" value="${item.quantity}" min="1"></td>
                <td><p class="item-subtotal-val">$${itemSubtotal.toFixed(2)}</p></td>
            </tr>
        `;
    });

    tbody.innerHTML = tbodyHTML;

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;

    // Hook quantity input change events
    const qtyInputs = tbody.querySelectorAll(".cart-qty-input");
    qtyInputs.forEach(input => {
        input.addEventListener("change", (e) => {
            const qty = parseInt(e.target.value);
            const size = input.getAttribute("data-size");
            if (qty < 1 || isNaN(qty)) {
                e.target.value = 1;
                return;
            }
            const productId = input.getAttribute("data-id");
            updateCartItemQuantity(productId, size, qty);
        });
    });

    // Hook remove item click events
    const removeButtons = tbody.querySelectorAll(".remove-cart-item");
    removeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const productId = btn.getAttribute("data-id");
            const size = btn.getAttribute("data-size");
            removeCartItem(productId, size);
        });
    });
}

function updateCartItemQuantity(productId, size, quantity) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId && (i.size || '') === size);
    if (item) {
        item.quantity = quantity;
        saveCart(cart);
        renderCartPage();
    }
}

function removeCartItem(productId, size) {
    let cart = getCart();
    const product = products.find(p => p.id === productId);
    cart = cart.filter(item => !(item.id === productId && (item.size || '') === size));
    saveCart(cart);
    renderCartPage();
    
    if (product) {
        showToast(`Removed "${product.name}"${size ? ` (${size})` : ''} from cart!`);
    }
}

// ==========================================
// 5. INITIALIZE ON DOCUMENT LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    
    // Determine page and trigger specific rendering
    if (document.getElementById("featured-products") || document.getElementById("new-arrivals")) {
        renderHomePageProducts();
    }
    
    if (document.getElementById("shop-products")) {
        renderShopPageProducts();
    }
    
    if (document.getElementById("cart-items")) {
        renderCartPage();
    }

    if (document.getElementById("product-details-container")) {
        renderSingleProductPage();
    }
});