import BaseScreen from '../screen-objects/base-screen';

export default class CommonsScreen extends BaseScreen {
    constructor() {
        super();
        this.mainMenu = () => $('~open menu');
        this.loginOption = () => $('~menu item log in');
    }

    async tapOnMainMenu() {
        await this.tapOnElement(this.mainMenu());
    }

    async tapOnLogin() {
        await this.tapOnElement(this.mainMenu());
        await this.tapOnElement(this.loginOption());
    }
}