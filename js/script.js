
        AOS.init({
        offset: 200,
        duration: 1000
        }
    );

    
//----------------------------------------------------------------------------------------- Typewriter
    var app = document.getElementById('typeWriterText');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
    });
    
    typewriter
        .pauseFor(2500)
        .typeString(' Im a <span class="typeUnderline"> Developer ....</span> ')
        .pauseFor(300)
        .deleteChars(15)
        .typeString('<span class="typeUnderline"> Designer !</span>')
        // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
        .pauseFor(1000)
        .start();
    
// ------------------------------------------------------------------------------------------------------------------
        
        var loader = document.getElementById('preload');

        window.addEventListener("load", function(){
            loader.style.display="none";
        })

        var mybutton = document.getElementById("top-btn");

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        var menu_btn = document.getElementById("screen-menu-btn");
        var hide_menu_button = document.getElementById("screen-menu-btn1");
        var menu = document.getElementById("side-column")

        function showmenu() {
                menu.style.display = "block";
                menu_btn.style.display = "none";
                hide_menu_button.style.display = "block";
            }

            function hidemenu(){
                menu.style.display = "none";
                menu_btn.style.display = "block";
                hide_menu_button.style.display = "none";
            }

        var websites = document.querySelectorAll(".web");
        var card = document.querySelectorAll(".card");
        var logos = document.querySelectorAll(".logo");
        var all = document.querySelectorAll(".all");



        function showweb(){
            all.forEach(img=>img.parentNode.style.display='none')
            websites.forEach(img=>img.parentNode.style.display='inline ')

            document.querySelector('.portfolio-categories li.active1').classList.remove('active1')
            document.querySelector('.portfolio-categories li.weblink').classList.add('active1')

        }

        function showcard(){
            all.forEach(img=>img.parentNode.style.display='none')
            card.forEach(img=>img.parentNode.style.display='flex '); document.querySelector('.portfolio-categories li.active1').classList.remove('active1')
            document.querySelector('.portfolio-categories li.cardlink').classList.add('active1')
        }

        function showapp(){
            all.forEach(img=>img.parentNode.style.display='none'); document.querySelector('.portfolio-categories li.active1').classList.remove('active1')
            document.querySelector('.portfolio-categories li.applink').classList.add('active1')
        }

        function showall(){
            all.forEach(img=>img.parentNode.style.display='flex'); document.querySelector('.portfolio-categories li.active1').classList.remove('active1')
            document.querySelector('.portfolio-categories li.alllink').classList.add('active1')

        }

        var swiper = new Swiper(".slider-container", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            centerSlide: "true",
            fade: "true",
            grabCursor: "true",
            autoplay: {
                delay: 2000,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: 'true',
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            breakpoints:{
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
            },
          });