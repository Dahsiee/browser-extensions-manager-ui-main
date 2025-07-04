// const allBtn = document.getElementById('all-btn');
// const activeBtn = document.getElementById('active-btn');
// const inactiveBtn = document.getElementById('inactive-btn');

// const gridItems = document.querySelector('.grid-cols-3');


// function showAll(){
//   for(let i = 0; i < gridItems.length; i++) {
//       gridItems[i].style.display = 'block';
    
//   }
// }

// function showActive(){
//   for (let i = 0; i < gridItems.length; i++) {
//     const toggleSwitch = gridItems[i].querySelector('input.toggle-switch');
//     console.log(toggleSwitch);
//     if (toggleSwitch.checked) {
//       gridItems[i].style.display = 'block';
//     } else {
//       gridItems[i].style.display = 'none';
//     }
//   }
// };


// function showInactive(){
//     for (let i = 0; i < gridItems.length; i++) {
//     const toggleSwitch = gridItems[i].querySelector('.toggle-switch');
//     if (!toggleSwitch.checked) {
//       gridItems[i].style.display = 'block';
//     } else {
//       gridItems[i].style.display = 'none';
//     }
//   }
// };

const allBtn = document.getElementById('all-btn');
const activeBtn = document.getElementById('active-btn');
const inactiveBtn = document.getElementById('inactive-btn');
const gridItems = document.querySelectorAll('.grid-item');

function showAll() {
  gridItems.forEach(item => item.style.display = 'block');
}

function showActive() {
  gridItems.forEach(item => {
    const toggleSwitch = item.querySelector('input.toggle-switch');
    if (toggleSwitch && toggleSwitch.checked) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function showInactive() {
  gridItems.forEach(item => {
    const toggleSwitch = item.querySelector('input.toggle-switch');
    if (toggleSwitch && !toggleSwitch.checked) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}






