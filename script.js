document.addEventListener("DOMContentLoaded",function(){
    let darkMode = document.getElementById("button")
    let me = document.getElementById("me")
    let body = document.body;
    darkMode.addEventListener("click",function(){
        body.classList.toggle("dark");
        if(!body.classList.contains("dark")){
            me.setAttribute("src","downloads/black.png")
        }else{
            me.setAttribute("src","downloads/white.png")
        }
    })
})