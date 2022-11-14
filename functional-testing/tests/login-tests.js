import loginScreen from '../screen-objects/login-screen'
import productsScreen from '../screen-objects/products-screen'
import testData from  '../data/test-data'

describe('Login test suite', () => {
    //HOOK
    beforeEach(async () => {
        await productsScreen.tapOnLogin();
    });

    afterEach(async () => {
        await driver.reset();
    });

    it('Successful login with valid user and password', async () => {
        await loginScreen.fillLoginForm(testData.credentials.username, testData.credentials.password);

        expect(productsScreen.products()).toBeDisplayed();
    });

    it('Incorrect login with missing username', async () => {
        await loginScreen.fillLoginForm('', testData.credentials.password);

        expect(loginScreen.incorrectUsernameMessage()).toHaveText(testData.messages.error.requiredUsername);
    });

    it('Incorrect login with locked username', async () => {
        await loginScreen.fillLoginForm(testData.credentials.lockeUsername, testData.credentials.password);

        expect(loginScreen.incorrectUsernameMessage()).toHaveText(testData.messages.error.lockeUsername);
    });
});