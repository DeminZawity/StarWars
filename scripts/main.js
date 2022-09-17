import { fetchLuke } from "./starWarsData.js";

const displayLuke = async () => {
  const data = await fetchLuke();
  starshipPassengers(data);
};
const starshipPassengers = (data) => {
  let starshipHtml = `<ul>`;
  for (let option of data.results) {
    starshipHtml += `
        <article>
          <section class="card">
            <p>Name: ${option.name}</p>
            <p>Capacity: ${option.passengers}</p>
          </section>
        </article>
      `;
  }
  starshipHtml += `</ul>`;
  document.getElementById("app").innerHTML = starshipHtml;
};
displayLuke();
