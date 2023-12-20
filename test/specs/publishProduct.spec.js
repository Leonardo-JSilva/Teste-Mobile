const dashboardScreen = require("../screens/dashboard.screen");
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const productsScreen = require("../screens/products.screen");
const data = require("../fixture/user.json")


describe('Admin Painel', () => {
    it('Should publish new products ', async() => {
        let nome = 'Camiseta vermelha'
        let description = 'Produto barato e de qualidade'
        let valor = '40'

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
