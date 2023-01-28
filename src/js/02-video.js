import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('play', function(data) {
    console.log('played the video!');
});

iframePlayer.on('eventName', function(data) {
    // data is an object containing properties specific to that event
   console.log({data});
});

let callback = function() {};

iframePlayer.off('eventName', callback);