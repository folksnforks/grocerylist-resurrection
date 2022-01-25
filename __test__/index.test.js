/**
 * @jest-environment jsdom
 */

const puppeteer = require('puppeteer');

(async () => {
   const browser = await puppeteer.launch(
      {
         headless: false,
         slowMo: 80,
         args: ['--window-size=1400,900'],
       }
   );
   const page = await browser.newPage();
   describe('This gonna test sumpin\'', () => {
      let listNumber = 1;
      
      beforeAll(async () => {
         await page.goto('C:\\Users\\MG Redux\\grocerylist-resurrection\\index.html');
      });
   
      it('should add item typed in the input box to list item', async () => {
         await page.click('#inputbox');
         await page.type('#inputbox', 'MSG Flakes');
         await page.click('#submit');
         const listItemText1 = await page.$eval(`#listItem1`, (el) => el.textContent.slice(0, -6));
         expect(listItemText1).toBe('MSG Flakes');

         // expect(`span_${listNumber}`)

      })

   });
   
})();