document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('game').classList.add('ready');

    let a = document.getElementById('game');
    
    a.innerHTML+="<button id='btn1'>shop</button>";
    a.innerHTML+="<button id='btn2'>home</button>";

    document.getElementById('btn1').onclick=function(){document.getElementById('game').innerHTML+='<div id="msg">rate</div>'}
    document.getElementById('btn2').onclick=function(){document.getElementById('game').innerHTML+='<div id="msg">reussi</div>'}
}