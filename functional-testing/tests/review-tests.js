//Review product from catalog screen
//Review product from product's screen

import catalogScreen from '../screen-objects/catalog-screen'
import testData from  '../data/test-data'

describe('Login test suite', () => {
    //HOOK
    beforeEach(async () => {
        
    });

    afterEach(async () => {
        await driver.reset();
    });


//Review first product with 5 stars
    it('Review first product with 1 stars from catalog screen', async () => {

        await catalogScreen.reviewWithOneStars();
        await expect(catalogScreen.closeModalButton()).toBeDisplayed();
        await catalogScreen.closeModal();
        await expect(catalogScreen.products()).toBeDisplayed();
    });

    it('Review second product with 5 stars from catalog screen', async () => {

        await catalogScreen.reviewWithFiveStars();
        await catalogScreen.closeModal();
        await expect(catalogScreen.products()).toBeDisplayed();
    });



})