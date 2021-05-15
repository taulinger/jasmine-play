const { chromium, webkit, firefox } = require('playwright');
const browserName = process.env.BROWSER || 'webkit';
let browser;

describe('main menu', () => {
    let browser, page




    beforeAll(async () => {
        browser = await { chromium, webkit, firefox }[browserName].launch();
    })
    afterAll(async () => {
        await browser.close()
    })

    describe('when loaded', () => {

        describe('in desktop mode', () => {

            beforeEach(async () => {
                page = await browser.newPage()
                // await page.goto('http://localhost:8080')
                await page.goto('https://geoportal.bayern.de/bayernatlas/');
            });
            afterEach(async () => {
                await page.close();
            });

            it('should show button', async () => {
                expect(await page.innerText(".ga-visible-collapsed")).toBe('Menü öffnen');
                // const headers = await page.$$('ba-header .header__logo');
                // expect(headers.length).toBe(1)
            });
        });

        describe('in mobile mode', () => {

            beforeEach(async () => {
                page = await browser.newPage({ viewport: { width: 375, height: 667 } });
                // await page.goto('http://localhost:8080')
                await page.goto('https://geoportal.bayern.de/bayernatlas/');
            });
            afterEach(async () => {
                await page.close();
            });

            it('should show button', async () => {
                expect(await page.innerText('.btn.ga-menu-bt.ng-scope')).toBe('Menü');
                // const headers = await page.$$('ba-header .header__logo');
                // expect(headers.length).toBe(1)
            });
        });
    });
});




