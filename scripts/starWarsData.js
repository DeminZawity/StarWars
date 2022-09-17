const API = "https://swapi.dev/api";

export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/planets`);
  const jsonData = await dataFetch.json();
  return jsonData;
};
