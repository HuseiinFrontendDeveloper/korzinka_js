window.addEventListener('DOMContentLoaded', function() {

    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');





    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')

        heading.textContent = 'В нашей корзине'
        closeBtn.textContent = 'Закрьть'

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)
    }
    createCart();

    let cart = document.querySelector('.cart')

    openBtn.addEventListener('click', function() {
        cart.style.display = 'block'
    })

    let closeBtn = this.document.querySelector('.close')

    closeBtn.addEventListener('click', function() {
        cart.style.display = 'none'
    })

    let field = this.document.querySelector('.cart-field')

    buttons.forEach(function(item, i) {
        item.addEventListener('click', function() {
            let cloneItem = products[i].cloneNode(true),
                btn = cloneItem.querySelector('button')

            btn.remove()
            field.appendChild(cloneItem)
            products[i].remove();
        })
    })
})