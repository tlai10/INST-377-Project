# INST 377 Project - Speed Camera Traps in PG County
This repository was created for the group project in INST 377 (0103) for Team 5 - Kyle Jackson, Edward Cheng, Tsun Lai, Emily Jia, Ian Dopsch, and Tarun Malik.

## Information Problem
We are attempting to address and bring attention to the negative effects of speed traps in Prince George’s County through creating a mapping application. This will provide the locations as well as posted and enforced speed limits at each camera. Our information problem evolved from our initial problem of simply increasing awareness of speed cameras because we realized that there were already applications in place to address this problem such as Google Maps and Waze.

## Stakeholders and Target Browsers
Our primary stakeholders are drivers in Prince George’s County. We further divided our stakeholders into subgroups including University of Maryland students, daily drivers, commercial drivers, and rideshare/taxi drivers. The specific subgroups attempt to address those that are most widely affected by hidden speed cameras in the county.

## How our Final System Addresses the Problem
While our system does provide similar solutions to existing systems such as Google Maps and Waze, we attempt to further inform our users of the purpose of our specific project. In particular through our about page, we provide background information on speed cameras in Prince George’s County as well as past and ongoing legislation regarding the continued implementation of cameras in the county. By keeping users up to date with what is happening in the area, we are able to keep users informed of both the benefits and dangers that speed cameras can pose to drivers.

## Target Browsers:

We expect users of our website to be using browsers on laptops. This means that laptops are the target devices. Users who are on a laptop should use browsers such as Firefox, Google Chrome or safari. These are the best working browsers compatible with a laptop. Internet Explorer 8 and 9 are a little out of date. We have styled our CSS so that the display and functionalities of our website can work for these browsers.

## Important Links:
[Link to User Manual as a Google Doc (can also be found in the 'docs' folder)](https://docs.google.com/document/d/1cLMq8jR0l8AG-hz8K_ZQ-W1nrwzWtYoeufdQzZRSvDE/edit#)

[Link to Developer Manual as a Google Doc (can also be found in the 'docs' folder)](https://docs.google.com/document/d/1Yo4UDBcLPntDAEJHiYOgFyC4TR3Ws8pWORY2qPcRz0c/edit?usp=sharing)

[Link to Final Report as a Google Doc (can also be found in the 'docs' folder)](https://docs.google.com/document/d/1w4GnI6qQ89Y5ZV0-3-qLQ7_EA2mqKeETamxbQIx2eiE/edit?usp=sharing)

[Link to Heroku site](https://intense-basin-08466.herokuapp.com/index.html)

## Developers Manual:

Once you have cloned the repository, here are the instructions to get the website running in a local environment:

1. Open up a terminal in your computer.

2. Navigate within terminal to the folder that the repository is held in

3. Type npm install --- save node-fetch. This only needs to be done on the first run of the server.

4. Type npm start. This will start the server and allow the website to be run.

5. Now you can access the website. You will see a prompt in the terminal that says "Example app listening on port 5000!"

6. Navigate to a Google Chrome browser and type in "localhost:5000" and you should see a working version of the website. When finished, hit ctrl-C to end. Some Organizational Notes:

### For Heroku:

1. Open up a terminal in your computer.

2. Navigate with terminal to the folder that the repository is held in.

3. Type heroku login.

4. Type heroku open to open the application.

5. If changes were made, type git add. --> git commit -m "" --> git push heroku master, to push the changes, so the webpage will display based on the changes you made.

### About our API's:

When selecting a district, our front-end makes a request to the back-end while also sending the currently selected option from the drop-down bar. The back-end then gets all of the data from the Prince George's County database and filters out the data based on what district was sent from the front-end. For the Leaflet map, the back-end will send an array containining arrays of [address, latitude, longitude, posted speed, enforced speed]. After the back-end sends a filtered array of arrays, the front-end will be able to use this data to populate the Leaflet map with markers that display the address and speeds. For the table, the back-end will send an array containing arrays of [address, posted speed, enforced speed]. Afterwards, the front-end will be able to populate a table using this array. Everytime a new district is selected, the Leaflet map will clear all markers and the table will empty itself of previously added entries. 
### Libraries and their dependencies:

Leaflet - Leaflet is an open source JavaScript library used to build web mapping applications

node.js - This is the library that allowed us to build the web server for our website. We chose this library because it was the recommended one, and it comes with powerful tools like express, that make managing the framework a lot more feasible.

express - Express is a web application wireframe by node.js. This is what helps us organize the back end our application on the server side. Specific things that express does for our site is handling requests and views.

Fetch - fetch allows one to make network requests, with the use of promises, to enable a clean API. We primarily used fetch as it we were able to practice a lot with it in class. This practice made us confident that we could use fetch to obtain the data we needed to for the purpose of the assignment.

Heroku - Heroku is the application that we are using to host our website. This was fairly simple for us to use, making it the perfect host for the purpose of the assignment. Additionally, this was a recommended service.
