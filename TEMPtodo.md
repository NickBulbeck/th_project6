So, in no real order:

- add HTML to clickwall.pug, with an opaque thing and a form in it
- add DONTPANIC thing to layout.pug conditional on there being Douglas Adams cookie thing
- Render clickwall.pug unconditionally if there's no cookie set (see if https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_paths is any help).
- Consider having clickwall.pug rendered translucently over the actual page if it's a real route. Might work as a called function.