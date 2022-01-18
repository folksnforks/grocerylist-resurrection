// SEC: GLOBAL VARIABLES
//--------------------------------------------------

const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');
const listSection = document.getElementById('listsection');
let listNumber = 0;
// let currentEditSelection
let isEditing = false;

// SEC: FUNCTIONS
//--------------------------------------------------

function handleSubmit(event) {
   event.preventDefault();
   
   listNumber++
   const itemList = document.createElement('p');

   itemList.innerHTML = `<span id="span_${listNumber}">${inputBox.value}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><button id="edit_${listNumber}">Edit</button>
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
   
   isEditing = true;
   
   const currentItemsEdit = event.target;
   const editInputBox = document.createElement('input');
   editInputBox.setAttribute('type', 'text');
   editInputBox.value = currentItemsEdit.parentElement.firstChild.textContent.slice(0, -6);
   currentItemsEdit.parentElement.firstElementChild.remove();
   currentItemsEdit.parentElement.prepend(editInputBox);

   currentItemsEdit.textContent = 'Finish Editing';

   currentItemsEdit.removeEventListener('click', handleEdit);
   currentItemsEdit.addEventListener('click', handleEditSubmit);
}

function handleEditSubmit (event) {
   
   const itemLine = event.target.parentElement;
   const updatedItem = itemLine.firstElementChild.value;

   itemLine.firstChild.remove();    //removes editing input box
   
   itemLine.prepend(document.createElement('span'));
   itemLine.firstChild.textContent = `${updatedItem}      `;

   event.target.textContent = 'Edit';
   event.target.removeEventListener('click', handleEditSubmit);
   event.target.addEventListener('click', handleEdit);



}
   


function handleDelete (event) {
   
   event.target.parentElement.remove();
   
}


//SEC: EVENT HANDLER
//--------------------------------------------------

submitButton.addEventListener('click', handleSubmit);
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   // const editInputBox = document.createElement('input', { type : 'text', id : 'editInputBox'});