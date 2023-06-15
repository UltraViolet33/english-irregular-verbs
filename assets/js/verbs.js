const radioAllVerbs = document.querySelector("#allVerbs");
const radioStarVerbs = document.querySelector("#starVerbs");

let allVerbs = [];
let currentVerb = {};

radioAllVerbs.addEventListener("click", function () {
  getAllVerbs().then(verbs => {
    allVerbs = verbs;
    setForm();
  });
});

radioStarVerbs.addEventListener("click", () => {
  getAllBookmarkedVerbs().then(verbs => {
    allVerbs = verbs;
    setForm();
  });
});

const labelFrenchVerb = document.querySelector("#frenchVerb");

const englishVerb = document.querySelector("#englishVerb");
const preterit = document.querySelector("#preterit");
const pastParticipate = document.querySelector("#pastParticipate");

const englishError = document.querySelector("#englishError");
const preteritError = document.querySelector("#preteritError");
const pastParticipateError = document.querySelector("#pastParticipateError");

const btnSubmit = document.querySelector("#submit");
const result = document.querySelector("#result");

const setForm = () => {
  englishVerb.value = "";
  preterit.value = "";
  pastParticipate.value = "";

  englishVerb.classList.remove("is-valid");
  preterit.classList.remove("is-valid");
  pastParticipate.classList.remove("is-valid");

  englishVerb.classList.remove("is-invalid");
  preterit.classList.remove("is-invalid");
  pastParticipate.classList.remove("is-invalid");

  currentVerb = allVerbs[Math.floor(Math.random() * allVerbs.length)];
  labelFrenchVerb.textContent = currentVerb.french;
};

getAllBookmarkedVerbs().then(verbs => {
  allVerbs = verbs;
  console.log(verbs);
  setForm();
});

btnSubmit.addEventListener("click", () => {
  const englishVerbValue = englishVerb.value.toLowerCase();
  const preteritValue = preterit.value.toLowerCase();
  const pastParticipateValue = pastParticipate.value.toLowerCase();

  resetValidationClasses();

  const verb = {
    english: englishVerbValue,
    preterit: preteritValue,
    pastParticipate: pastParticipateValue,
  };

  if (checkVerbValues(verb)) {
    result.textContent = "Gagné !";

    setTimeout(() => {
      result.textContent = "";

      resetValidationClasses();
      setForm();
    }, 500);
  }
});

const checkVerbValues = verb => {
  let result = true;

  if (verb.english !== currentVerb.english) {
    englishVerb.classList.add("is-invalid");
    result = false;
  } else {
    englishVerb.classList.add("is-valid");
  }

  if (verb.preterit !== currentVerb.preterit) {
    preterit.classList.add("is-invalid");
    result = false;
  } else {
    preterit.classList.add("is-valid");
  }

  if (verb.pastParticipate !== currentVerb.pastParticipate) {
    pastParticipate.classList.add("is-invalid");
    result = false;
  } else {
    pastParticipate.classList.add("is-valid");
  }

  return result;
};

const resetValidationClasses = () => {
  englishVerb.classList.remove("is-valid");
  preterit.classList.remove("is-valid");
  pastParticipate.classList.remove("is-valid");

  englishVerb.classList.remove("is-invalid");
  preterit.classList.remove("is-invalid");
  pastParticipate.classList.remove("is-invalid");
};
