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
  if (theURL.split("Code-Quiz/")[1] == "") {
    theURL += "index.html";
    console.log(theURL);
  }
  window.location.href = theURL.replace(from, to);
}

// Todo
// create a function to set questions and questions needs to show in your page
// do this later create af function math.random
let questionIndex = 0;
const questionnaire = [
  {
    Question: "Where do the Minnesota Vikings play?",
    Option1: "Target Center",
    Option2: "U.S. Bank Stadium",
    Option3: "Target Field",
    Option4: "Metrodome",
    Answer: "U.S. Bank Stadium",
  },
  {
    Question: "Where is the Minnesota state fair?",
    Option1: "Saint Paul",
    Option2: "Lauderdale",
    Option3: "Roseville",
    Option4: "Rochester",
    Answer: "Saint Paul",
  },
  {
    Question: "What is the Minnesota state bird?",
    Option1: "Robin",
    Option2: "Goose",
    Option3: "Loon",
    Option4: "Mallard",
    Answer: "Loon",
  },
  {
    Question: "What is lutefisk?",
    Option1: "Cod soaked in lye then boiled",
    Option2: "Bratwurst soaked in beer then grilled",
    Option3: "Grilled walleye from Lake Calhoun",
    Option4: "Minnesota steak tartare",
    Answer: "Cod soaked in lye then boiled",
  },
  {
    Question: "Where do you go to find Paul Bunyan and Babe the Blue Ox?",
    Option1: "Minneapolis",
    Option2: "Grand Marais",
    Option3: "Bemidji",
    Option4: "Brainerd",
    Answer: "Bemidji",
  },
  {
    Question: "What is the state fish of Minnesota?",
    Option1: "Trout",
    Option2: "Bass",
    Option3: "Bigmouth buffalo",
    Option4: "Walleye",
    Answer: "Walleye",
  },
  {
    Question: "Where is the state capital for Minnesota?",
    Option1: "Minneapolis",
    Option2: "Saint Paul",
    Option3: "Eagan",
    Option4: "Maplewood",
    Answer: "Saint Paul",
  },
  {
    Question: "How many floors are there in the Mall of America?",
    Option1: "3",
    Option2: "2",
    Option3: "6",
    Option4: "4",
    Answer: "4",
  },
];

//
let questionEl = document.querySelector(".question");
let aEl = document.querySelector(".a");
let bEl = document.querySelector(".b");
let cEl = document.querySelector(".c");
let dEl = document.querySelector(".d");
let resultEl = document.querySelector(".result");
let userScoresEl = document.getElementById("userScores");

// set the questions at the beginning
let reset = function () {
  //if questionE1 exist, then run the questions
  if (questionEl) {
    questionnaireIndex = 0;
    questionEl.textContent = questionnaire[questionIndex].Question;
    aEl.textContent = questionnaire[questionIndex].Option1;
    bEl.textContent = questionnaire[questionIndex].Option2;
    cEl.textContent = questionnaire[questionIndex].Option3;
    dEl.textContent = questionnaire[questionIndex].Option4;
  }
  if (userScoresEl) {
    //R
    let highscorers = JSON.parse(localStorage.getItem("users"));
    let listToShowOnTheFrontEnd = "";
    for (let i = 0; i < highscorers.length; i++) {
      //get player
      //get pts
      //repace seconds with pts
      listToShowOnTheFrontEnd +=
        highscorers[i].player +
        " " +
        highscorers[i].score.replace("seconds", "points") +
        "<br>";
    }
    userScoresEl.innerHTML = listToShowOnTheFrontEnd;
    console.log(highscorers);
  }
};

reset();

let getNextQuestion = function (option) {
  // when questionnaire length is 7 = 7 don't get the next question
  if (questionIndex == questionnaire.length - 1) {
    let userName = prompt("Please enter you name.");

    //get all the players and their scores from local storage
    let item = {
      player: userName,
      score: timeEl.textContent,
    };

    let users = JSON.parse(localStorage.getItem("users"));

    //if localstorage have players, then add to the existing lists
    if (users) {
      users.push(item);
      //if localstorage is empty, we will need to create a new list
    } else {
      users = [];
      users.push(item);
    }

    localStorage.setItem("users", JSON.stringify(users));
    // Go from questionnaire view  to highscore view
    navigateFromTo("questionnaire", "highscore");

    return;
  }
  if (
    questionnaire[questionIndex].Answer == questionnaire[questionIndex][option]
  ) {
    resultEl.textContent = "Correct!";
  } else {
    resultEl.textContent = "Wrong!";
    secondsLeft -= 5;
  }

  questionIndex++;
  questionEl.textContent = questionnaire[questionIndex].Question;
  aEl.textContent = questionnaire[questionIndex].Option1;
  bEl.textContent = questionnaire[questionIndex].Option2;
  cEl.textContent = questionnaire[questionIndex].Option3;
  dEl.textContent = questionnaire[questionIndex].Option4;
};

//Clear all existing scores from local storage
clearHighScores = function () {
  localStorage.clear();
  userScoresEl.innerHTML = "";
};
