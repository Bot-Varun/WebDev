const buttonClick = document.getElementById("box1");

buttonClick.addEventListener("click", e=>{
    if (body.style.backgroundColor === "black"){
        body.style.backgroundColor = "white";
    }
    else{
        body.style.backgroundColor = "black";
    }
})