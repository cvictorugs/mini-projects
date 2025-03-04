// delete button
const deleteBtn = document.getElementById('delete-btn');

// displays the output
const calcScreen = document.getElementById('calc-screen');
const myArray = [];

const keypads = document.querySelectorAll(".key-pads");
keypads.forEach((keypad) => {
    keypad.addEventListener("click", (event) => {
        let isClicked = false;
        // Number(keypad.textContent);
   
        if(isClicked){
            isClicked = true; 
            if(['*','-','+','/']){

                console.log('arithmetic operators')
            }

            // if()
            // if(keypad.textContent)


        }

        myArray.push(keypad.textContent);
        // myArray.push(Number(keypad.textContent)) // number makes doing math possible
        calcScreen.value = myArray.join("");
        
        console.log(myArray)
        console.log(calcScreen.value)

        // delete function
        // user can't delete until there's content
        deleteBtn.addEventListener('click', () => {
        if(calcScreen.value !== 0 || calcScreen.value > 0){
            console.log('attempting to delete')
            myArray.pop()
            calcScreen.value = myArray.join("");

            console.log(myArray)
            // calcScreen.value.pop()
            // console.log(calcScreen)
            // console.log(calcScreen.value)
        }
    })
    })
 

})

// the delete button
// const deleteBtn = document.getElementById('delete-btn');


// function deleteCalc(){
//     
// }