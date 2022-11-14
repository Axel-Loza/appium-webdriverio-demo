import { TIMEOUT } from "../utils/constants";

export default class BaseScreen {
    async sendText (element, text) {
        await this.waitForElement(element);
        await element.setValue(text);
    } 

    async tapOnElement (element) {
        await this.waitForElement(element);
        await element.click();
    }
    
    async waitForElement(element) {
        await element.waitForDisplayed({
                timeout: TIMEOUT
            });
    }
}
