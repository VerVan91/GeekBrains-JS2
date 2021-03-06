class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];//массив товаров c добавлением фото
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    Sum() {
        let resSum = this.allProducts.reduce((sum, item) => sum += item.price, 0);
        let resSumRender = document.querySelector(".sumAllProducts");
        resSumRender.innerHTML = `Суммарная стоимость всех продуктов ${resSum}`;
    }
}

class ProductItem {
    constructor(product, img='img/mouse.jpg') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <h3 class="product_item_title">${this.title}</h3>
                <a href ="#"><img src="${this.img}"></a>
                <p class="product_item_price">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}
let list = new ProductList();

list.Sum();

class Basket {
    goodsAdd() {}
    goodsRemove() {}
    GoodsChange() {}
}

class BasketElement {};


