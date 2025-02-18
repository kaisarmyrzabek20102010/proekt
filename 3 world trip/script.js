const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
const searchbtn = document.getElementById("searchbtn");
const div = document.getElementById("div");

searchbtn.addEventListener("click", () => {
  div.innerHTML = `
          <div class="div">
              <input  id='input' type="text" placeholder="city name">
              <button id='button'>search</button>
          </div>
        `;

  async function fetchWeather(qala) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${qala}&appid=${apiKey}&units=metric&lang=kk`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("ауа райы қате");
      }
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.error("қате:", error);
      alert("табылмады");
    }
  }

  function displayWeather(data) {
    const conteiner = document.getElementById("conteiner");
    const searchDate = new Date().toLocaleString(); // Get the current date and time
    conteiner.innerHTML = `
            <div class="weather">
              <h2>аты: ${data.name}</h2><br>
              <p>Температура: ${data.main.temp}°C<  /p><br>
              <p>ая райы: ${data.weather[0].description}</p><br>
              <p>ылғалдылық: ${data.main.humidity}%</p><br>
              <p>жел жылдамдығы: ${data.wind.speed} м/с</p><br>
              <p>Іздеу күні: ${searchDate}</p><br> <!-- Display the search date -->
            </div>        
          `;
  }

  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    const conteiner = document.getElementById("conteiner");
    const qala = document.getElementById("input").value;
    fetchWeather(qala);
    const searchDate = new Date().toLocaleString(); // Get the current date and time
    localStorage.setItem(
      "aya",
      JSON.stringify({ city: qala, date: searchDate })
    ); // Store city and date
    asdfg();
  });

  function asdfg() {
    const aya = JSON.parse(localStorage.getItem("aya")); // Retrieve city and date
    const conteiner = document.getElementById("conteiner");
    if (aya) {
      conteiner.innerHTML = `<div class='qorset'>
                <h1>${aya.city}</h1>
                <p>Іздеу күні: ${aya.date}</p>
                <button id='del'>delete</button>
              </div>`;
      const del = document.getElementById("del");
      del.addEventListener("click", () => {
        localStorage.removeItem("aya");
        conteiner.innerHTML = "";
      });
    }
  }
});
