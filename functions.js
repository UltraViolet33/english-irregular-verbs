const getAllVerbs = async () => {
  const response = await fetch("./data/verbs.json");
  return await response.json();
};

const bookmarkVerb = async verb => {
  const response = await fetch("./bookmarkVerb.php", {
    method: "POST",
    body: JSON.stringify(verb),
  });
  return await response.json();
};
