const { Builder, Capabilities, By } = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await (await driver).get('http://127.0.0.1:5500/movie-list/index.html');
})

afterAll(async () => {
  await (await driver).quit()
})

// test('verify movie heading exists', async () => {
//   const heading = await driver.findElement(By.xpath('//h1[text()="Movie List"]'));
//   expect(await heading.isDisplayed()).toBeTruthy();
// })

test('Should be able to add movie', async () => {
  await driver.findElement(By.xpath('//input')).sendKeys('Attack of the Killer Tomatoes');
  await driver.findElement(By.xpath('//button')).click();
  const movie = await driver.findElement(By.xpath('//li/span[text()="Attack of the Killer Tomatoes"]'))
  expect(await movie.isDisplayed()).toBeTruthy();
  await driver.sleep(3000);
})