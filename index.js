
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

   console.log('itemList.innerHTML', itemList.innerHTML);
   // 1) click in inputBox, and it consolelogs "empty string"
   // 2) then type text into inputBox
   // 3) click submit button, and browser appears to refresh/reset?
   listSection.appendChild(itemList);
   inputBox.value = '';
}

submitButton.addEventListener('click', handleSubmit);