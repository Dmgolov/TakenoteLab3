// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('mark multiple notes as favorite', function() {
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
  it('mark multiple notes as favorite', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1129, 649)
    await driver.findElement(By.linkText("View Demo")).click()
    await driver.findElement(By.css(".action-button > span")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css("textarea")).sendKeys("note 1")
    await driver.findElement(By.css("path:nth-child(3)")).click()
    await driver.findElement(By.css("nav:nth-child(1) > .note-menu-bar-button:nth-child(2) > svg")).click()
    await driver.findElement(By.css(".action-button")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css("textarea")).sendKeys("note 2")
    {
      const element = await driver.findElement(By.css(".note-menu-bar-button:nth-child(2) polyline:nth-child(2)"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css("path:nth-child(3)"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css("nav:nth-child(2) > .note-menu-bar-button:nth-child(2) > svg")).click()
    await driver.findElement(By.css("nav:nth-child(1) > .note-menu-bar-button:nth-child(2) > svg")).click()
    await driver.findElement(By.css(".action-button > span")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css("textarea")).sendKeys("note 3")
    await driver.findElement(By.css("path:nth-child(3)")).click()
    {
      const element = await driver.findElement(By.css("nav:nth-child(1) > .note-menu-bar-button:nth-child(2) > svg"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css(".note-menu-bar-button polygon"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css("nav:nth-child(1) > .note-menu-bar-button:nth-child(2) > svg")).click()
  })
})
