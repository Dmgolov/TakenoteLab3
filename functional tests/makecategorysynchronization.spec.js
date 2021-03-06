// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('make category synchronization', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('make category synchronization', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1126, 646)
    await driver.findElement(By.linkText("View Demo")).click()
    await driver.findElement(By.css(".category-button > svg")).click()
    await driver.findElement(By.css(".category-form > input")).sendKeys("cat no sync")
    await driver.findElement(By.css(".category-form > input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2)")).click()
  })
})
