// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
let button = document.getElementById("myButton")

button.addEventListener('click', function(){

    let divs = document.querySelectorAll(".box")

    // for(let i = 0; i < divs.length; i++) {
    //     divs[i].style.background = "blue";
    // }

    divs.forEach(function(box){
        box.style.background = "blue"
    })

    
});



// style.background = "blue"