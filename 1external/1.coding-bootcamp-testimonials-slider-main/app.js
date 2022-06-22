const data = [{
    id: 1,
    text: "\"I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future.\"",
    name: "Tanya Sinclair",
    job: "UX Engineer",
    img: "images/image-tanya.jpg",
  },
  {
    id: 2,
    text: "\"If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\"",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    img: "images/image-john.jpg",
  },
];

// Buttons
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

// Data to be changed
const text = document.querySelector(".text");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const img = document.querySelector(".img");

let currentItem = 0;

// function for changing data
function showPerson(person) {
  item = data[person];
  text.textContent = item.text;
  name.textContent = item.name;
  job.textContent = item.job;
  img.src = item.img;
}

// Adding event listeners to buttons
leftBtn.addEventListener("click", function () {
  if (currentItem < (data.length - 1)) {
    currentItem++;
  } else {
    currentItem--;
  }
  showPerson(currentItem);
});

rightBtn.addEventListener("click", function () {
  if (currentItem > 0) {
    currentItem--;
  } else {
    currentItem = (data.length - 1);
  }
  showPerson(currentItem);
});