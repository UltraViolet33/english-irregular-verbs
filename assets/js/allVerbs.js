const tableVerbs = document.querySelector("#table");

let allVerbs = [];

getAllVerbs().then(verbs => {
  allVerbs = verbs;
  resetTable(verbs);
});

const displayVerbs = verbs => {
  tableVerbs.innerHTML = "";
  for (const verb of verbs) {
    tableVerbs.innerHTML += verbRow(verb);
  }
};

const resetTable = verbs => {
  displayVerbs(verbs);
};

const editForm = verb => {
  return `<tr>
  <td></td>
  <td><input id='input-french-${verb.id}' placeholder='Français' value='${verb.french}' class='form-control' ></td>
  <td><input id='input-english-${verb.id}' placeholder='Anglais' value='${verb.english}' class='form-control' ></td>
  <td><input id='input-preterit-${verb.id}' placeholder='Preterit' value='${verb.preterit}' class='form-control' ></td>
  <td><input id='input-pastParticipate-${verb.id}' placeholder='Participe passé' value='${verb.pastParticipate}' class='form-control' ></td>
  <td><button class='btn btn-success' id='edit-btn-${verb.id}'>Valider</button></td>
  </tr>`;
};

const verbRow = verb => {
  return `<tr id='verb-${verb.id}'>
        <td id='${verb.id}' class='star' onclick='toggleVerbStar(this)'>
        ${
          verb.star
            ? `<img id='img-star-${verb.id}' src='./assets/img/star.png' width='20px' >`
            : `<img id='img-star-${verb.id}' src='./assets/img/empty_star.png' width='20px' >`
        }
        </td>
        <td id='french'>${verb.french}</td>
        <td id='english'>${verb.english}</td>
        <td id='preterit'>${verb.preterit}</td>
        <td id='pastParticipate'>${verb.pastParticipate}</td>
        <td class='edit' id='${
          verb.id
        }' style='cursor:pointer' onclick='handleEditVerb(this)'><img src='./assets/img/pencil.png' ></td>
    </tr>`;
};

const toggleVerbStar = star => {
  const idVerb = star.getAttribute("id");
  const index = allVerbs.findIndex(verb => verb.id == idVerb);
  const verb = allVerbs[index];

  const imgStar = document.querySelector(`#img-star-${verb.id}`);

  const imgAttribute = verb.star
    ? "./assets/img/empty_star.png"
    : "./assets/img/star.png";

  imgStar.setAttribute("src", imgAttribute);

  allVerbs[index].star = !allVerbs[index].star;
  bookmarkVerb(verb);
};

const handleEditVerb = pencil => {
  const idVerb = pencil.getAttribute("id");
  const index = allVerbs.findIndex(verb => verb.id == idVerb);
  const verb = allVerbs[index];

  const row = document.querySelector(`#verb-${verb.id}`);

  row.innerHTML = "";
  row.innerHTML = editForm(verb);

  const editBtn = document.querySelector(`#edit-btn-${verb.id}`);

  editBtn.addEventListener("click", () => {
    const newVerb = {
      id: verb.id,
      french: document.querySelector(`#input-french-${verb.id}`).value,
      english: document.querySelector(`#input-english-${verb.id}`).value,
      preterit: document.querySelector(`#input-preterit-${verb.id}`).value,
      pastParticipate: document.querySelector(
        `#input-pastParticipate-${verb.id}`
      ).value,
      star: verb.star,
    };

    row.innerHTML = "";

    row.innerHTML = verbRow(newVerb);
    editPencils = document.querySelectorAll(".edit");

    allVerbs[index] = newVerb;
    editVerb(newVerb);
  });
};
