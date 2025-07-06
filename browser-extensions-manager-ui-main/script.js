// const grid = document.querySelector("#extensions-grid");
const grid = document.querySelector("#dynamicContent");
let extensions = [];

const render = (v) => {
  return `
    <div class="extension-card ${v.isActive ? "active" : "inactive"}">
      <div class="description gap-1">
        <img src="${v.logo}" alt="${v.name}"/>
        <div class="description-text">
          <h2>${v.name}</h2>
          <p>${v.description}</p>
        </div>
      </div>
      <div class="extension-inputs space">
        <button>${v.isActive ? "Active" : "Remove"}</button>
        <label class="switch">
          <input type="checkbox" ${
            v.isActive ? "checked" : ""
          } onchange="toggleExtension(${extensions.indexOf(v)})">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  `;
};

const fetchFn = async () => {
  const res = await fetch("./data.json");
  extensions = await res.json();
  renderExtensions();
};

const renderExtensions = (filter = "all") => {
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "all") return true;
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
  });

  const renderAll = filteredExtensions.map(render).join("");
  grid.innerHTML = renderAll;
};

const filterExtensions = (filter) => {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  renderExtensions(filter);
};

const toggleExtension = (index) => {
  extensions[index].isActive = !extensions[index].isActive;
  renderExtensions();
};

const changeImage = () => {
  const buttonImage = document.getElementById("buttonImage");
  document.body.classList.toggle("light-mode");
  buttonImage.src = document.body.classList.contains("light-mode")
    ? "assets/images/icon-moon.svg"
    : "assets/images/icon-sun.svg";
};

fetchFn();
