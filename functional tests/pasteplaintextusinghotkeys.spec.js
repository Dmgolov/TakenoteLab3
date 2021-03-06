// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('paste plain text using hotkeys', function() {
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
  it('paste plain text using hotkeys', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1116, 636)
    await driver.findElement(By.linkText("View Demo")).click()
    await driver.findElement(By.css(".action-button")).click()
    await driver.findElement(By.css(".CodeMirror-line")).click()
    await driver.findElement(By.css("textarea")).sendKeys("{KEY_CONTROL}v{KEY_CONTROL}")
    await driver.findElement(By.css(".note-menu-bar-button:nth-child(2) > svg")).click()
    {
      const element = await driver.findElement(By.css(".note-menu-bar-button:nth-child(2) > svg"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
  })
})
