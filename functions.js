
const getAllVerbs = async () => {
    const response = await fetch("./data/verbs.json");
    return await response.json();
  };