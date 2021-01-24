document.addEventListener("DOMContentLoaded", function () {
    var videos = document.querySelectorAll("video");
    videos.forEach(element => {
        element.addEventListener("click", function(event) {
            var vid = document.createElement("video")
            vid.src = element.src
            vid.controls = element.controls
            document.getElementById("overlay").appendChild(vid)
            document.getElementById("overlay").style.display = "block"
            event.preventDefault()
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