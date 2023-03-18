class Login {
    #password
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.#password = password;
    }

    loginSuccess(username, password) {
        if (username == this.username && password == this.#password){
            console.log("Login Successful");
        } else {
            console.log("Try again");
        }
    }

    getPassword(){
         return this.#password;
    }

    setPassword(newPassword){
        this.#password = newPassword;
    }
}

class Admin extends Login{
    constructor (username, password) {
        super (username, password)
    }
    removeUser(userId){
        console.log("removed")
    }
}

class User extends Login{
    constructor(userId, username, password){
        super(username, password);
        this.userId = userId;
    }
    activity(){
        console.log("done")
    }
}

const a1 = new Admin("Ram", "6484");
const u1 = new User("01", "krishna", "3362")
console.log(a1.getPassword())

const p1 = new Login("Swatantra", "swatty", "1262716");
const p2 = new Login("Hero", "HVired", "2663232");

p1.loginSuccess("swatty", "1262716"); // Login Successful
p1.loginSuccess("Hvred", "1266323"); // Try again
console.log(p1.password); // 1262716
console.log(p2.password); // 2663232
console.log(p1.getPassword());
p1.setPassword("123")
console.log(p1.getPassword());
