var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;

function startInterval(){
    startTimer = setInterval(function() {
        timer();
    }, 1000);
}

start.addEventListener('click', function(){
    startInterval();
}, {once : true})


reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval()
    location.reload()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        var audio = new Audio('audio/alarm-sound-21949.mp3');
        audio.play();
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}


function stopInterval() {
    clearInterval(startTimer);
}