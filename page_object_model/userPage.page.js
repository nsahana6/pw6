export default class logout{
    constructor(page){
        this.page=page
        this.userMenueButton=page.getByAltText('profile picture')
        this.logout=page.getByRole("menuitem",{name:"Logout"})
    }
    async logoutaction(){
        // await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await this.userMenueButton.click()
        await this.logout.waitFor({ state: "visible", timeout: 5000 });
        await this.logout.click()
    }
    
}