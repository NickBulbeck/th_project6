Welcome to Project 6!

CSS changes
***********
I can't pretend that I've revolutionised the world of front-end design
with this project; that was never the intention. I've really made the
basic minimum of stylistic changes for the Exceeds Expectations rubric:
 - Added a lightGrey and darkGrey colour variable for the paragraph text;
 - Added the colour to the article background
 - Added box shading to the image links on the home page;
 - Added a transition to the box-shading.
One more change is textual. In links to the index page (or '/'), I've 
replaced 'Back' with 'Home'; this is a clearer UX (and it's not a true
'back'-button anyway).

So, there you are.




Other matters of interest and general excitement:

**********************
npm start and nodemon
********************** 
I've included nodemon in package.json so npm start launches the app,
but also the server re-starts when a change is made. I've also set
nodemon to watch all the .pug, .css and .js files.

*****************************************
content.json file and .js/createLocals.js
*****************************************
I've added a content.json file that contains all the text content for
the pages other than the projects themselves (which is in data.json).
Could've added it all to data.json, I suppose, although that would've made
data.json a bit big, and harder to read/de-bug.

The idea is to keep all of the app's content stored in one, separate place.
This is helpful from a building POV, as it meant I was able to polish the 
text content of the app by editing only one file instead of multiple pug
templates. And from a design POV, it helps reinforce good practice via 
the standard idea of separation of concerns.

Just as importantly, it means that I could in principle upgrade the app
to use a database to store all the content (rather like WordPress). This
would leave most of the code intact, and only js/createLocals.js would need
to be updated.

**************
Error handling
**************
The error handling is also done in separate files, within the .js/ folder.
Note that the route about/error triggers the generation of an error object -
this is a wee dodge to test that the error-handling works.

**********************
Automated unit-testing
**********************
I've used mocha and chai to include some basic unit-tests of the files 
in the ./js folder. And this IS basic; I haven't added any tests of the
routes themselves, for instance, which is an important ToDo! So, my test
coverage is pretty low here, and I've mainly included it just to get the
TDD ball rolling.
All the tests can be run by typing npm test in the console.

******************
Cookie preferences
******************
I added in a cookie-preferences front page, just for a bit of fun. To be fair, 
I'm having to be quite flexible with the definition of "fun" here, but I'm
glad I got it working. It was this that I used to add the Douglas-Adams-themed
easter egg.

****
ToDo
****
1)  Update the code in clickwall.pug so that it conditionally renders at the foot of
    about.pug - that way, I won't have a lot of duplicate pug code! I know, I know...
    I just needed a working proof of concept.
2)  The error-handling bother mentioned in the comments in app.js.
3)  Add this project itself to the list of projects that it displays, possibly
    with some kind of note about recursion. I might even be able to incorporate
    Russell's Paradox somehow.