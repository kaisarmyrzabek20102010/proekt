const apiKey = "AcR5//xmjPoKb94sTlOcYg==bumSWoLDRRJbBK7P";
const cityNames = [
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Berlin",
  "Moscow",
  "Madrid",
];

async function fetchAllCities() {
  const apiUrl = (city) =>
    `https://api.api-ninjas.com/v1/city?name=${encodeURIComponent(city)}`;
  const requests = cityNames.map((city) =>
    fetch(apiUrl(city), {
      headers: { "X-Api-Key": apiKey },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.statusText}`);
      }
      return response.json();
    })
  );

  try {
    const results = await Promise.all(requests);
    const cityContainer = document.getElementById("cityContainer");

    if (cityContainer) {
      cityContainer.innerHTML = results
        .map((data) => {
          if (data.length > 0) {
            const city = data[0];
            const a = `
            <div class="city-cards">
              <div id="zattar" class="zattar">
                <h3>${city.name},<br> ${city.country}</h3>
                <p><strong>Широта:</strong> ${city.latitude}</p>
                <p><strong>Долгота:</strong> ${city.longitude}</p>
                <p><strong>Население:</strong> ${city.population.toLocaleString()}</p>
                <button id='add'>add city</button>
              </div>
              <div>
            `;
            return a;
          } else {
            return `<p>Город не найден.</p>`;
          }
        })
        .join("");
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
    const cityContainer = document.getElementById("cityContainer");
    if (cityContainer) {
      cityContainer.textContent = "Ошибка загрузки данных.";
    }
  }
}

//biity barlygy

document.addEventListener("DOMContentLoaded", fetchAllCities);
const but = document.getElementById("searchbtn");
const conteiner = document.getElementById("conteiner");

but.addEventListener("click", () => {
  conteiner.classList.remove('text')

  conteiner.innerHTML = `
    <div class="searchdiv">
      <h2>Поиск города</h2>
      <input type="text" placeholder="Введите название города" id="input">
      <button id="button">Найти</button>
    </div>
    <div class='result hidden' id="result"></div>
  `;

  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Загрузка...</p>";
    resultDiv.classList.remove("hidden");

    const cityName = document.getElementById("input").value.trim();
    if (!cityName) {
      resultDiv.innerHTML = "<p>Введите корректное название города.</p>";
      return;
    }

    const apiUrl = `https://api.api-ninjas.com/v1/city?name=${encodeURIComponent(
      cityName
    )}`;
    const apiKey = "AcR5//xmjPoKb94sTlOcYg==bumSWoLDRRJbBK7P";

    fetch(apiUrl, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          resultDiv.innerHTML = "<p>Город не найден.</p>";
          return;
        }

        const city = data[0];
        resultDiv.innerHTML = `
          <h3>${city.name}, ${city.country}</h3>
          <p><strong>Широта:</strong> ${city.latitude}</p>
          <p><strong>Долгота:</strong> ${city.longitude}</p>
          <p><strong>Население:</strong> ${
            city.population ? city.population.toLocaleString() : "Нет данных"
          }</p>
          <button>add city</button>
        `;
      })
      .catch((error) => {
        resultDiv.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
        console.error("Ошибка при запросе:", error);
      });
  });
});

const add = document.getElementById("add");
const adds = document.getElementById("adds");
