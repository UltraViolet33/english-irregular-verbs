const getAllVerbs = async () => {
  const response = await fetch("./data/verbs.json");
  return await response.json();
};

const getAllBookmarkedVerbs = async () => {
  const response = await fetch("./data/verbs.json");
  const verbs = await response.json();

  return verbs.filter(verb => verb.star);
};

const bookmarkVerb = async verb => {
  const response = await fetch("./bookmarkVerb.php", {
    method: "POST",
    body: JSON.stringify(verb),
  });
  return await response.json();
};
