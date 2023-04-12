let fruits = []
const inputBox = document.querySelector('.todo-input');
const timezoneElement = document.querySelector('.timezone');
const timeElement = document.querySelector('.time');
const closeBox = document.getElementById('close-box');
const bottomRightContainer = document.querySelector('.bottom-right-container');
const circleX = document.getElementById('circle-x');
const images = ['/images/1.png', '/images/2.png', '/images/3.png']; // Array of image URLs
const test = document.querySelector('#task-icon') 
// const checkBoxEl = document.getElementById('check-box')
// const todoText = document.querySelector('.todo-list')
let index = 0; // Initial index
const saveLeads = JSON.parse(localStorage.getItem('myFruits'))

const inputEl = document.querySelector('.todo-input')
const enterEl = document.getElementById('enter')
const todoEl = document.querySelector('.todo-middle')









if (saveLeads){
  fruits = saveLeads
  render()
}





enterEl.addEventListener('click', function(){
    
    fruits.push(inputEl.value)
    inputEl.value = ' '
    console.log(fruits)
    localStorage.setItem('myFruits',JSON.stringify(fruits))
    render()
})

function render(){
  let listItems = ''
  for (let i=0;i<fruits.length;i++){
      listItems += `
      <div class="lists">
                <input type="checkbox" name="" id="check-box">
                <p class="todo-list">${fruits[i]}</p>
                <img id="circle-x" src="icons/circle x.png" alt="" />
      </div>
      `
  }
  todoEl.innerHTML = listItems
}






//check box


//localStorage 










function changeBackground() {
  index = (index + 1) % images.length; // Increment index and wrap around to the start
  document.body.style.backgroundImage = `url(${images[index]})`; // Set the background image of the body tag
}

setInterval(changeBackground, 5000); 

///

function updateTime() {
  const now = new Date(); // Get the current date and time
  const options = { timeZone: 'Asia/Manila', hour12: false }; // Options to format the time in 24-hour format and use Manila time zone
  const timeString = now.toLocaleTimeString('en-US', options); // Format the time as a string
  timeElement.textContent = timeString; // Update the content of the time element
}

setInterval(updateTime, 1000); // Call updateTime function every second to update the time


//TIME ZONE

function updateTimezone() {
  const now = new Date(); // Get the current date and time
  const options = { timeZone: 'Europe/London', hour12: false }; // Options to format the time in 24-hour format and use London time zone
  const timeString = now.toLocaleTimeString('en-US', options); // Format the time as a string
  timezoneElement.textContent = timeString + ' UK Time'; // Update the content of the timezone element
}

setInterval(updateTimezone, 1000); 

// input






// document.querySelector('#enter').addEventListener('click', () => {
//   if (inputBox.value !== '') {
//     const newList = document.createElement('div');
//     newList.classList.add('lists');
//     newList.innerHTML = `
//     <input type="checkbox" name="" id="check-box">
//     <p class="todo-list">${inputBox.value}</p>
//     <img id="circle-x" src="icons/circle x.png" alt="" />
//   `;      
//     todoMiddle.appendChild(newList);
//     inputBox.value = ' '
//   }
  
// });

//close todo-container


closeBox.addEventListener('click', () => {
  bottomRightContainer.style.display = 'none';
  
});

//open new container



test.addEventListener('click',function(){
  bottomRightContainer.style.display = 'block'
})


// delete lists



circleX.addEventListener('click', () => {
  const listDiv = circleX.parentElement;
  listDiv.remove();
});


