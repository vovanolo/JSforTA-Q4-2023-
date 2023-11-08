alert ('Maksymiv');


let catName = 'Lola';
let dogName = 'Archie';
alert(catName);
        
catName = dogName;
alert(catName);



let myName = "Nata";
let mySurname = "Maksymiv";
let myStudyGroup = "JS for TA";
let myBirthYear = 1985;
let isMarried = true;
let arbitraryFirst  = null;
let arbitrarySecond;

console.log(myBirthYear);
console.log(isMarried);
console.log(myName);
console.log(mySurname);
console.log(myStudyGroup);
console.log(typeof arbitraryFirst);
console.log(typeof arbitrarySecond);


    

const myObject = {
String: "myFawString",
Number: 100,
Boolean: true,
Undefined: undefined,
Null: null
};

console.log (typeof myObject);



let isAdult = confirm("Are you of legal age?");

console.log(isAdult);



login = prompt("Please, enter your login here", "Login");
email = prompt("Please, enter your email here", "Email");
password = prompt("Please, enter the password here", "Password");
confirm("Dear " + login +", your email is "+ email + ", your password is " + password +"." );

 

let minute = prompt("Enter a number of minutes to convert into seconds:");
            
let second = minute * 60;
alert(second);

let day = prompt("Enter a number of days to convert into seconds:");
second = day * 24 * 60 * 60;
alert(second);

let month = prompt("Enter a number of months to convert into seconds:");
second = month * 30 * 24 * 60 * 60;
alert(second);

