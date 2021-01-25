document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll("img");
    images.forEach(element => {
        element.addEventListener("click", function(event) {
            var img = document.createElement("img")
            img.src = element.src
            img.id = "enlarged"
            console.log(element.src)
            document.getElementById("overlay").appendChild(img)
            document.getElementById("overlay").style.display = "flex"
        })
    });

    var overlay = document.getElementById("overlay")
    overlay.addEventListener("click", function(event) {
        if (event.target === event.currentTarget) {
            overlay.style.display = "none"
            while (overlay.firstChild) {
                overlay.removeChild(overlay.firstChild)
            }
        }
    })
})