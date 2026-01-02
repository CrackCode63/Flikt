This file contain three files:
1. index.html
2. style.css
3. script.js

1. index.html
this file contain the html code for login and register page.
if you are not a existing user then click to register button.
Aready users can direct login to the page by simple demo userid/phone numbers.


2. style.css

This files contain styling of html structure of website.
Using some main styling Property like:
hover
width
height
background
color
border etc...

3. script.js

This file adds functionality to the the login & regiter page
Clickable buttons
click on register and login button to switch between these forms
there is no specific userid/phone number is used to verify the details. Any userid/phone number and password treats as correct since there is no database is used.
It can be acheived easily by comparing it
enteredUserid == "63XXXXX26";
password == "Abhiscy";

Some limitations are set such as
Phone number should be 10 digits
Password can contain only 6 character only
etc..

Validation is applied using js that every field is required to fill all details and === operator is used to compare the entered details with its data type.
Alert is used to display the msg which action happens during user engagement.
