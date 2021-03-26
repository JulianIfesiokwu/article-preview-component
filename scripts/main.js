const shareIcon = document.querySelector('.share');
const about = document.querySelector('.about');
const socialLinks = document.querySelector('.social-links');
const returnBtn = document.querySelector('.icons-share');

// functions
function toggleDisplayMedia() {
    if(about.style.display === 'flex') {
        about.style.display = 'none';
        socialLinks.style.display = 'flex';
    } else {
        about.style.display = 'flex';
        socialLinks.style.display = 'none';
    }
}




// event listeners
shareIcon.addEventListener('click', toggleDisplayMedia);
returnBtn.addEventListener('click', toggleDisplayMedia);


// at startup
toggleDisplayMedia();


