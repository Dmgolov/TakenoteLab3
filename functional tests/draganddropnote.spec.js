// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('drag and drop note', function() {
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
  it('drag and drop note', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1116, 636)
    await driver.findElement(By.linkText("View Demo")).click()
    await driver.findElement(By.css(".category-button > svg")).click()
    await driver.findElement(By.css(".category-form > input")).sendKeys("d1")
    await driver.findElement(By.css(".category-form > input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".action-button > span")).click()
    await driver.findElement(By.css("textarea")).sendKeys("d2")
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2) > svg")).click()
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2)")).click()
  })
})