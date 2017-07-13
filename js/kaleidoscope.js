'use strict';

window.onload = function() {
    startVideo();
};

function startVideo() {
    let localVideos = document.getElementsByTagName('video');
    let localStream;
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(function(stream) {
        localStream = stream;
        [].forEach.call(localVideos, function(video) {
            setTimeout(function() {
                video.src =  window.URL.createObjectURL(localStream);
            }, 0);
        });
    }).catch(function(error) {
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
    });
}