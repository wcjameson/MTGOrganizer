# MTGOrganizer

![image](/mtg-organizer/img/Squee.jpg)

#### A tool to help manage your Magic the Gathering collection

# By William Jameson

## Technologies Used

* Node.js
* Webpack
* React
* Redux
* Firebase
* Firestore
* Bootstrap

## Description

This webapp lets the user manage their Magic the Gathering collection, with CRUD functionality, storing input in a database for future reference.
Keep track of your collection of rares, or whatever cards you'd like. 

## Setup/Installation Requirements

* _clone repository from https://github.com/wcjameson/MTGOrganizer
* _navigate to the project directory mtg-organizer in your terminal/command line
* _open in your code editor of choice
* _enter `npm install` to install dependencies
* _connect and configure project to use Firebase and Firestore
* _do this by navigating to https://firebase.google.com/, creating an account, and following the instructions
* _alternatively follow this link for a step by step guide you through the process 
* _https://www.learnhowtoprogram.com/react/react-with-nosql/setting-up-a-firebase-project
* _ you will need to create a .env file to store defined values of your config object
* _for example your .env file should have `REACT_APP_FIREBASE_API_KEY = "YOUR_API_KEY_HERE"` etc.
* _enter `npm run start` to launch program
* _the site is also currently live at https://mtg-organizer-d8c20.firebaseapp.com/

## Component Diagram

![image](/mtg-organizer\img\MTGComponentDiagram.jpg)

## Known Bugs

* Currently anyone that signs up for an account has access to the card database
* Will need to add authorization
* Is a work in progress
* If you want to use any part of this, find a bug, or just have questions, shoot me an email. 

## License 

_MIT License_

Copyright (c) _2022_ _William Jameson_

## Contact Information

williamjameson90@gmail.com