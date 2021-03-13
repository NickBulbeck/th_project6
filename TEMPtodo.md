So, to refactor the cookie:

 - at the moment, you have to re-start the server to reset the da flag.
 - this needs to work from cookies.
 - and in the non-da post code, it needs to un-set it.
 - which needs a wee TDD'd unset function.
 - then, in the app* thing, set it based on the cookie

To refactor the code design itself:
 - create a clickwall.js file
 - create a route for it, with a require variable and an app.use
 - try moving the app.get* code into it
 - try moving the app.post code into it

 To improve the cookiewall itself:
 - style the buttons
 - move the paragraphs and headings into the middle of the page

 Possible bigly refactors:
 - remove the layout.pug template from cookiewall, or add more of a front page