
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

const VIDEO_KEY = 'videoplayer-current-time';

const onIframePlayer = function ({seconds}){

    // console.log(data);
    // console.log('played the video!');
    localStorage.setItem(VIDEO_KEY,JSON.stringify(seconds)) || 0;
  //  console.log(typeof seconds)
  ;
};

const throttleInfPlayer = throttle(onIframePlayer, 1000)

iframePlayer.on('timeupdate', throttleInfPlayer);

const getCurrentTime = function (){

     const getStory = localStorage.getItem(VIDEO_KEY) || 0;
    // const parseStory = JSON.parse(getStory);
    // if(getStory){
    // console.log(getStory);
    return getStory;  
    // }
}

 iframePlayer.setCurrentTime(getCurrentTime() || 0)

// ======================================

// ========================================================


