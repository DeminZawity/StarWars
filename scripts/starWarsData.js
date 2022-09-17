const API = "https://swapi.dev/api";

export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/starships`);
  const jsonData = await dataFetch.json();
  return jsonData;
};
