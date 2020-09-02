const puppeteer = require('puppeteer');

(async () => {
    const flipkart_URL='https://www.flipkart.com/poco-m2-pro-green-greener-64-gb/p/itm5de3b6eb57ab4?pid=MOBFT7MKFHTAPDYD&lid=LSTMOBFT7MKFHTAPDYDLRJC1B&marketplace=FLIPKART&srno=s_1_7&otracker=search&otracker1=search&fm=SEARCH&iid=7498679b-ae7f-48d1-a775-4376731fe28b.MOBFT7MKFHTAPDYD.SEARCH&ppt=sp&ppn=sp&ssid=q2g0ggpogw0000001599051475381&qH=b83349d0f5338c62';
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