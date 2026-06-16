// GLOBAL FUNCTION (usable anywhere)
function showFlash(message, type="success") {
    let container = document.getElementById("flash-container");

    let icons = {
        success: "✔ ",
        error: "❌ ",
        warning: "⚠ "
    };

    let div = document.createElement("div");
    div.className = "flash " + type;
    div.innerText = (icons[type] || "") + message;

    container.appendChild(div);

    setTimeout(() => {
        div.style.animation = "slideOut 0.4s forwards";
        setTimeout(() => div.remove(), 400);
    }, 3000);
}

document.querySelectorAll(".cart-item").forEach(item => {

    let productId = item.getAttribute("data-id");

    item.querySelector(".plus").addEventListener("click", () => {
        updateCart(productId, "increase", item);
    });

    item.querySelector(".minus").addEventListener("click", () => {
        updateCart(productId, "decrease", item);
    });

    item.querySelector(".remove-btn").addEventListener("click", () => {
        updateCart(productId, "remove", item);
    });

});


function updateCart(productId, action, itemElement) {

    fetch("/user/update-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            product_id: productId,
            action: action
        })
    })
    .then(res => res.json())
    .then(data => {

    // 🔥 If item was removed (no quantity returned)
    if (data.quantity === undefined) {
        itemElement.remove();
    } 
    else {
        itemElement.querySelector(".qty").innerText = data.quantity;
        itemElement.querySelector(".item-total").innerText = data.item_total;
    }

    // 🔥 Update totals (ALL places)
    document.getElementById("cart-total").innerText = data.cart_total;

    let finalTotal = document.getElementById("cart-total-final");
    if (finalTotal) finalTotal.innerText = data.cart_total;

    let payTotal = document.getElementById("pay-total");
    if (payTotal) payTotal.innerText = data.cart_total;

    // 🔥 Update item count
    let count = document.querySelectorAll(".cart-item").length;
    let countEl = document.getElementById("cart-count");
    if (countEl) countEl.innerText = count;

    showFlash(data.message, data.status);

    // 🔥 If cart becomes empty → reload UI
    if (count === 0) {
        location.reload();
    }
});
}
document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        let productId = this.getAttribute("data-id");

        fetch(`/user/add-to-cart/${productId}`, {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        })
        .then(res => res.json())
        .then(data => {

            if (data.status === "success") {
                showFlash("Item added to cart!", "success");

                // 🔥 UPDATE NAVBAR COUNT
                if (data.cart_count !== undefined) {
                    document.querySelector(".cart-count").innerText = data.cart_count;
                }

            } else {
                showFlash(data.message || "Error!", "error");
            }

        })
        .catch(() => {
            showFlash("Something went wrong!", "error");
        });

    });
});
document.getElementById("image-input")?.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        let preview = document.getElementById("preview-img");

        if (preview.tagName === "DIV") {
            let img = document.createElement("img");
            img.id = "preview-img";
            img.className = "profile-img";
            preview.replaceWith(img);
            preview = img;
        }

        preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
});