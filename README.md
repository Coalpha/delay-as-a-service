# delay-as-a-service
A package that you should never use!
This is the delay-as-a service API. Host it yourself.
This wasn't meant to be practical either.
To make requests to this server, you must query it.

For example:

`coalpha.github.io/delay-as-a-service/query?ms=1000,time=1520132166330`

By the way, I'm not actually hosting it there so don't send requests to that URL. It's not gonna work.

This API does take into account the delay between the client and the server. Be warned though, it can't send messages back in time.
Here's the delay function. You'll have to change the URL to the actual place where it's being hosted.
```js
function delay(ms) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/query?ms=${ms}&time=${new Date().getTime()}`, false);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}
```
If you like minified code have a hand-minified function.
```js
delay=(m,x=new XMLHttpRequest())=>(x.open('GET',`/query/?ms={m}&time=${new Date().getTime()}`,0),x.send());
```
