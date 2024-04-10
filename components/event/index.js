let menuBar = document.querySelector(".mobile-menu");



function showMenu(){
    if(menuBar.classList.contains("open")){
        menuBar.classList.remove("open")
    }else{
        menuBar.classList.add( "open" ); 
    }
}