var index = 0;

slider();
function slider() {
    let nav = document.getElementsByClassName("nav");
   
    for (i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(" actnav", "");
    }
    index++;
    if (index > nav.length) 
        { index = 1; }
    nav[index - 1].className += " actnav";
    setTimeout(slider, 4000);
}
