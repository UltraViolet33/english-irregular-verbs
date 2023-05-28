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
            ? "<img src='./assets/star.png' width='20px' >"
            : "<img src='./assets/empty_star.png' width='20px' >"
        }
        </td>
        <td>${verb.french}</td>
        <td>${verb.english}</td>
        <td>${verb.preterit}</td>
        <td>${verb.pastParticipate}</td>
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
      
      allVerbs[index].star = !allVerbs[index].star; 
      console.log(allVerbs);
      resetTable(allVerbs)
    });
  }
};
