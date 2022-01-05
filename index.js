
const inputBox = document.getElementById('inputbox');
const submitButton = document.getElementById('submit');
const listSection = document.getElementById('listsection');

function handleSubmit(event) {
   event.preventDefault();

   const itemList = document.createElement('p');
   
   itemList.innerHTML = `${inputBox.value}`;
   console.log('itemList.innerHTML', itemList.innerHTML);
   // 1) click in inputBox, and it consolelogs "empty string"
   // 2) then type text into inputBox
   // 3) click submit button, and browser appears to refresh/reset?
   listSection.appendChild(itemList);
}

submitButton.addEventListener('click', handleSubmit);