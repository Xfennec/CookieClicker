
var panel=document.createElement('div');
panel.style.position='fixed';
panel.style.top='0px';
panel.style.right='0px';
panel.style.backgroundColor='white';
panel.style.color='black';
panel.style.padding='5px';

document.body.appendChild(panel);

panel.innerHTML="<button onclick=\"register()\">M'alerter des goldens</button>";

function register()
{
if(window.webkitNotifications.checkPermission()!=0)
    window.webkitNotifications.requestPermission(register_step2);
else
    register_step2();
}

function register_step2()
{
if(window.webkitNotifications.checkPermission()!=0)
    {
    alert('No notification support for you :(');
    }

var alerted=false;

setInterval(function() {
    if(!alerted && Game.goldenCookie.life>0)
        {
        alerted=true;
        show_alert();
        }
    else if(Game.goldenCookie.life==0)
        alerted=false;
},100);
panel.innerHTML='';
}


function show_alert()
{
var icon='http://orteil.dashnet.org/cookieclicker/img/goldCookie.png';
var title='Golden cookie';
var message='Just available.';
var notification = window.webkitNotifications.createNotification(icon, title, message);
notification.show();
setTimeout(function() {notification.cancel(); },5000);
}
