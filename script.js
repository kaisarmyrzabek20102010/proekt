const header = document.getElementById("header");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.style.width = "100%";
    header.style.height = "50px";
    header.style.background = "red";
    logo.style.height = "50px";
  } else {
    header.style.background = " #a42f2f";
    header.style.width = "100%";
    header.style.height = "80px";
    logo.style.height = "80px";
  }
});

const newProducts = [
  {
    image:
      "https://img.freepik.com/premium-vector/empty-bag-gifts-santa-bag-isolated-white-background_149452-439.jpg",
    name: "Santa Bag",
    price: 155,
    oldPrice: 168,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Mkdf6lRKDeFZ0sGsTi5U9uW5tLFHh_rzlg&s",
    name: "Santa wine",
    price: 15,
    oldPrice: 19,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzJ66xUK0quNFnFXT5DMchko-DgS_6Vc1qg&s ",
    name: "Santa decore",
    price: 10,
    oldPrice: 13,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RW0HfNg13OjeNhubOBJIvtUSCgn9aXIBlQ&s&#39",
    name: "Santa Cap",
    price: 12,
    oldPrice: 18,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTlRwbCgespzP_HQz_2hKa6hKcS9MUTbXxw&s",
    name: "tree candle",
    price: 12,
    oldPrice: 13,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaFBfkb_cR8fNiI3-SsypzPPYngYRLwwGnw&s",
    name: "Santa",
    price: 8,
    oldPrice: 12,
  },
  {
    image:
      "https://media.istockphoto.com/id/1352524630/vector/christmas-lights-bulbs-isolated-on-white.jpg?s=612x612&w=0&k=20&c=fN4iLnb6OA2DxedIcQa3c3ek_e4i23Ka5G1OQfVmVaU=",
    name: "decoration light",
    price: 3,
    oldPrice: 8,
  },
  {
    image: "https://www.foottraffic.com/images/uploads/2440_3677_popup.jpg",
    name: "socks",
    price: 1,
    oldPrice: 3,
  },
];

newProducts.forEach((item) => {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardName = document.createElement("h2");
  const price = document.createElement("span");
  const oldPrice = document.createElement("span");

  oldPrice.style.textDecoration = "line-through";

  card.classList.add("card");

  card.appendChild(cardImage);
  card.appendChild(cardName);
  card.appendChild(price);
  card.appendChild(oldPrice);
  cardsContainer.appendChild(card);

  cardImage.src = item.image;
  cardName.textContent = item.name;
  price.textContent = item.price + "$";
  oldPrice.textContent = item.oldPrice + " $";
});




const NUMBER_OF_SNOWFLAKES = 50;
const MAX_SNOWFLAKE_SIZE = 1;
const MAX_SNOWFLAKE_SPEED = 1;
const SNOWFLAKE_COLOUR = "rgb(240,240,240)";
const snowflakes = [];

const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.pointerEvents = "none";
canvas.style.top = "0px";
canvas.style.width = "100%";
canvas.style.height = "100%";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5,
});

const drawSnowflake = (snowflake) => {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = snowflake.color;
  ctx.fill();
  ctx.closePath();
};

const updateSnowflake = (snowflake) => {
  snowflake.y += snowflake.speed;
  snowflake.x += snowflake.sway;
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake());
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  snowflakes.push(createSnowflake());
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("scroll", () => {
  canvas.style.top = `${window.scrollY}px`;
});

animate();

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const coz = document.getElementById("coz");

first.style.cursor = "pointer";
second.style.cursor = "pointer";
third.style.cursor = "pointer";

first.addEventListener("click", () => {
  coz.textContent = "James Miller ";
});

second.addEventListener("click", () => {
  coz.textContent =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident nam ducimus adipisci ";
});

third.addEventListener("click", () => {
  coz.textContent =
    "rerum asperiores eos error numquam deserunt? Quam iste consequatur esse quos earum nulla harum voluptatem, ad temporibus.";
});


document.addEventListener('DOMContentLoaded', () => {
  // Установите конечную дату
  const deadline = new Date('2024-12-31T23:59:59');
  
  // Найдите элементы DOM
  const elDays = document.querySelector('.timer__days');
  const elHours = document.querySelector('.timer__hours');
  const elMinutes = document.querySelector('.timer__minutes');
  const elSeconds = document.querySelector('.timer__seconds');
  
  // Функция склонения числительных
  const declensionNum = (num, words) => {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  };

  // Функция обновления таймера
  const updateTimer = () => {

    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    elDays.dataset.title = declensionNum(days, ['күн', 'күн', 'күн']);
    elHours.dataset.title = declensionNum(hours, ['сағат', 'сағат', 'сағат']);
    elMinutes.dataset.title = declensionNum(minutes, ['минут', 'минут', 'минут']);
    elSeconds.dataset.title = declensionNum(seconds, ['секунд', 'секунд', 'секунд']);

    if (diff === 0) {
      clearInterval(timerId);
    }
  };

  // Запустите таймер
  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});
