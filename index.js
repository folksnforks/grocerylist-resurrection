
const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');
const listSection = document.getElementById('listsection');
let listNumber = 0; 


function handleSubmit(event) {
   event.preventDefault();
   
   const itemList = document.createElement('p');

   itemList.innerHTML = `${inputBox.value}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
   <button id="edit_${++listNumber}">Edit</button>
   <button id="delete_${listNumber}">Delete</button>`;   
   
   // console.log('itemList.innerHTML', itemList.innerHTML);
   // 1) click in inputBox, and it consolelogs "empty string"
   // 2) then type text into inputBox
   // 3) click submit button, and browser appears to refresh/reset?
   listSection.appendChild(itemList);
   
   const deleteButton = document.getElementById('delete_' + listNumber);
   const editButton = document.getElementById('edit_' + listNumber);

   editButton.addEventListener('click', handleEdit);
   deleteButton.addEventListener('click', handleDelete);
   inputBox.value = '';
}

function handleEdit (event) {
   inputBox.value = event.target.parentElement.innerHTML.split("&nbsp", 1);
   submitButton.textContent = "Finish Editing";

   // inputBox.value = ;

   // submitButton.innerHTML = "Add to list";
}

function handleDelete 
(event) {
   event.target.parentElement.remove();
}

submitButton.addEventListener('click', handleSubmit);