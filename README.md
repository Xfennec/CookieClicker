About
-----

Small script to get notified when a Golden/Wrath cookie appears. 

It uses desktop notifications provided by (decently recent release of) **Chrome**. You'll
probably won't get a correct behavior with other browers. Anything non-webkit is a no-go,
in facts.

All you've to do is enter this code in your JavaScript console (F12, Ctrl+Shift+r, …)

```
var js=document.createElement('script');
js.setAttribute('src','http://localhost/temp3/cookie_clicker.js');
document.body.appendChild(js)
```

Xfennec.
