//    class homepage{
//     constructor(page){
//         this.page=page
//         // this.username=page.getByRole('textbox', { name: 'Username' })
//         this.username=page.getByPlaceholder("Username")
//         this.password=page.getByRole('textbox', { name: 'Password' })
//         this.login=page.getByRole("button",{name:"Login"})

//     }
//     /**
//      * to login in to orange hrm application 
//      * @param {*} url 
//      * @param {*} username 
//      * @param {*} password 
//      * @param {*} login 
//      */
//  async adminlogin(url,username,password,login){
//   await  this.page.goto(url)
//   await this.username.fill(username)
//   await this.password.fill(password)
//   await this.login.click(login)

//  }

// }
// export default homepage



class homepage {
  constructor(page) {
    this.page = page;
    // this.username = page.getByPlaceholder("Username");
    this.username = page.getByRole('textbox', { name: 'Username' })
    this.password = page.getByRole('textbox', { name: 'Password' })
    this.login = page.getByRole('button', { name: 'Login' })

    
    // this.password = page.getByPlaceholder("Password");
    this.errorpopup=page.getByText('Invalid credentials')
    // this.login = page.getByRole("button", { name: "Login" });
  }

  /**
   * Login to OrangeHRM application
   */
  async adminlogin(username, password) {
    await this.page.goto(process.env.BASE_URL + "/web/index.php/auth/login");
    
    await this.username.fill(username);
  
    await this.password.fill(password);
    await this.login.click();  
  }
}

export default homepage;

