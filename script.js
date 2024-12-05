let myKeys = document.querySelectorAll('.key');

for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function() {
        // alert("Button " + myKeys[x].innerHTML + " was clicked")
        playAudio(myKeys[x]);
    })
}

//code for keyboard input which I am not using
// document.addEventListener('keydown', function (btn) {
//     console.log(btn.key);
// })


//function for defining which key button plays which note/mp3 file
function playAudio(key) {
    switch(key) {
        case myKeys[0]:
            var audio = new Audio('doremi/do.mp3');
            audio.play();
        break;
        case myKeys[1]:
            var audio = new Audio('doremi/re.mp3');
            audio.play();
        break;
        case myKeys[2]:
            var audio = new Audio('doremi/mi.mp3');
            audio.play();
        break;
        case myKeys[3]:
            var audio = new Audio('doremi/fa.mp3');
            audio.play();
        break;
        case myKeys[4]:
            var audio = new Audio('doremi/so.mp3');
            audio.play();
        break;
        case myKeys[5]:
            var audio = new Audio('doremi/la.mp3');
            audio.play();
        break;
        case myKeys[6]:
            var audio = new Audio('doremi/ti.mp3');
            audio.play();
        break;
        case myKeys[7]:
            var audio = new Audio('doremi/doh.mp3');
            audio.play();
        break;
    }

}