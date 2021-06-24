document.addEventListener("DOMContentLoaded",function(){
    let darkMode = document.getElementById("button")
    let body = document.body;
    darkMode.addEventListener("click",function(){
        body.classList.toggle("dark");
    })

})