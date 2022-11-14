import CommonsScreen from "./commons-screen";

class LoginScreen extends CommonsScreen{
    constructor() {
        super();
        this.incorrectPasswordMessage = () => $('~Password-error-message');
        this.incorrectUsernameMessage = () => $('~Username-error-message');
        this.lockedUserMEssage = () => $('~generic-error-message');
        this.usernameInput = () => $('~Username input field');
        this.passwordInput = () => $('~Password input field');
        this.loginButton = () => $('~Login button');
    }

    async fillLoginForm(username, password) {
        await this.sendText(this.usernameInput(), username);
        await this.sendText(this.passwordInput(), password);
        await this.tapOnElement(this.loginButton());
    }
}
export default new LoginScreen();