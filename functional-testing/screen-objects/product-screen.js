import CommonsScreen from "./commons-screen";

class CatalogScreen extends CommonsScreen {
    constructor() {
        super();
        this.products = () => $('~products screen');
        this.FirstProduct = () => $('(//android.view.ViewGroup[@content-desc="store item"])[1]')
        this.oneStarsButton = () => $('(//android.view.ViewGroup[@content-desc="review star 1"])[1]')
        this.fivStarsButton = () => $('(//android.view.ViewGroup[@content-desc="review star 5"])[2]')
        this.closeModalButton = () => $('~Close Modal button')
    }

    async reviewWithOneStars() {
        
        await this.tapOnElement(this.oneStarsButton());
    }

    async reviewWithFiveStars() {
        
        await this.tapOnElement(this.fivStarsButton());
    }

    async closeModal(){

        await this.tapOnElement(this.closeModalButton());
    }


}
export default new CatalogScreen();