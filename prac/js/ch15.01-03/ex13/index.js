document.addEventListener('DOMContentLoaded', function () {

    const navlink = document.querySelector('nav');
    console.log(navlink.innerHTML)

    const allItems = document.querySelectorAll('.product-item');
    console.log(allItems[0].querySelector('h3'));

    const cart = document.querySelector('.cart').querySelector('img')
    console.log(cart.getAttribute('src'))

    const prices = document.querySelectorAll('.product-item .price');
    for (const price of prices) {
        console.log(price.outerHTML)
    }

    const items = document.querySelectorAll('.product-item');
    for (const item of items) {
        console.log(item.querySelector('img'))
    }

    const kensaku = document.querySelector('.search-bar')
    console.log(kensaku.querySelector('button'))

    const footer = document.querySelector('footer')
    console.log(footer.querySelector('p'))

    for (let i = 0; i < allItems.length; i++) {
        if (i % 2 == 1) {
            console.log(allItems[i].querySelector('h3'))
        }
    }

    const account = document.querySelector('.account').querySelector('img')
    console.log(account.getAttribute('src'))

    const aboutLink = document.querySelector('nav a[href="#about"]');
    console.log(aboutLink.href);
})