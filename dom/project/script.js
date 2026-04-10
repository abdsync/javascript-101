var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var searchfilter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// List delete event 
itemList.addEventListener('click', delitem);
// Filter event
searchfilter.addEventListener('input', filterItems);


// Add item
// This part as a whole is focused at grabbing the input string, and creating a delete button and then adding it to list. 
function addItem(e)
{
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    // Create new li element 
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // Add text node with input value
    var textnode = document.createTextNode(newItem);
    li.appendChild(textnode);

    // Create del button element
    var del = document.createElement('button');
    // Add classes to del button
    del.className = 'btn btn-danger btn-sm delete';
    // Create text node
    var textNode = document.createTextNode('X');
    // Append to del
    del.appendChild(textNode);
    // Append to button to li
    li.appendChild(del);
    //Append to unordered list
    itemList.appendChild(li);
}

//Del item
//This part as a whole is focused at deleting the list when that X is clicked. 
function delitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure, you want to delete this item?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Search filter
//This part as a whole is focused at typing in the search and filtering from the list out. 
// Filter Items 
// function searchlist(e)
// {
//     // convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     // Get list 
//     var items = itemList.getElementsByTagName('li');
//     // Convert to array rather than htmlcollection 
//     Array.from(items).forEach(function(item)
//     {
//         var itemName = item.textNode.textContent;
//         if(itemName.toLowerCase().indexOf(text) != -1)
//         {
//             item.style.display = 'block';
//         }
//         else
//         {
//             item.style.display = 'none';
//         }
//     });
// }

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
