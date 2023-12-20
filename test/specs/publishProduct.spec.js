const dashboardScreen = require("../screens/dashboard.screen");
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const productsScreen = require("../screens/products.screen");
const data = require("../fixture/user.json")


describe('Admin Painel', () => {
    it('Should publish new products ', async() => {
        let nome = 'Camiseta Legal pra caramba'
        let description = 'Produtinho esperto e muito legal, só não tem garantia'
        let valor = '80'

        await homeScreen.goToLogin()
        await loginScreen.loginStore(data[0].user,data[0].password)
        await dashboardScreen.goToProducts()
        await productsScreen.publishNewProduct(nome,description,valor)
        
        expect(await productsScreen.snackBarAlert()).toEqual('Product published')

        
        setTimeout(()=>{
            console.log('abriu')
        },1000)
        
    });
});