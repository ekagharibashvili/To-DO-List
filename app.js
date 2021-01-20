let button = document.getElementById('button');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');

// add paragraphs in container
button.addEventListener('click', function(){

    var paragraph = document.createElement('p');
    paragraph.classList.add('p');
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = "";
    

    //function for line-trough
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    // function to remove to do
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
   
})
