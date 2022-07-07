
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('draw button displays player section', async ()=> {
    await driver.findElement(By.id('draw')).click()
    const playerSection = await driver.findElement(By.id('choices'))
    const displayed = await playerSection.isDisplayed()
    expect(displayed).toBe(true)
})
test('clicking add duo displays player duo', async ()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const playerduo = await driver.findElement(By.id('player-duo'))
    await driver.sleep(3000)
    const displayed = await playerduo.isDisplayed()
    expect(displayed).toBe(true)
})