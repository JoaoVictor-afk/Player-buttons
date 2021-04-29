let video= document.getElementById("video1")

function retroceder(){
    video.currentTime -= 10
}

function avancar () {
    video.currentTime+=10

}
function diminuirvel() {
    video.playbackrate -=0.25

}
function aumentarvel() {
    video.playbackrate +=0.25
}
function play() {
video.play()
}
function stop(){
    video.pause()
   // video.currentTime= 0
}