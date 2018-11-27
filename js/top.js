window.onscroll = function() {scrollFunction()};

// hide or show button
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "block";
    }
    else {
        document.getElementById("btnTop").style.display = "none";
    }
}

// go to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}