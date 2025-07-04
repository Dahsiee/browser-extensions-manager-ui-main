const grid = document.querySelector(".grid-cols-3");
let extensions = [];
const render = (v) => {
    return `
  <div class="extension-card ">
    <div class="description gap-1">
      <img src= ${v.logo} alt=${v.name}/>
      <div class="description-text">
        <h2> ${v.name}</h2>
        <p> 
        ${v.description}
        </p>
      </div>
      </div>
      <div class="extension-inputs space">
        <button>  Remove</button>
        <label class="switch">
          <input type="checkbox" >
          <span class="slider round"></span>
        </label>
      
      </div>
    </div>
  </div>
        `;
};






const fetchFn = async () => {
    const res = await fetch("./data.json");
    const data = await res.json();
    extensions = data;
    const renderAll = extensions
    .map((v) => {
        return render(v);
    })
    .join("");
    console.log(renderAll);
    grid.innerHTML = renderAll;
};
fetchFn();


function changeImage(){
const buttonImage = document.getElementById('buttonImage');
document.body.classList.add('light-mode')
if(buttonImage.src.includes('assets/images/icon-sun.svg')){
  buttonImage.src = 'assets/images/icon-moon.svg'
}else{
  buttonImage.src = 'assets/images/icon-sun.svg'
  document.body.classList.remove('light-mode')
}
}

function updatefilterButtons(){
const toggleSwitch = document.getElementById('toggle-switch');
const filterBtns = document.querySelectorAll('.filter-btn');

if(toggleSwitch.checked){
  for(let i = 0; i < filterBtns.length; i++){
    if (filterBtns[i].dataset.filter === 'active'){
      filterBtns[i].classList.add('active');
    } else {
      filterBtns[i].classList.remove('active');
    }
  }
} else{
  for (let i = 0; i < filterBtns.length; i++){
  if (filterBtns[i].dataset.filter === 'inactive'){
filterBtns[i].classList.add('active');
    } else{
      filterBtns[i].classList.remove('active');
    }
  }
}
}







// toggleSwitch.addEventListener('change',()=>{
//   if(toggleSwitch.checked){
//     filterBtns.forEach(btn =>{
//       if (btn.dataset.filter === 'active'){
//         btn.classList.add('active');
//       }else{
//         btn.classList.remove('active');
//       }
//     });
//   }else {
//     filterBtns.forEach(btn =>{
//       if(btn.dataset.filter === 'inactive'){
//         btn.classList.add('active');
//       } else if(btn.dataset.filter === 'active'){
//         btn.classList.remove('active');
//       }
//     });
//   }
// });



// const toggleSwitches = document.querySelectorAll('.switch input');


// toggleSwitches.forEach((toggleSwitch) => {
//   toggleSwitch.addEventListener('change', () => {
//     const button = toggleSwitch.closest('.extension-card').querySelector('button');
//     if (toggleSwitch.checked) {
//       button.textContent = 'Active';
//       button.style.backgroundColor = 'var(--Red-500)';
//     } else {
//       button.textContent = 'Remove';
//       button.style.backgroundColor = '';
//     }
//   });
// });


