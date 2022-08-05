
class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
  }


logon(username, password) {
  if(username === this.username && password === this.password){
    return true;
  } return false;
}


}
  
  module.exports = User 