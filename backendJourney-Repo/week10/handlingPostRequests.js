//Handling POST Requests - 
// Parse JSON request bodies, 
// validate incoming data, 
// and send appropriate responses


let watchTrailer = document.getElementById('watchTrailer');
let popUpVideo = document.getElementById('popUpVideo');
let synopsis = document.getElementById('synopsis');
let playButton = document.getElementById('playButton');
let iframeVideo = document.getElementById('iframeVideo');


watchTrailer.addEventListener('click', () => {
    
    if (popUpVideo.style.display === 'flex'){
            popUpVideo.style.display = 'none';
            synopsis.style.display = 'flex';
        }
        else{
        synopsis.style.display = 'none';
        popUpVideo.style.display = 'flex';                    
    }
})

iframeVideo.style.display = 'none';

playButton.addEventListener('click', () => {
    iframeVideo.style.display = 'flex';
})
