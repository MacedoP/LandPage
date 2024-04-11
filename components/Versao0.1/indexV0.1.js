function openMenu(){
    const openMenu =document.querySelector(".div-menu-mobile")
    if(openMenu.classList.contains("open")){
        openMenu.classList.remove("open")
        document.querySelector(".icon").src="../images/menu_white_36dp.svg" ;
    }else{
        openMenu.classList.add("open");
        document.querySelector(".icon").src="../images/close_white_36dp.svg" ;
    }

}
