class dashboardScreen {
    
    get myStoreLogo(){return $('new UiSelector().text("My store").className("android.view.View")')}
    get subtitle(){return $('id=toolbar_subtitle')}
    get Product(){return $('id=products')}
    
    async goToProducts(){
        await this.Product.waitForExist({ timeout: 15000 })
        return await this.Product.click()
    }
    async confirmSubtitle(){
        return await this.subtitle.getText()
    }
    async myStoreLogo(){
        await this.myStoreLogo.waitForExist()
        return await this.myStoreLogo.isDisplayed()
    }
   
}
module.exports = new dashboardScreen()