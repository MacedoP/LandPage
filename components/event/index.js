const menuBar = document.querySelectorAll(".menu-bar");



function openMenu(){
    if(menuBar.style.display === "block"){
        menuBar.style.display = "none";
    }else{
        menuBar.style.display =" block"
    }
}