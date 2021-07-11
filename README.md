# Code Quiz

> Outline a brief description of your project.
> Live demo [_here_](https://kabaothao.github.io/Code-Quiz/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- This project is designed to complete a assessment as part of the interview process. Typically a assessment includes both multiple-choice questions and interactive coding challenges.
- What is the purpose of your project?
  The purpose of this project is to build a timed coding quiz with multiple-choice questions.
- Why did you undertake it?
  To run in the browser will feature dynamically updated HTML and CSS powered by Javascript code.

<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used

- HTML5
- CSS
- Javascript
- Visual Studio

## Features

List the ready features here:

- Provided with starter code

## Screenshots

![Example screenshot](.\Assets\codequizimage.PNG)

<!-- If you have screenshots you'd like to share, include them here. -->

## Setup

What are the project requirements/dependencies? Where are they listed? Where is it located? Proceed to describe how to install / setup one's local environment / get started with the project.

- The URL of the deployed application.
- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Usage

How does one go about using it?

- To create a clean, polished, and responsive user interface.

For example:

let timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
if (timeEl) {
// Sets interval in variable
let timerInterval = setInterval(function () {
secondsLeft--;
//update timeEl text
timeEl.textContent = secondsLeft + " seconds";

      if (secondsLeft === 0) {
        // Stops execution of action at set interval.
        clearInterval(timerInterval);
      }
    }, 1000);

}
}

setTime();

//navigate from one html file to another html file
function navigateFromTo(from, to) {
let theURL = window.location.pathname;
window.location.href = theURL.replace(from, to);
}

## Acknowledgements

Give credit here.

- This project was inspired by Trilogy Education.
- Many thanks to Trilogy Education.

## Contact

Created by [@kabaothao](https://github.com/kabaothao) - feel free to contact me!

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
