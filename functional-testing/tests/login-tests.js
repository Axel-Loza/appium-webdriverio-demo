import loginScreen from '../screen-objects/login-screen'
import catalogScreen from '../screen-objects/catalog-screen'
import testData from  '../data/test-data'

describe('Login test suite', () => {
    //HOOK
    beforeEach(async () => {
        await catalogScreen.tapOnLogin();
    });

    afterEach(async () => {
        await driver.reset();
    });

    //Login using a valid username and password
    it('Successful login with valid user and password', async () => {
        await loginScreen.fillLoginForm(testData.credentials.username, testData.credentials.password);

        await expect(catalogScreen.products()).toBeDisplayed()
    });

    // Login with missing username but valid password
    it('Incorrect login with missing username', async () => {
        await loginScreen.fillLoginForm('', testData.credentials.password);

        await expect(loginScreen.incorrectUsernameMessage().$$('android.widget.TextView')).toHaveText(testData.messages.error.requiredUsername);
    });

    // Login with valid username but missing password
    it('Incorrect login with missing password', async () => {
        await loginScreen.fillLoginForm(testData.credentials.username, '');

        await expect(loginScreen.incorrectPasswordMessage().$$('android.widget.TextView')).toHaveText(testData.messages.error.requiredPassword);
    });

    // Login with missing username and password
    it('Incorrect login with missing username and password', async () => {
        await loginScreen.fillLoginForm('', '');

        await expect(loginScreen.incorrectUsernameMessage().$$('android.widget.TextView')).toHaveText(testData.messages.error.requiredUsername);
    });

      // Login with wrong username and password
      it('Incorrect login with wrong credentials', async () => {
        await loginScreen.fillLoginForm('wrong_user@test.com', 'wrongpassword');

        await expect(loginScreen.errorMessage().$$('android.widget.TextView')).toHaveText(testData.messages.error.wrongCredentials);
    });

    // Login with locked username
    it('Incorrect login with locked username', async () => {
        await loginScreen.fillLoginForm(testData.credentials.lockeUsername, testData.credentials.password);

        await expect(loginScreen.errorMessage().$$('android.widget.TextView')).toHaveText(testData.messages.error.lockedUsername);
    });
});
