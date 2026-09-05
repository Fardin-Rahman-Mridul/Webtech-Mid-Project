//==============================
// Variables
//==============================

var schoolName = "ABC High School";
var totalStudents = 1200;
var currentYear = new Date().getFullYear();

//==============================
// Array
//==============================

var clubs = [
    "Science Club",
    "Debate Club",
    "Sports Club",
    "ICT Club",
    "Cultural Club"
];

//==============================
// Display Clubs
//==============================

window.onload = function () {

    var clubList = document.getElementById("clubList");

    if (clubList != null) {

        for (var i = 0; i < clubs.length; i++) {

            var li = document.createElement("li");

            li.textContent = clubs[i];

            clubList.appendChild(li);
        }
    }

    showDateTime();
};

//==============================
// Date & Time
//==============================

function showDateTime() {

    var d = new Date();

    var date = d.toLocaleString();

    var x = document.getElementById("datetime");

    if (x != null) {

        x.innerHTML = date;
    }
}

//==============================
// Welcome Alert
//==============================

function showWelcome() {

    alert("Welcome to " + schoolName);
}

//==============================
// Change Theme
//==============================

function changeTheme() {

    var body = document.body;

    if (body.style.backgroundColor == "black") {

        body.style.backgroundColor = "#f5f5f5";
        body.style.color = "black";

    }

    else {

        body.style.backgroundColor = "black";
        body.style.color = "white";

    }

}

//==============================
// Calculate Age
//==============================

function calculateAge() {

    var dob = document.getElementById("dob").value;

    if (dob == "") {

        return 0;
    }

    var birth = new Date(dob);

    var today = new Date();

    var age = today.getFullYear() - birth.getFullYear();

    return age;
}

//==============================
// Clear Form
//==============================

function clearForm() {

    var form = document.getElementById("admissionForm");

    if (form != null) {

        form.reset();
    }

}

//==============================
// Form Validation
//==============================

var form = document.getElementById("admissionForm");

if (form != null) {

form.addEventListener("submit", function(e){

e.preventDefault();

var name = document.getElementById("studentName").value.trim();

var phone = document.getElementById("phone").value.trim();

var email = document.getElementById("email").value.trim();

var password = document.getElementById("password").value;

var confirmPassword = document.getElementById("confirmPassword").value;

var message = document.getElementById("message");

//==============================
// String Operations
//==============================

name = name.toUpperCase();

console.log(name);

console.log(name.length);

//==============================
// Empty Validation
//==============================

if(name==""){

message.innerHTML="Student Name is Required";

return;

}

//==============================
// Email Validation
//==============================

if(email.indexOf("@")==-1){

message.innerHTML="Invalid Email";

return;

}

//==============================
// Phone Validation
//==============================

if(phone.length!=11){

message.innerHTML="Phone Number must be 11 digits";

return;

}

//==============================
// Password Validation
//==============================

if(password.length<6){

message.innerHTML="Password must be at least 6 characters";

return;

}

//==============================
// Confirm Password
//==============================

if(password!=confirmPassword){

message.innerHTML="Passwords do not match";

return;

}

//==============================
// Type Casting
//==============================

var age = Number(calculateAge());

//==============================
// If Else
//==============================

if(age<5){

message.innerHTML="Not Eligible for Admission";

}

else{

message.innerHTML="Eligible for Admission";

}

});

}

//==============================
// Event Listener
//==============================

var welcomeBtn = document.querySelector("#welcome");

if(welcomeBtn!=null){

welcomeBtn.addEventListener("mouseover",function(){

welcomeBtn.style.color="red";

});

}

//==============================
// Keyup Event
//==============================

var student=document.getElementById("studentName");

if(student!=null){

student.addEventListener("keyup",function(){

//student.value=student.value.toUpperCase();

});

}

//==============================
// Dynamic Operation
// Add New Club
//==============================

function addClub(){

clubs.push("Photography Club");

var list=document.getElementById("clubList");

if(list!=null){

list.innerHTML="";

for(var i=0;i<clubs.length;i++){

var li=document.createElement("li");

li.innerHTML=clubs[i];

list.appendChild(li);

}

}

}

//==============================
// Dynamic Operation
// Update Welcome Text
//==============================

function updateWelcome(){

var w=document.getElementById("welcome");

if(w!=null){

w.innerHTML="Welcome to ABC High School Website";

}

}