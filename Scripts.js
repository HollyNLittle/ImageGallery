//grab current image
const current = document.querySelector('#current');
//puts images node list in a which is like an array
const imgs = document.querySelectorAll('.imgs img');
//opacity
const opacity = 0.6;

//set 1st img opacity
imgs[0].style.opacity = opacity;

//loop through the images and add evenlistener to each
//1st way does work, changed it to use a function
//1st way-imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));
//2nd way
imgs.forEach(img => img.addEventListener('click', imgClick));
//when clicked make img the current image, passed in event
function imgClick(e) {
    //reset opacity of all images so only 1 is sheer
    imgs.forEach(img => (img.style.opacity = 1));

    //change current img to source of clicked image
    current.src = e.target.src;

    //add fade in class
    current.classList.add('fade-in');

    //remove the fade in class after 5milliseconds to reset
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //change style of opacity opacity
    e.target.style.opacity = opacity;
}

