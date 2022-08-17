

        AOS.init({
        offset: 200,
        duration: 1000
        }
    );

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
        }

        function showcard(){
            all.forEach(img=>img.parentNode.style.display='none')
            card.forEach(img=>img.parentNode.style.display='block ')
        }

        function showapp(){
            all.forEach(img=>img.parentNode.style.display='none')
        }

        function showall(){
            all.forEach(img=>img.parentNode.style.display='block')
        }