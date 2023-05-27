const labelFrenchVerb = document.querySelector("#frenchVerb");

const englishVerb = document.querySelector("#englishVerb");
const preterit = document.querySelector("#preterit");
const pastParticipate = document.querySelector("#pastParticipate");

const englishError = document.querySelector("#englishError");
const preteritError = document.querySelector("#preteritError");
const pastParticipateError = document.querySelector("#pastParticipateError");

const btnSubmit = document.querySelector("#submit");

let currentVerb = {};

const getAllVerbs = async () => {
  const response = await fetch("./data/verbs.json");
  return await response.json();
};

const startVerbs = verbs => {
  currentVerb = verbs[Math.floor(Math.random() * verbs.length)];
  labelFrenchVerb.textContent = currentVerb.french;
};

getAllVerbs().then(verbs => startVerbs(verbs));

btnSubmit.addEventListener("click", () => {
  const englishVerbValue = englishVerb.value;
  const preteritValue = preterit.value;
  const pastParticipateValue = pastParticipate.value;

  const verb = {
    english: englishVerbValue,
    preterit: preterit,
    pastParticipate: pastParticipateValue,
  };

  checkVerbValues(verb);
});

const checkVerbValues = verb => {
  if (verb.english !== currentVerb.english) {
    englishError.textContent = "Faux !";
  }

  if (verb.preterit !== currentVerb.preterit) {
    preteritError.textContent = "Faux !";
  }

  if (verb.pastParticipate !== currentVerb.pastParticipate) {
    pastParticipateError.textContent = "Faux !";
  }
};
