window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 0) {
        header.classList.add("white-background");
        header.classList.remove("transparent");
    } else {
        header.classList.add("transparent");
        header.classList.remove("white-background");
    }
};