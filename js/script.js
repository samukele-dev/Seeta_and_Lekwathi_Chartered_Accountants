    document.addEventListener("DOMContentLoaded", function() {
        var navLinks = document.querySelectorAll(".menu-item");

        navLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navLinks.forEach(function(otherLink) {
                    otherLink.classList.remove("active");
                });

                link.classList.add("active");
            });
        });
    });