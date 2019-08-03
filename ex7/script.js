// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let header = document.getElementById("section-header");
let section = document.getElementById("section");


header.addEventListener("click", function() {
    // console.log(header, 'bleheheheheheh');

    // section.style.display = "none"

    if(section.style.display === "none") {
        section.style.display = "block"
    } else {
        section.style.display = "none"
    }

    // console.log('test')
    // section.style.visability = 'hidden';
})