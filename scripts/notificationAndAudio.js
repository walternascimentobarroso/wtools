'use strict';

const title = 'Success';
const msg = 'Message';
const icon = 'https://via.placeholder.com/50x50';
const song = 'songs/notification.mp3';

buttonEl.addEventListener('click', notifyMe);

function notifyMe() {
    if (!('Notification' in window)) {
        alert('This browser does not support Desktop notifications');
    }
    if (Notification.permission === 'granted') {
        callNotify(title, msg, icon);
        return;
    }
    if (Notification.permission !== 'denied') {
        Notification.requestPermission((permission) => {
            if (permission === 'granted') {
                callNotify(title, msg, icon);
            }
        });
        return;
    }
}

function callNotify(title, msg, icone) {
    new Notification(title, { body: msg, icon: icone });
    new Audio(song).play();
}
