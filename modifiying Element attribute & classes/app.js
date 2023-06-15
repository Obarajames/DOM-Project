//DOM manipulation

const title = document.querySelector("#main-header");
title.style.color = "red";

const listItems = document.querySelectorAll("list-items");
for (i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = "5rem";
}
console.log(listItems);
//creating an element
const ul = document.querySelector("ul");

const li = document.createElement("li");

//Adding Elements
ul.append(li);

//modifying the text

const firstListItem = document.querySelector(".list-item");
console.log(firstListItem);

li.innerText = "X-men";
//modifying attribute 
//id
li.setAttribute("id", "main-heading")
li.removeAttribute("id");

const title = document.querySelector('#heading');
// class
li.classList.add("list-items");
//li.classList.remove("list-items");

console.log(li.classList.contains('list-items'));
//remove elements:
li.remove();