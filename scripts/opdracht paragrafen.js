const setup = () => {
    let pDruk = document.getElementsByClassName("druk");
    for (let i = 0; i < pDruk.length; i++) {
        pDruk[i].className += " rood";
    }
}
window.addEventListener("load", setup);