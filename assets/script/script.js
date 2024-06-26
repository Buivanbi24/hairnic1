$(function () {
    $('.snazzymenu').snazzyMenu({
        theme: "",
    });

    AOS.init({
        once: true,
    });

    if ($('.flipdow').length > 0) {

        // Ngày kết thúc xác định: (yyyy, mm, dd, hh, mm, ss, ms)
        var endDate = new Date(2024, 6 - 1, 30, 12, 0, 0, 0);
        //Vì tháng trong js tính từ số 0 thay vì số 1 như thông thường, nên phải -1

        // Tính thời gian còn lại
        var countdownDate = Math.floor(endDate.getTime() / 1000);

        var flipdown = new FlipDown(countdownDate);
        flipdown.start();

    }

    


    //quay ve dau
    var $button = $.backToTop({
        backgroundColor: '#90BC7A',
    });
    //carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            10000: {
                items: 1
            }
        }
    });

    //gán số vào dots
    $('.testimonial-carousel .owl-dot span').each(function (index, elem) {
        $(elem).html(index+1);
    });

    //xử lý code #btn-main-blog-ext
    $("#btn-main-blog-ext").on("click", function (e) {
        //khong cuon ve dau trang
        e.preventDefault();
        $(this).hide();

        //noi dung
        $("#main-blog-ext").hide();
        $("#main-blog-ext").removeClass("d-none");
        $("#main-blog-ext").slideDown();

        setTimeout(function () {
            $("#main-blog-ext").get(0).scrollIntoView();
        }, 1000);
    });
}); 