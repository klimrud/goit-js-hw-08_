
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

const VIDEO_KEY = 'videoplayer-current-time';
const onIframePlayer = function ({seconds}){
    // console.log(data);
    // console.log('played the video!');
    try{
   localStorage.setItem(VIDEO_KEY,JSON.stringify({seconds}));
   }catch (err){
    console.log(err);
   };
};

const throttleInfPlayer = throttle(onIframePlayer,1000)

iframePlayer.on('timeupdate', throttleInfPlayer);

const getCurrentTime = function (){
    const getStory = localStorage.getItem(VIDEO_KEY) || 0;
    const parseStory = JSON.parse(getStory);
    console.log(parseStory.seconds);
    return parseStory.seconds;  
}

 iframePlayer.setCurrentTime(getCurrentTime())

// iframePlayer.on('play', function() {
//     console.log('played the video!');
//     console.log();
// });
// ======================================
// iframePlayer.getCurrentTime(0.000).then(function(seconds) {
//     // seconds = the current playback position
//     console.log(seconds);
// }).catch(function(error) {
//     // an error occurred
//     console.log(error);
// });

// iframePlayer.getPaused().then(function(paused) {
//     // paused = whether or not the player is paused
//     console.log(paused);

// }).catch(function(error) {
//     // an error occurred
// });

// iframePlayer.getPlayed().then(function(played) {
//     // played = array values of the played video time ranges.
//    console.log(played)
    
// }).catch(function(error) {
//     // an error occurred
// });

// iframePlayer.getVideoEmbedCode().then(function(embedCode) {
//     // embedCode = <iframe> embed code
// }).catch(function(error) {
//     // an error occurred
// });
// ========================================================




