// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('create single note under category', function() {
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
  it('create single note under category', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1126, 646)
    await driver.findElement(By.linkText("View Demo")).click()
    await driver.findElement(By.css(".category-button > svg")).click()
    {
      const element = await driver.findElement(By.css(".category-button > svg"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".category-form > input")).sendKeys("notes1")
    await driver.findElement(By.css(".category-form > input")).sendKeys(Key.ENTER)
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2)")).click()
    await driver.findElement(By.css(".category-list-each:nth-child(3) > .category-list-name")).click()
    await driver.findElement(By.css(".action-button > span")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css("textarea")).sendKeys("123")
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2) > svg")).click()
    await driver.findElement(By.css(".active > .category-list-name")).click()
  })
})
