let citiesData = [];

async function loadCities() {
  try {
    const response = await fetch("cities.json");
    citiesData = await response.json();
    displayCities(citiesData);
  } catch (error) {
    console.error("qate", error);
  }
}

function displayCities(cities) {
  const cityContainer = document.getElementById("cityContainer2");
  cityContainer.innerHTML = "";

  cities.forEach((city, index) => {
    const cityCard = document.createElement("div");
    cityCard.classList.add("city-card");
    cityCard.innerHTML = `
      <h3>${city.city}, ${city.country}</h3> 
      <button class="addbtn" data-index="${index}">Add City</button>
      <button class="del">Delete</button>
    `;
    cityContainer.appendChild(cityCard);
  });

  // Add city
  document.querySelectorAll(".addbtn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const cityIndex = event.target.getAttribute("data-index");
      const selectedCity = citiesData[cityIndex];

      const cityCard = event.target.closest(".city-card");
      cityCard.innerHTML = `sen qostyn: ${selectedCity.city}`;
      cityCard.style.fontSize = "18px";
    });
  });

  // Remove one city
  document.querySelectorAll(".del").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.target.closest(".city-card").remove();
    });
  });
}

// Search city
function searchCity() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const filteredCities = citiesData.filter(
    (city) =>
      city.city.toLowerCase().includes(searchText) ||
      city.country.toLowerCase().includes(searchText)
  );
  displayCities(filteredCities);
}

// Remove all cities
function removeAllCities() {
  document.getElementById("cityContainer2").innerHTML = "";
}

// Event listeners
document.getElementById("searchInput").addEventListener("input", searchCity);
document.getElementById("remove").addEventListener("click", removeAllCities);

loadCities();

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
