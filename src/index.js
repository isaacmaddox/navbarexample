$(document).scroll(function () {
    let scroll = $(document).scrollTop();
    if (scroll > 32 && $("nav").hasClass('pt-16') == true) {
        $("nav").removeClass('pt-16').addClass('pt-4').removeClass('border-b-transparent').addClass('border-b-gray-100').addClass('dark:border-b-gray-800');
    } else if (scroll <= 32 && $("nav").hasClass('pt-16') == false) {
        $("nav").addClass('pt-16').removeClass('pt-4').addClass('border-b-transparent').removeClass('border-b-gray-100').removeClass('dark:border-b-gray-800');
    }
});
let menuOpen = false;
$(document).on('click', '.menu', function () {
    if (!menuOpen) {
        $("nav").addClass('mobile:pb-24').addClass('mobile:shadow-lg');
        $(".first-links, .second-links").removeClass('mobile:opacity-0').removeClass('mobile:pointer-events-none');
        menuOpen = !menuOpen;
    } else {
        $("nav").removeClass('mobile:pb-24').removeClass('mobile:shadow-lg');
        $(".first-links, .second-links").addClass('mobile:opacity-0').addClass('mobile:pointer-events-none');
        menuOpen = !menuOpen;
    }
});