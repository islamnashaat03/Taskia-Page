if (window.matchMedia("(max-width: 991px)").matches) { 
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:false,
                    loop:false
                }
            }
        })
    };
    function ValidateEmail() {
        var email = document.getElementById("txtEmail").value;
        var mailErorr = document.getElementById("mailErorr");
        mailErorr.innerHTML = "&#10004";
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{1,4}|[0-9]{1,3})(\]?)$/;
        if (!expr.test(email)) {
            mailErorr.innerHTML = "Invalid email address.";
        }
    };


