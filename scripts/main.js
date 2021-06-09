const shareIcon = document.querySelector('.share');
const about = document.querySelector('.about');
const socialLinks = document.querySelector('.social-links');
const returnBtn = document.querySelector('.icons-share');
const information = document.querySelector('.information');
const mediaQuery = window.matchMedia("(max-width: 600px)")

// functions
function toggleDisplayMedia() {
    if(about.style.display === 'flex') {
        about.style.display = 'none';
        information.classList.add('no-padding-bottom');
        socialLinks.style.display = 'flex';
        information.style.borderRadius = '0';
    } else {
        about.style.display = 'flex';
        socialLinks.style.display = 'none';
        information.classList.remove('no-padding-bottom');
        information.style.borderRadius = '0 0 10px 10px';
    }
}

// event listeners
shareIcon.addEventListener('click', toggleDisplayMedia);
returnBtn.addEventListener('click', toggleDisplayMedia);


// at startup
toggleDisplayMedia();


