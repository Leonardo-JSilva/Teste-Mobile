
class productsScreen {
    
   
    get addProductButton(){return $('id=addProductButton')}
    get typeProductButton(){return $('~Change product type')}
    get nameProduct(){return $('id=editText')}
    get addDescriptionProduct(){return $('~Edit product')}
    get descriptionProduct(){return $('id=visualEditor')}
    get backIcon(){return $('~Navigate up')}
    get addPriceProduct(){return $('android=new UiSelector().text("Add price").className("android.widget.TextView")')}
    get priceProduct(){return $('android=new UiSelector().text("0").className("android.widget.EditText")')}
    get forcePriceProduct(){return $('android=new UiSelector().text("Regular price").className("android.widget.EditText")')}
    get forceTypePriceProduct(){return $('android=new UiSelector().text("0").className("android.widget.EditText")')}
    get btnPublish(){return $('id=menu_done')}
    get snackBar(){return $('id=snackbar_text')}


   
    async addNewProduct(){
        return await this.addProductButton.click()
    }
    async typeNewProduct(){
        return await this.typeProductButton.click()
    }
    async typeNameProduct(nome){
        return await this.nameProduct.setValue(nome)
    }
    async goToDescriptionProduct(){
        return await this.addDescriptionProduct.click()
    }
    async typeDescriptionProduct(description){
        return await this.descriptionProduct.setValue(description)
    }
    async getBack(){
        return await this.backIcon.click()
    }
    async goToPriceProduct(){
        return await this.addPriceProduct.click()
    }
    async tapPriceProduct(){
        await this.priceProduct.click()
    }
    async typePriceProduct(valor){
        await this.forceTypePriceProduct.click()
        await this.forceTypePriceProduct.clearValue()
        return await this.forcePriceProduct.setValue(valor)
    }
    async publishProduct(){
        await this.btnPublish.click()
    }
    async snackBarAlert(){
        await this.snackBar.waitForExist()
        return await this.snackBar.getText()
    }
    async publishNewProduct(nome,description,valor){
        await this.addNewProduct()
        await this.typeNewProduct()
        await this.typeNameProduct(nome)
        await this.goToDescriptionProduct()
        await this.typeDescriptionProduct(description)
        await this.getBack()
        await this.goToPriceProduct()
        await this.tapPriceProduct()
        await this.typePriceProduct(valor)
        await this.getBack()
        await this.publishProduct()

    }
    
}
module.exports = new productsScreen()