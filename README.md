# Famy
Social media interaction simulation
## Heading ##
The product is a social media life simulation.

## Sub Heading ## 
The customers will be allowed to establish life simulated chat with other users.

## Problemmatic situation ##
As a professional developpers and real gamers we consider that some people are getting bored by using daily chat applications without getting any returned true value.
Sometimes we discover that passing time on chat rooms applications is a waste of time.
User's need to gain real valued material not just a virtual experience.  

## Description ##
The idea of this project consists on allowing users to establish a life simuated chat in a gamer_like environment.
Other than typical system chat rooms, we allow users to win gifts like e-cards. As a user you can buy PayPal cards or Amazone cards with the tokens increasing by your time connection.

## Purpose ## 
.its a less serious space
.you can interact with people without any culture barrieres
.its a space for introvert to mingle and to interact with people with shared interest.  
.Allow users to build friendship relations with each other.
.Allow users to win real stuffs like e-cards by staying online the maximum time throught the application.

##  Documentation ##  Steps to guide developers throught the code and make the readability easier.

// Install your dependencies use the command $ npm install in your terminal inside your repo.

// Run the command $ npm run react to transpile jsx extentions.
// Run the command $ npm start to launch the server connected on port 3000.
// Don't make any changes on the module "webpack.config.js" 

You can visualise the UI on your browser on "http://locahost:3000"

- As a first step, as a user you are allowed to create an account with filling certain informations in the user interface.
For the confidentiality of your data we use hight capacity of encrypting certain data, you can check "signup.jsx" which is the first component in the application.

- After making an account, you will be rendered to another component "signup0.jsx" responsible for selecting one single avatar in the chat room.
"chars.jsx" the component responsible to render the main characters inside the room.

- For the user authentication we use a process to secure your personal data, you can check the "login.jsx" component.

- Welcome to the life chat simulation. 
PS : As a user you should click on your avatar character and after that you can move around the map using the gaming_buttons:
 
{
	z : move up,
	s : move down,
	q : move left,
	d : move right
}

- As a user you can interact with other connected users to start a live conversation, if you click on different users that means you have already sent an invitation request from x to y.
Go throught the files "simulation.jsx", "Mainchars.jsx" "invitations.jsx", "chat.jsx" and "Friends.jsx" also you can check the file "game.js" in the repository Game which provide the user with a random position into the map.

- To win user's confidence, we provide you with a shop component in which you can buy stuffs using M-J tokens if you did have the required price for each element.
switch to the shop component "shop.jsx"

- If you need some informations about the application you can contact us.
- If you have feedbacks concerning the application you can inform us by sending us a text message.
You can check "aboutUs.jsx" and thank you for your interest.

- Concerning the backend side we were using express and mongoose technologies to interact with the frontend.
- In the folder "db" you can find mongoose connection and all the collections used to store user's data.
- In the file "server.js" we handle all the http requests using axios. 