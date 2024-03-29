# bluHibiscus_quizApp

A quiz application that uses the opentdb quiz api to generate multiple choice questions and answers.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://github.com/jamesqquick)
![badge: W3schools](https://img.shields.io/badge/W3Schools-04AA6D.svg?style=for-the-badge&logo=W3Schools&logoColor=white)![badge: stackoverflow](https://img.shields.io/badge/Stack%20Overflow-F58025.svg?style=for-the-badge&logo=Stack-Overflow&logoColor=white)![badge: js](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)![badge:css](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)![badge:html](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)![badge:github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)![Pixabay Badge](https://img.shields.io/badge/Pixabay-2EC66D?logo=pixabay&logoColor=fff&style=plastic)![Mozilla Badge](https://img.shields.io/badge/Mozilla-000?logo=mozilla&logoColor=fff&style=plastic)

[A deployed version can be viewed here.](https://blunite.github.io/bluHibiscus_quizApp/)

---

## Contents

- [bluHibiscus_quizApp](#bluhibiscus_quizapp)
  - [Contents](#contents)
  - [About](#about)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Visuals](#visuals)
  - [Installation](#installation)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Challenges and Issue](#challenges-and-issue)
  - [Authors](#authors)
   - [Acknowledgements](#acknowledgements)
  - [Contact Information](#contact-information)

---

## About

The quiz application is timed and presents the user with random multiple-choice questions and answers. A response of "Correct" or "Incorrect" is thrown with alerts and a change in the choice background to reflect the user's answer choice. High scores rated can be tracked after the user enters a name. Scores are tracked using local storage web API.

---

## User Story

As a coding boot camp student
I WANT to take a quiz that is timed using javaScript fundamentals that store high scores,
so that I can track my progress and compare results to peers

---

## Acceptance Criteria

Given I am using a code quiz app
WHEN I click the start button
Then a timer starts and I am given a set of questions and choices
WHEN I answer a question
THEN another question is shown
When I choose the wrong answer
THEN time is taken and subtracted from the timer/clock
WHEN questions answered is complete or the timer is 0
THEN the game is over
WHEN the game is over
THEN I can save my player name and my score

---

## Visuals

![image-index](assets/blu_hibiscus_index_html.jpg)
![image-game](assets/blu_hibiscus_game_js.png)

---

## Installation

Go to GitHub.com and navigate to the main page of the repository. Then, click <> CODE, above the list of list of files. Then, copy the URL for the repository. Click the applicable clipboard for, HTTPS, SSH, or GitHub CLI. THEN, open Git Bash, and change the current working directory to the location where you want the cloned directory. THEN, type [git clone]. Then, paste the URL you copied [git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY]. THEN, press enter to create your local clone.

To clone the repo:

      git clone https://github.com/BluNite/bluHibiscus_quizApp.git

---

## License

License used for this project - MIT

- For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Contributing

To contribute to this application, create a pull request.
Here are the steps needed for doing that:

- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

Following a code review, your feature will be merged.

---

## Tests

---

## Challenges and Issue

---

I researched the encoding/decoding of strings. Sources searched were: Stack Overflow, W3 schools, Mozilla, and GitHub repos with this issue helped me to understand this problem in front-end development.
I might change the api encoding, the configuration is presently set for base64 encoding. It saved me a few lines of code doing this... I didn't need to call the btoa() function to encode to base64, and then to atob() to decode the string. Atob() and btoa() is to decode and encode base64 only... atob() stands for ASCII to base64 and base64 to ASCII btoa(). For now this works, but ASCII is limited in producing certain characters to string however, an improvement is noted.

---

## Authors

Made with :heart: by Nkenge Crowe (bluNite)

### Acknowledgements

- Professor Ron Erlih @Trilogy Columbia University Coding BootCamp Fu Foundation School of Engineering and Applied Science
- James Quick https://github.com/jamesqquick
  Build a Quiz App https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript
  GitHub.com open-source quiz projects (open-source examples of quiz applications)

---

## Contact Information

GitHub Username: BluNite
GitHub Email:ncrowe175@gmail.com
