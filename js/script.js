$(function () {
    // Animate on scroll
    AOS.init();

    // Smooth scroll
    $('a[href^="#"]').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800/* , function () {
                window.location.hash = hash;
            } */);
        }
    });

    // Navigation appear/disappear
    $(document).scroll(function () {
        var topSection = $('#top');
        var navigation = $('header nav');
        var progressContainer = $('.progress-container');

        if ($(this).scrollTop() > (topSection.height() / 10)) {
            navigation.slideDown('slow');
            progressContainer.show();
        } else {
            navigation.slideUp('slow');
            progressContainer.hide();
        }
    });

    // Progress bar
    $(window).scroll(function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        
        $('#progress_bar').css('width', scrolled + '%');
    });

    // particles.js
    particlesJS.load('particles_js', '../assets/particles.json', function () {
        console.log('particles.js has been loaded.');
    });
    
    // Auto-update my age
    var date = new Date();
    var yearsOld = date.getFullYear() - 1994;
    if ((date.getDate() < 7 && date.getMonth() == 6) || (date.getMonth() < 6)) {
        yearsOld--;
    }
    $('#about span').text('I\'m ' + yearsOld + ' years old. ');

    // Auto-update current year
    $('footer span').text(date.getFullYear());
});