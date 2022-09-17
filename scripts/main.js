import { fetchLuke } from "./starWarsData.js";

const displayLuke = async () => {
  const data = await fetchLuke();
  sortSpecies(data);
};
const sortSpecies = (data) => {
  let speciesHtml = `<ul>`;
  for (let option of data.results) {
    speciesHtml += `
        <article>
          <section class="card">
            <p>Name: ${option.name}</p>
            <p>Language: ${option.language}</p>
          </section>
        </article>
      `;
  }
  speciesHtml += `</ul>`;
  document.getElementById("app").innerHTML = speciesHtml;
};
displayLuke();
