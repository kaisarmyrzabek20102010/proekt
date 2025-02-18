document.addEventListener("DOMContentLoaded", () => {
  const searchbtn = document.getElementById("searchbtn");
  const div = document.getElementById("div");

  searchbtn.addEventListener("click", () => {
    div.innerHTML = `
    <div class="div">
        <input id='sity' type="text" placeholder="city name">
        <input id='country' type="text" placeholder="country name">
        <button id='but'>search</button>
    </div>
        `;
  });
});

const sity = document.getElementById('sity')
const country = document.getElementById('country')
const but= document.getElementById('but')

but.addEventListener('click',()=>{
  alert(sity.value)
})