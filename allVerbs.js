const tableVerbs = document.querySelector("#table");

let allVerbs = [];

getAllVerbs().then(verbs => {
  allVerbs = verbs;
  resetTable(verbs);
});

const displayVerbs = verbs => {
  tableVerbs.innerHTML = "";
  for (const verb of verbs) {
    tableVerbs.innerHTML += `<tr>
        <td id='${verb.id}' class='star'>
        ${
          verb.star
            ? `<img id='img-star-${verb.id}' src='./assets/star.png' width='20px' >`
            : `<img id='img-star-${verb.id}' src='./assets/empty_star.png' width='20px' >`
        }
        </td>
        <td>${verb.french}</td>
        <td>${verb.english}</td>
        <td>${verb.preterit}</td>
        <td>${verb.pastParticipate}</td>
        <td style='cursor:pointer'><img src='./assets/crayon.png' ></td>
    </tr>`;
  }
};

const resetTable = verbs => {
  displayVerbs(verbs);
  const allVerbsStars = document.querySelectorAll(".star");

  for (const el of allVerbsStars) {
    el.addEventListener("click", () => {
      const idVerb = el.getAttribute("id");
      const index = allVerbs.findIndex(verb => verb.id == idVerb);
      const verb = allVerbs[index];

      const imgStar = document.querySelector(`#img-star-${verb.id}`);

      const imgAttribute = verb.star
        ? "./assets/empty_star.png"
        : "./assets/star.png";

      imgStar.setAttribute("src", imgAttribute);

      allVerbs[index].star = !allVerbs[index].star;
      bookmarkVerb(verb);
    });
  }
};
