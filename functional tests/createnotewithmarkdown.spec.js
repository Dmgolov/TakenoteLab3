// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('create note with markdown', function() {
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
  it('create note with markdown', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect(1121, 641)
    await driver.findElement(By.linkText("View Demo")).click()
    await driver.findElement(By.css(".action-button > span")).click()
    await driver.findElement(By.css(".CodeMirror-line")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css("textarea")).sendKeys("\\n# h1 Heading 8-)\\n## h2 Heading\\n### h3 Heading\\n#### h4 Heading\\n##### h5 Heading\\n###### h6 Heading\\n")
    await driver.findElement(By.css("path:nth-child(3)")).click()
    await driver.findElement(By.css(".note-menu-bar-button:nth-child(1) circle")).click()
  })
})
