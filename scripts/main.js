import { fetchLuke } from "./starWarsData.js";

const displayLuke = async () => {
  const data = await fetchLuke();
  sortPlanetDiameter(data);
};
const sortPlanetDiameter = (data) => {
  let diameters = data.results.sort((a, b) => {
    return parseInt(a.diameter) - parseInt(b.diameter);
  });
  let diameterHtml = `<ul>`;
  for (let option of diameters) {
    diameterHtml += `
        <article>
          <section class="card">
            <p>Name: ${option.name}</p>
            <p>Diameter: ${option.diameter}</p>
          </section>
        </article>
      `;
  }
  diameterHtml += `</ul>`;
  document.getElementById("app").innerHTML = diameterHtml;
};
displayLuke();
