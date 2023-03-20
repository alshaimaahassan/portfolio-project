
// vars
let myNav = document.getElementById("myNav")
let blackBack = document.getElementById("blackBack")
let logForm = document.getElementById("logForm")


//functions

function openNav(){
    myNav.style.display =("block")
}


function closeNav(){
    myNav.style.display =("none")
}

function openForm(){
    blackBack.style.display =("block");
    logForm.style.display =("block");
}
function closeForm(){
    blackBack.style.display =("none");
    logForm.style.display =("none");
}