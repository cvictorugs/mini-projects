document.querySelector('#add-to-list-btn').addEventListener('click', function(){
    event.preventDefault(); //prevents form from refreshing the page
    let inputValue = document.querySelector('#input-list').value;
    if(inputValue !== ''){
        const listElement = document.createElement('li');
        listElement.textContent = inputValue;
        
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type','checkbox');
    
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class','delete-btn')
        deleteBtn.textContent = 'Remove from list'
        // deleteBtn.setAttribute('onclick','deleteBtn()'); why we can't use this?? 

        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'div-element');
        divElement.appendChild(checkBox);
        divElement.appendChild(listElement);
        divElement.appendChild(deleteBtn);
        
        const listParent = document.querySelector('#list-parent');
        listParent.appendChild(divElement)

        document.querySelector('#input-list').value = '';

        // to cross-out completed task 
        checkBox.addEventListener('change',function(){
             /* the change event is triggered whenever a form element is modified
                it doesn't fire every keystroke(as the inpu event does); only fires 
                when the final state of the element changes 
            */
            /* the .check property refers to whether a checkbox is checked or not.
            It returns a bolean value */
            
            if(checkBox.checked){
                listElement.style.textDecoration = 'line-through';
            }else listElement.style.textDecoration = 'line-through';
        })
        deleteBtn.addEventListener('click', function(){
            divElement.style.display = 'none';
        })
    }
})
// why to use the add event listener rather 
// than using the onclick to call a function ????????????????