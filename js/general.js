document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", e => {
        // get vh from this stackoverflow question: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
        var vh = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, 
                       document.documentElement.offsetHeight);
        var btn = document.getElementById("to-top")
        if (window.scrollY/vh >= 0.25) {
            btn.disabled = false
            btn.style.display = "block"
        } else {
            btn.style.display = "none"
            btn.disabled = true 
        }

    })

    document.getElementById("to-top").addEventListener("click", e => {
        window.scrollTo(0,0)
    })
})