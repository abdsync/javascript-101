// EXAMINE THE DOCUMENT OBJECT //
//   console.dir(document);
//   console.log(document.domain);
//   console.log(document.URL);
//   console.log(document.title);
//   document.title = "OKay!";
//   console.log(document.doctype);
//   console.log(document.head);
//   console.log(document.body);
//   console.log(document.all);
//   console.log(document.all[5]);
//   console.log(document.forms);
//   console.log(document.links);
//    console.log(document.images);

// GET ELEMENT BY ID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var mainHeader = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Random";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<p>Hello World</p>';
// headerTitle.style.color = 'black';
// mainHeader.style.borderTop = '10px solid black';

// GET ELEMENT BY CLASS //
//  var items = document.getElementsByClassName('list-group-item');
//  console.log(items);
// console.log(items[3].textContent);
// items[3].textContent = "The Last Resort";
// items[3].style.color = "maroon";
// items[3].style.fontWeight = "bolder";
// items[3].style.backgroundColor = "darkgrey";

// Gives error so we are using a for loop below. 
// items.style.backgroundColor = "orange";

//  for (var i = 0; i < items.length; i++)
//  {
//      items[i].style.backgroundColor = "rebeccapurple";
//  }


// GET ELEMENTS BY TAG NAME // 
//  var li = document.getElementsByTagName('li');
//  for (var i = 0; i < li.length; i++)
//  {
//     if (i % 2 === 0)
//     {
//         li[i].style.backgroundColor = "lightgray";
//     }
//     else if (i % 2 !== 0)
//     {
//         li[i].style.backgroundColor = "darkgray";
//     }
//  }

// console.log(li[3].textContent);
// li[3].textContent = "The Last Resort";
// li[3].style.color = "maroon";
// li[3].style.fontWeight = "bolder";
// li[3].style.backgroundColor = "darkgrey";
// li[4].style.backgroundColor = "Teal";

// for (var i = 0; i < li.length; i++)
//     {
//         li[i].style.backgroundColor = "lightgray";
//     }
    
// QUERY SELECTOR : It selects only the first instance whether it is an id, tag or a class. 
//  var mainHeader = document.querySelector('#main-header');
//  mainHeader.style.borderRight = "solid 15px black";
// 
//  var inputSelect = document.querySelector('.text-box');
//  inputSelect.value = "Type in!";
//  
//  var inputSelector = document.querySelector('.btn[type="submit"]');
//  inputSelector.value = "Send Request!";
// 
//  var input = document.querySelector('.list-group-item');
//  input.style.fontWeight = "bolder";
// 
//  var input = document.querySelector('.list-group-item:nth-child(2)');
//  input.style.color = "brown";
// 
//  var input = document.querySelector('.list-group-item:last-child');
//  input.style.color = "green";
//  input.style.fontWeight = "bolder";

// QUERY SELECTOR ALL //
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// for (var i = 0; i < titles.length; i++)
// {
//     titles[i].style.color = "bisque";
// }

// titles[1].textContent = "Entire list!";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++)
// {
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = "#ccc";
// } // Try understanding this code is all about indexing. 


// Traverse the DOM // 
// var itemList = document.querySelector('#items');
// parentNode 
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor = "lightgrey";

// parentElement (At basic level it is the same as as the parentNode)
// parentElement
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.style.backgroundColor = "lightgrey";

//childNodes ( It includes white spaces etc )
//  console.log(itemList.childNodes);
// Children ( It does not include white spaces etc )
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "maroon";

// First Child ( Includes line/white spacing etc )
// console.log(itemList.firstChild);
// First Element Child ( Doesnt include line/white spacing etc)
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Starting Point!";

// Last Child 
// console.log(itemList.lastChild);
// Last Element Child 
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Ending Point!";

// next sibling
// console.log(itemList.nextSibling);
// next Eelement Sibling
// console.log(itemList.nextElementSibling);

// previoussibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "orange";

// createElement
// create div
// var newdiv = document.createElement('div');
// Add class to div 
// newdiv.className = "new";
// Add id to div
// newdiv.id = "new1";
// Add attributes to div 
// newdiv.setAttribute('title', 'creation');
// Add textNode 
// var text = document.createTextNode("Creating text and then appending to the div");
// Adding textNode to the div
// newdiv.appendChild(text);
// var head = document.querySelector('header .container');
// var hone = document.querySelector('header h1');
// newdiv.style.fontSize = '25px';
// console.log(newdiv);
// head.insertBefore(newdiv, hone);

// // SUMMARY // 
// textNode = DOM node you can insert; 
// textContent/innerHTML = setters for an element’s contents.
// innerHTML also creates elements/tags while the textContent sees the html tags as plain text. 



// Event Listeners //

// var btn = document.getElementById('button').addEventListener('click', function(){
//     console.log("The button just got clicked!")
// }); 
// OR 
// var btn = document.getElementById('button').addEventListener('click', buttonclick);
// function buttonclick(e) // e here as a parameter is the event object. 
{
    // console.log("The button just got clicked!");
    // document.getElementById('header-title').textContent = "Changed";
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type); // Tells the action
    // The below tells about the position it was clicked within the parent element. 
    // console.log(e.clientX);
    // console.log(e.clientY);
    // The below tells about the position it was clicked within the same element/tag.
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e.shiftKey);
}

// var btn = document.getElementById('button');
// var box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

//  box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
var form = document.getElementById('first-form');
// var select = document.querySelector('select');

form.addEventListener('submit', runEvent);
// select.addEventListener('change', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);


// // btn.addEventListener('click', runEvent);
// // btn.addEventListener('dblclick', runEvent);
// // btn.addEventListener('mouseup', runEvent); // mouse when released
// // btn.addEventListener('mousedown', runEvent); // mouse when pressed
function runEvent(e)
{
    e.preventDefault();
    console.log('Event TYPE: '+e.type);
    // console.log(e.target.value);
    // document.body.style.display = "none"; All of the page disappear if the evnet is executed for example "cut".
    //output.innerHTML = '<h3>MouseX: '+e.offsetX+ ' </h3><h3>MouseY: '+e.offsetY + '</h3>';
    //document.getElementById('box').style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
    //document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}







