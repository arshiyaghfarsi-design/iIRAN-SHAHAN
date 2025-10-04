const productsElem = document.querySelector('.products')

const products = [
    { id: 1, name: 'شیشه دوجداره', caption: 'شیشه دو جداره در درب و پنجره های دو جداره UPVC، دولایه شیشه ایست که به طور موازی و با یک فاصله معین در کنار هم قرار گرفته اند. به منظور جلوگیری از انتقال حرارت و ورود گرد و غبار و سر و صدا، این فضای را با ماده ای به نام گاز آرگون پر می کنند که عایق مناسبی برای صوت و حرارت نیز می باشد.', img: './images/product1.JPG' },
    { id: 2, name: 'شیشه دوجداره', caption: 'شیشه دو جداره در درب و پنجره های دو جداره UPVC، دولایه شیشه ایست که به طور موازی و با یک فاصله معین در کنار هم قرار گرفته اند. به منظور جلوگیری از انتقال حرارت و ورود گرد و غبار و سر و صدا، این فضای را با ماده ای به نام گاز آرگون پر می کنند که عایق مناسبی برای صوت و حرارت نیز می باشد.', img: './images/product2.JPG' },
    { id: 3, name: 'شیشه دوجداره', caption: 'شیشه دو جداره در درب و پنجره های دو جداره UPVC، دولایه شیشه ایست که به طور موازی و با یک فاصله معین در کنار هم قرار گرفته اند. به منظور جلوگیری از انتقال حرارت و ورود گرد و غبار و سر و صدا، این فضای را با ماده ای به نام گاز آرگون پر می کنند که عایق مناسبی برای صوت و حرارت نیز می باشد.', img: './images/product3.JPG' },
    { id: 4, name: 'شیشه دوجداره', caption: 'شیشه دو جداره در درب و پنجره های دو جداره UPVC، دولایه شیشه ایست که به طور موازی و با یک فاصله معین در کنار هم قرار گرفته اند. به منظور جلوگیری از انتقال حرارت و ورود گرد و غبار و سر و صدا، این فضای را با ماده ای به نام گاز آرگون پر می کنند که عایق مناسبی برای صوت و حرارت نیز می باشد.', img: './images/product4.JPG' },
    { id: 5, name: 'شیشه دوجداره', caption: 'شیشه دو جداره در درب و پنجره های دو جداره UPVC، دولایه شیشه ایست که به طور موازی و با یک فاصله معین در کنار هم قرار گرفته اند. به منظور جلوگیری از انتقال حرارت و ورود گرد و غبار و سر و صدا، این فضای را با ماده ای به نام گاز آرگون پر می کنند که عایق مناسبی برای صوت و حرارت نیز می باشد.', img: './images/product5.JPG' },
    { id: 6, name: 'شیشه دوجداره', caption: 'شیشه دو جداره در درب و پنجره های دو جداره UPVC، دولایه شیشه ایست که به طور موازی و با یک فاصله معین در کنار هم قرار گرفته اند. به منظور جلوگیری از انتقال حرارت و ورود گرد و غبار و سر و صدا، این فضای را با ماده ای به نام گاز آرگون پر می کنند که عایق مناسبی برای صوت و حرارت نیز می باشد.', img: './images/product6.JPG' },
];

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

products.forEach((product) => {
    productsElem.insertAdjacentHTML('beforeend', '<div class="product"><div class="product__image"><img src="' + product.img + '" class="product__img"></div><div class="product__content"><h3 class="product__title">' + product.name + '</h3><p class="product__caption">' + product.caption + '</p><div class="product__btns"><a href="tel:09121321716" class="product__btn btn-2">تماس</a></div></div></div>')
})

