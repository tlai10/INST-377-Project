# INST 377 Project
 This repository is created for the group project in INST 377
Our group decided to work with Maryland's Prince George's County voting information and attempt to create an informative prototype webpage allowing users to use an interactive ballot that also presents information about the contents of a ballot measure.

Users viewing the page will also be able to get a better understanding of how elections work based on at least one embedded feature made available from GitHub user Nicky Case (ncase) and https://ncase.me/ballot/.

Links were generated with multiple resources including Google maps and ballotpedia.org.

Users can view polling places and can choose an interactive ballot based on polling place, as there are different things to be voted on depending on district/precinct.

Ideally a user would be able to use the webpage to understand what their voting options are, better understand how their vote counts, and be able to navigate to their polling place through links generated.

PGC_Election_Group

The topic of this project is voting in Prince George’s County (PGC) elections, but the purpose is to help prepare voters with general information and digital ballots that are more informative and helpful in assisting the preparation of users with limited accessibility intending to vote. Users could ideally give feedback related to ballot errors, confusing questions, or general comments. People concerned with these issues include citizens who are going to vote, new and inexperienced voters, and people with low political literacy. For purposes of narrowing our scope and making something that is actually used, our stakeholders can be more directly defined as PGC citizens that intend to vote, but are not sure what their options are.

Link to User Manual:
https://docs.google.com/document/d/1cLMq8jR0l8AG-hz8K_ZQ-W1nrwzWtYoeufdQzZRSvDE/edit#

Link to Developer Manual: 
https://docs.google.com/document/d/1Yo4UDBcLPntDAEJHiYOgFyC4TR3Ws8pWORY2qPcRz0c/edit

Link to Heroku site:
https://intense-basin-08466.herokuapp.com/index.html

Target Browsers:

We expect users of our website to be using browsers on laptops. This means that laptops are the target devices. Users who are on a laptop should use browsers such as Firefox, Google Chrome or safari. These are the best working browsers compatible with a laptop. Internet Explorer 8 and 9 are a little out of date. We have styled our CSS so that the display and functionalities of our website can work for these browsers.

Developers Manual:

Once you have cloned the repository, here are the instructions to get the website running in a local environment:

1. Open up a terminal in your computer.

2. Navigate within terminal to the folder that the repository is held in

3. Type npm install --- save node-fetch. This only needs to be done on the first run of the server.

4. Type npm start. Thiw will start the server and allow the website to be run.

5. Now you can access the website. You will see a prompt in the terminal that says "Example app listening on port 5000!"

6. Navigate to a Google Chrome browser and type in "localhost:5000" and you should see a working version of the website. When finished, hit ctr-C to end. 
Some Organizational Notes:

For Heroku:

1. Open up a terminal in your computer.

2. Nevigate with terminal to the folder that the repository is held in

3. Type heroku login

4. Type heroku open to open the application.

5. If changes has made, type git add. --> git commit -m "" --> git push heroku master, to push the changes, so the webpage will display based on the changes you made. 

User Manual: 

Home Page:
This application can be used to find all of the speed cameras in any district of PG County and provide detailed information on all of these cameras.

1. On the "Home" page, navigate to the "Dropdown" button and click on the button to open a selection of districts.
2. Click on the district that you want to find speed cameras in.
3. Click on the "Select District" button.
4. Scroll down and look for camera objects on the map.
5. Click on the points to see more detailed information such as the address, speed limit on the road, and the speed where the camera will take photos.

About Page: 
The about page provides background information on speed cameras in Prince George’s County. It addresses the problems that speed cameras create for drivers and recent legislation passed in PG County regarding the increase in cameras around the area. It also explains the purpose and goals of our project as well as its intended impact on the overall community.


Documentation Page:
The Documentation Page serves as a general and easy guide for new users to our system. On this page, users can see a general guide for each of the pages on the system. The 'Home' page is the only section to include a walk-through since the other two consist of text only.



Libraries and their dependencies

Leaflet - Leaflet is a open source JavaScript library used to build web mapping applications

node.js - This is the library that allowed us to build the web server for our website. We chose this library because it was the recommended one, and it somes with powerful tools like express, that make managing the framework a lot more feasible.

express - Express is a web application wirefram by node.js. This is what helps us organize the back end our application on the server side. Specific things that express does for our site ishandling requests and views.

Fetch - fetch allows one to make network requests, with the use of promises, to enable a clean API. We primarily used fetch as it we were able to practice a lot with it in class. This practice made us confident that we could use fetch to obtain the data we needed to for the purpose of the assignment.

Heroku - Heroku is the application that we are using to host our website. This was fairly simple for us to use, making it the perfect host for the purpose of the assignment. Additionally, this was a recommended service.
