About
-----

Small script to get notified when a Golden/Wrath cookie appears in [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/),
the HTML5 life-sucking-game by Orteil.

No cheats, only a simple way to keep working while CC is burning your CPU in another tab.

It uses desktop notifications provided by (decently recent release of) **Chrome**. You'll
probably won't get a correct behavior with other browers. Anything non-webkit is a no-go,
in facts.

How do I use it ?
-----------------

All you've to do is enter this code in your JavaScript console (F12, Ctrl+Shift+r, …)

```
var js=document.createElement('script');
js.setAttribute('src','https://raw.github.com/Xfennec/CookieClicker/master/golden_notify.js');
document.body.appendChild(js);
```
… and then click on the "Notify me !" button on the upper right corner of the screen.

If you don't want to have to copy/paste the code each time you reopen the game, another 
option is to create a bookmark in your brower, and add this as the URL :

```
javascript:(function(){var js=document.createElement('script'); js.setAttribute('src','https://raw.github.com/Xfennec/CookieClicker/master/golden_notify.js'); document.body.appendChild(js);}())
```

Have fun not cheating this silly/brilliant game !

Xfennec.
