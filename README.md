# React-native
#### Notice!
This react native application is now developed to it's final version, any changes made in the future will be written in the Updates section.

## Functionality

This React Native appplication shows a number of examples on how to manage data inside of a mobile application using different technologies such as a nosql database created using flask and hosted in a mongoDB server, a Django REST API which serves as a user management tool, this enables the user to create profiles, log in and even have it's own local storage space. The interface is designed in a minimalistic maner and it's intended to work primarily as an example on how to manage, present and understand data in the future. 

## Requirements
1. Android Studio
2. An Android Emulator
3. Node JS correctly Installed
4. Git installed
5. Check the docs to make sure all the modules are correctly installed

This Application was created using the React Native framework which can be used once we have installed node.js by using the commands `npm`

To start a React Native project we simply run the following command in our command prompt:

`npx react-native init <project's name>`


## Quick start
First we need to clone this repo by using the following command inside of our desired folder:

`git clone origin https://github.com/david-trejo-armenta/react-native.git`

Then we make sure all the files were cloned correctly to our local repository and enter the following command:

`npm install`

This will install all of the dependecies and modules neede by the application to start.
To initialize our android application we simply go to our cmd prompt and enter the following command:


`npm run android`

## Technologies

React native application, this application works with a Django API and a MongoDB API, the Django rest API manages the user sessions and information 
and the MongoDB API stores, manages and edits a set of badges that display a structure of information.

### Versions

|   Techology   |    Version    |
| ------------- |:-------------:|
|    React      |    17.0.1     |
| React native  |    0.64.2     | 
|    Django     |    3.2.4      |
|     Flask     |    2.0.1      |
|    MongoDB    |   3.11.4      |
|  JavaScript   |ECMAScript 2021|

## Modules

The react native modules used to develop this application and it's versions can be found in 

[package.json](./package.json)

### Versions

| Modules                                        | Version      |
| ---------------------------------------------- |:-------------:|
|  @react-native-async-storage/async-storage     |   ^1.15.5     |
|  @react-native-community/masked-view           |   ^0.1.11     |
|  @react-navigation/bottom-tabs                 |   ^6.0.1      |
|  @react-navigation/material-bottom-tabs        |   ^6.0.1      |
|  @react-navigation/native                      |   ^6.0.1      |
|  @react-navigation/stack                       |   ^6.0.1      |
|  react                                         |   17.0.1      |
|  react-native                                  |   0.64.2      |
|  react-native-gesture-handler                  |   ^1.10.3     |
|  react-native-image-picker                     |   ^4.0.6      |
|  react-native-paper                            |   ^4.9.2      |
|  react-native-reanimated                       |   ^2.2.0      |
|  react-native-safe-area-context                |   ^3.2.0      |
|  react-native-screens                          |   ^3.5.0      |
|  react-native-vector-icons                     |   ^8.1.0      |

#### Notice!

To install these modules we simply write `npm install` followed by the Modules name in our cmd promt



This Application was developed in the summer of 2021 during the pandemic.

The images in the app were downloaded from Pexels and Icons8

The color palette can be found in the file Colors in the following file

[Colors.js](./src/res/Colors.js)

