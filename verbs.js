const labelFrenchVerb = document.querySelector("#frenchVerb");

const englishVerb = document.querySelector("#englishVerb");
const preterit = document.querySelector("#preterit");
const pastParticipate = document.querySelector("#pastParticipate");

const englishError = document.querySelector("#englishError");
const preteritError = document.querySelector("#preteritError");
const pastParticipateError = document.querySelector("#pastParticipateError");

const btnSubmit = document.querySelector("#submit");
const result = document.querySelector("#result");

let allVerbs = [];
let currentVerb = {};

const getAllVerbs = async () => {
  const response = await fetch("./data/verbs.json");
  return await response.json();
};

const setForm = () => {
  englishVerb.value = "";
  preterit.value = "";
  pastParticipate.value = "";

  englishError.textContent = "";
  preterit.textContent = "";
  pastParticipate.textContent = "";

  currentVerb = allVerbs[Math.floor(Math.random() * allVerbs.length)];
  labelFrenchVerb.textContent = currentVerb.french;
};

getAllVerbs().then(verbs => {
  allVerbs = verbs;
  setForm();
});

btnSubmit.addEventListener("click", () => {
  const englishVerbValue = englishVerb.value;
  const preteritValue = preterit.value;
  const pastParticipateValue = pastParticipate.value;

  const verb = {
    english: englishVerbValue,
    preterit: preteritValue,
    pastParticipate: pastParticipateValue,
  };

  if (checkVerbValues(verb)) {
    result.textContent = "Gagné !";
    setTimeout(() => {
      setForm();
    }, 5000);
  }
});

const checkVerbValues = verb => {
  let result = true;

  if (verb.english !== currentVerb.english) {
    englishError.textContent = "Faux !";
    result = false;
  }

  if (verb.preterit !== currentVerb.preterit) {
    preteritError.textContent = "Faux !";
    result = false;
  }

  if (verb.pastParticipate !== currentVerb.pastParticipate) {
    pastParticipateError.textContent = "Faux !";
    result = false;
  }

  return result;
};
