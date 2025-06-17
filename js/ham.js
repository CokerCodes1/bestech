// select the hamburger element in your HTML ( the menu icon for mobile view)
const hamburgerContainer = document.querySelector('.hamburger');

// select the dropdown box element ( the mobile menu that appears when the hamburger is clicked)
const dropdownBox = document.getElementById('dropdownBox');

// select the exit icon element ( used to close the mobile menu)
const exitIcon = document.getElementById('exitIcon');

// select all anchor tags inside list itema in the mobile navigation container
const allAnchorTags = document.querySelectorAll('#navcon-mobile li a');


// check if the hamburger container element exists in the DOM
if (hamburgerContainer) {
    // add click event listener to the hamburger container
    hamburgerContainer.addEventListener('click', function(){
        // show the dropdown box ( mobile menu) and apply animation
        dropdownBox.style.display = 'flex';
        dropdownBox.classList.add('animate__rollIn')
    })
}

// check if the exit icon exists in the DOM
if (exitIcon) {
    // add click event listener to the exit icon
    exitIcon.addEventListener('click', function() {
        // hide the dropdown box ( close the mobile menu) and remove animation
        dropdownBox.style.display = 'none';
        dropdownBox.classList.remove('animate__rollIn');
    })
};


// check if there are anchor tags inside the mobile navigation container 
if(allAnchorTags){
    // loop through all anchor tags and add event listener to each one
    allAnchorTags.forEach(allAnchorTag => {
        allAnchorTag.addEventListener('click', function(){
             // hide the dropdown box when an anchor tag is clicked ( close the menu)
        dropdownBox.style.display = 'none';
        })
    })
};