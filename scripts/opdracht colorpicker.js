const inititaliseer = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
};
const update = () => {
    let rood =document.getElementById("sRood").value;
    let groen =document.getElementById("sGroen").value;
    let blauw =document.getElementById("sBlauw").value;

    document.getElementById("lRood").innerHTML= rood;
    document.getElementById("lGroen").innerHTML= groen;
    document.getElementById("lBlauw").innerHTML= blauw;

    let shape=document.getElementById("shape");
    shape.style.backgroundColor="rgb("+ rood + "," + groen + "," + blauw + ")";
};
window.addEventListener("load", inititaliseer);