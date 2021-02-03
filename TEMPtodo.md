So, in no real order:

- add HTML to clickwall.pug, with an opaque thing and a form in it
- add DONTPANIC thing to layout.pug conditional on there being Douglas Adams cookie thing
- Render clickwall.pug unconditionally if there's no cookie set (see if https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_paths is any help).
- Consider having clickwall.pug rendered translucently over the actual page if it's a real route. Might work as a called function.

- Ideas: use window.onload() and client-side JS. Problem then if JavaScript disabled.


To get started:
 - create an app.get('*',etc) - works.
 - Find the HTML for a suitable form fae one of the projects - OK.
 - Get clear on the form action - think it means the url.
 - Create a prototype pug template for the cookies form
 - Create a prototype app.post() method for the form
 - The app.post() call responds to the form.