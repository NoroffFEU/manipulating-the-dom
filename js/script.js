// // DOM - document object model

// const container = document.querySelector(".container");

// console.log(container.innerHTML)


// const name = "Harold";

// // container.innerHTML = "<p>I am new content, my name is: " + name + "</p>";
// container.innerHTML = `<p>I am new content, my name is: ${name}</p>`;


const list = document.querySelector(".list");

console.log(list.innerHTML);

// list.innerHTML = list.innerHTML + "<li>Elephant</li>";

list.innerHTML += "<li>Elephant</li>";

console.log(list.innerHTML);


// const heading = document.querySelector("h1");

// console.dir(heading.classList);


// // heading.classList.add("heading1");
// // heading.classList.add("another-class");

// heading.classList.remove("hello");


// heading.className = "heading1 another-class";

// console.log(heading.className);


// const list = document.querySelector("#list");
// const list2 = document.querySelector("ul");

// const list3 = document.querySelector(".list");

// console.log(list);

// console.log(list2);

// console.log(list3);

// const listById = document.getElementById("list");

// console.log(listById);

// document.querySelector();


// const listItems = document.querySelectorAll("li");

// console.log(listItems);

// for(let i = 0; i < listItems.length; i++) {
//     // console.dir(listItems[i].innerHTML);

//     // listItems[i].innerHTML = "<b>Hello</b>";

//     listItems[i].innerHTML = `<strong>${i}</strong>`; 
//     listItems[i].style.color = "red";

// }