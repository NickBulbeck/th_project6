So, to refactor the cookie:

 - at the moment, if you stop and re-start the server, the cookie stays but the da boolean does not.
 - try and re-write the code so that it checks the cookie every time...
 - ... maybe this can be done in the app.get * route
 - see if you can re-render the layout.pug template when the first page is loaded

To refactor the code design itself:
 - create a clickwall.js file
 - create a route for it, with a require variable and an app.use
 - try moving the app.get* code into it
 - try moving the app.post code into it

 To improve the cookiewall itself:
 - style the buttons
 - move the paragraphs and headings into the middle of the page

 Possible bigly refactors:
 - remove the layout.pug template from cookiewall, or add a standard front page