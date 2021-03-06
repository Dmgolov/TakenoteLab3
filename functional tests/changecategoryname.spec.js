// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('change category name ', function() {
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
  it('change category name ', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1126, 646)
    await driver.findElement(By.linkText("View Demo")).click()
    await driver.findElement(By.css(".category-button > svg")).click()
    await driver.findElement(By.css(".category-form > input")).sendKeys("test 1")
    await driver.findElement(By.css(".category-form > input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2) > svg")).click()
    {
      const element = await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2) > svg"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".category-list-each:nth-child(2) .context-menu-action")).click()
    await driver.findElement(By.css(".nav-item:nth-child(1)")).click()
    await driver.findElement(By.css(".category-edit")).sendKeys("test 2")
    await driver.findElement(By.css(".category-edit")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2) > svg")).click()
  })
})
