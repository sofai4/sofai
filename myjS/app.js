let opt = document.getElementById("down");
let btn = document.getElementById("btn-down");


function red() {


    if(opt.value == 'cours') {

 
        window.location.href = "download/cours.html";
        
        }
        
        if(opt.value == 'games') {
        
            window.location.href = "download/games.html";
        
        }
        
        
        if(opt.value == 'doc') {
        
            window.location.href = "download/doc.html";
        
        }
        
        
        if(opt.value == 'res') {
        
            window.location.href = "download/res.html";
        
        }


}


function send() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let ms = document.getElementById("ms");

    console.log(name.value);
    console.log(email.value);
    console.log(ms.value);
    alert("Thank You For Your Time")
    

}
