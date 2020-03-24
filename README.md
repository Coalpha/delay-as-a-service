# Delay as a Service

*You heard it here first, folks*

Pausing the JavaScript event loop is almost always a bad idea.
As you can see, this hasn't stopped me.
The way this works is by sending a synchronous `XMLHttpRequest` and then hanging
until the server sends something back. This method does, of course, require a
server of some sorts. Theoretically, the server could be implemented using a
service worker so that latency is no longer an issue.
I'll leave that up to someone else to implement.

### Check out the example webpage:

[![Click me, I'm a link!](example/example.png "The example DAAS webpage")](example)
