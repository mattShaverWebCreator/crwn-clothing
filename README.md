## Crwn Clothing App

This app was created using ReactJS, Redux, Firebase, Redux Sagas, 
React Hooks, Styled Components.

### Features:

1. Ability to add items to cart
2. Ability to remove items at checkout
3. Ability to alter quantity of items at checkout
4. Cart Window that allows viewing cart items without rendering new      component page
5. Persistent Sign In, Sign Out With Google Auth, Email/Pass
6. Pulls in Items Data from Firebase
7. Supports Multiple Collections of Items

### Not Complete Yet: 

1. Contact Form

This Repo is seperated with a release, development branch coming off of master. The release, development branches deploy to Heroku. 

Once a development cycle is completed, the release branch is rebased with development.

The release branch, development branch automatically deploy to Heroku whenever new commits are made. 

Development: https://crwn-clothing-devapp.herokuapp.com/
Release: https://crwn-clothing-prodapp.herokuapp.com/

The Development branch may sometimes have errors present. 

While Stripe is currently configured, test credentials must be used
as Stripe is currently not fully active. 