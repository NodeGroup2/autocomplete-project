# Autocomplete project

## Objectives
- Word finder with autocomplete
- Suggestions appear dynamically
- Testing on front-end and back-end
- Decent code coverage

## Stretch goals
- Modularize code
- Host the project on heroku
- Set up Continuous integration with Travis, and code coverage using codeCov and istanbul
- Get a full-suite of github repo badges in the readme

## Project plan
![Project plan](/project-plan.jpg)

## Application flow
- Read full file (for efficiency)
- Key stroke event
- Event emitter
- Search read data
- Match with prefix
- Update drop-down list

Client request: key stroke  
Server response: autocomplete suggestions

## Folder structure
- public
  - index.html
  - styles.css
- src
  - dictionary.txt
  - modules (.js)
- tests
- server.js

## Front-end design
- Text input box
- Search button
- Drop-down menu

## Testing
- Front-end using qUnit
- Back-end using Tape
- Unit testing

## Wednesday
- Make project plan
- Research data structures

## Thursday
## Friday
