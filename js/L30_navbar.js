const navbar = document.getElementById('navbar');

// for navbar to disappear onscrolled down 100px
let scrolled = false;
// when scrolled down to 100px, disable transparent navbar
window.onscroll = function () {

    if (window.pageYOffset > 100)
    {

        // rmeove transparent
        navbar.classList.remove('top');

        // and remove navbar for 1000ms
        if (!scrolled)
        {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {

            // then put on back navbar after 1000ms
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 1000);
    } else
    {
        navbar.classList.add('top');
        scrolled = false;
    }
};