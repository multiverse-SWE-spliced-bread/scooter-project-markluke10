const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {

  constructor (rejectNewRegistration, existingUser, scooterSession){
    //this.newUser = newUser;
    this.rejectNewRegistration = rejectNewRegistration;
    this.existingUser = existingUser
    this.scooterSession = scooterSession
   // this.newusers('Richard');
    this.showData(rejectNewRegistration,existingUser,scooterSession); //calling a method of the object 
  }


//Create a new user to be used with app 

showData(rejectNewRegistration, existingUser, scooterSession){
  console.log(rejectNewRegistration, existingUser, scooterSession);
}

newusers(username, password, age){
  console.log(username); // log name to console
}


// //   newusers(userName, password, age){
// //     vUr user = new User(username, password, age);
// //     this.newUser = user;
// N//     
// //   }
// 
}

// 1. Create new user object

let myUser = new User("mark", "1234", 40);

//console.log(myUser);

// 2. Create Scooter App

 let myNewScooterApp = new ScooterApp('Reg101', myUser, 'scooter session'); // this is an opbject

 // 3. print user from within scooter app

 console.log(`This is from the scooter class: ${myNewScooterApp.existingUser}`);

 console.log(`This is being called from the user object: ${myUser}`);

module.exports = ScooterApp;
