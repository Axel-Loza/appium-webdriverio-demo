import CommonsScreen from "./commons-screen";

class ProductsScreen extends CommonsScreen {
    constructor() {
        super();
        this.products = () => $('~products screen');
    }
}
export default new ProductsScreen();