# Weather App

See it live: [Weather App](https://soft-blancmange-2112d3.netlify.app/)

## Description
A weather app which takes a city as user input and returns current weather conditions in that city. Two separate API calls are made to achieve this result. App also uses LocalStorage to store the last city the user queried in the browser.

## Background & Process
This project was based on a project from a JS course that I took online. I then went ahead and re-coded the project on my own. While the original used bootstrap only partially, I decided go all-in with bootstrap in my version. I ended up using a bootstrap card for the UI as I felt it went well with the goal of the project. One of the things I especially enjoyed in this project is making the two API calls to get first city and then weather info. The second API relied on the first one for city code, so it was necessary to do them in that particular order. I gained valuable practice in doing multiple API calls and handling them with Async/Await functions. Adding a bit of localStorage functionality was a nice little bonus, so that the app remembers the last city the user looked up the weather in and automatically displays this information the next time the user loads the app.

## Technologies
The current version of this project was done with:
* HTML 
* Bootstrap (with a little bit of external CSS)
* JavaScript
* Fetch API with Async Await
* LocalStorage API

## State of Completion
Completed.

## Learning Lessons & Challenges
### Multiple API calls with Async/Await
Probably the trickiest thing in this project was handling multiple API calls with Async/Await. This was a useful learning experience. It also taught be how to create an App and get an API key on an API platform (in this case, AccuWeather.com)


## Summary
A great little project which was a lot of fun to do!




