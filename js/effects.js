let header = document.querySelector('#sticky');

window.addEventListener('scroll', function() {
    if(scrollY > 80){
         header.style.width = '100%';
         header.style.borderRadius = '0px';
         header.classList.add('animate__rollIn');
    }else{
        header.classList.remove('animate__rollIn');
    }
});
// select all elements with the class 'slide'
let secondSlide = document.querySelectorAll('.auto');

// select the 'next' button by its id
let nextBtn2 = document.querySelector('#forth');

// select the 'previous' button by its id
let prevBtn2 = document.querySelector('#back');

// initialize the slide index to 0
let num2 = 0;

// funtion to manipulate slide
function look() {
    // if the current slide exceeds the total number of slides, reset to the first slide
    if (num2 > secondSlide.length - 1) {
    num2 = 0;
     }

// loop through all slides and hide them
for (let i = 0; i < secondSlide.length; i++) {
    secondSlide[i].style.display = 'none'; // hide all slides
}
    secondSlide[num2].style.display = 'block'; // display the current slide

    // increment the slide index to move to the next slide
    num2++;
}


// call the next function to display the first slide initially
look();

// automatically call the next function every 5 seconds when the page loads
window.addEventListener('load', function () {
    setInterval(look, 5000);
});

// add an event listener to the 'next' button to call the funtion when clicked 
nextBtn2.addEventListener('click', look);

// funtion to display the previous slide 
function rev() {
    // decrease the slide index to move to the previous slide
    num2--;

    // if the current slide index is less than 0, reset to the last slide
    if (num2 < 0) {
        num2 = secondSlide.length - 1;
    }

    // loop through all the slides and hide them 
    for (let i = 0; i < secondSlide.length; i++) {
        secondSlide[i].style.display = 'none'; // hide all slides
    }
    secondSlide[num2].style.display = 'block'; // display the current slide
}

// add an event listener to the 'previous' button to call the prev funtion when clicked
prevBtn2.addEventListener('click', rev);



