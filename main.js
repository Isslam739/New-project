// Created by Isslam Ouadia at 1:13 AM
// بسم الله

// Function for sidebar 
const image = document.getElementById("img");
const nav = document.getElementById("nav");

function slidebar() {
  
  nav.classList.toggle("nav-1");
}
image.addEventListener('click', slidebar) 
//###############

const btn = document.getElementById("btn");
const div = document.getElementById("container-body");

// The function for creating a to-do list element
function add_to_do_list() {
  const date = new Date();
  let input = window.prompt("Enter the name of your mission");
  if (input === "" || input === null) {
    return;
  }

  let box = document.createElement("div");
  let mission_text = document.createElement("h3");
  let button_1 = document.createElement("button");
  let button_2 = document.createElement("button");

  box.classList.add("div-event");
  mission_text.classList.add("h3");

  // Add the text for h3
  mission_text.textContent = input;

  console.log(`Mission added at ${date}`);
  button_1.classList.add("btn-delete");
  button_2.classList.add("btn-am");
  button_1.textContent = "Delete";
  button_2.textContent = "edit";

  // Initially hide the buttons
  button_1.style.display = "none";
  button_2.style.display = "none";

  box.appendChild(mission_text);
  box.appendChild(button_1);
  box.appendChild(button_2);
  div.appendChild(box);

  // Show buttons on box click
  
  box.onclick = function() {
    if (button_1.style.display === "none") {
      button_1.style.display = "inline"; // Show delete button
      button_2.style.display = "inline"; // Show edit button
    } else {
      button_1.style.display = "none"; // Hide delete button
      button_2.style.display = "none"; // Hide edit button
    }
  };

  button_2.onclick = function(event) {
    event.stopPropagation(); // Prevent the box click event
    let newInput = window.prompt("Enter the new mission", mission_text.textContent);
    if (newInput != null && newInput !== "") {
      mission_text.textContent = newInput;
    }
  };

  button_1.onclick = function(event) {
    event.stopPropagation(); // Prevent the box click event
    div.removeChild(box);
  };
}

btn.addEventListener('click', add_to_do_list);