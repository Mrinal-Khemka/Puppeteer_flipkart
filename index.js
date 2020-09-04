const puppeteer = require('puppeteer');

(async () => {
    const flipkart_URL='https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431';
    // const browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 400
    // });
  const browser=await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(flipkart_URL, { waitUntil: 'networkidle0' });
   await page.waitFor('#container');
   await page.waitFor(() => document.querySelector('#container'));
  let data = await page.evaluate(() => {

    let checkProduct;
    if(document.querySelector('div[class="_3zs-NH wvj5kH"]')!==null)
    {
        checkProduct="Out of stock";
    }
    else{
      checkProduct="In stock";
    }

    return {
      checkProduct
    }

  });
  console.log(data.checkProduct);

  await browser.close();
})();
