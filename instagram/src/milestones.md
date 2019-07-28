** Milestone I **
At this point I have a working app with a component tree that is setup kind of like this (note that this is not a design spec!):
![alt text](https://raw.githubusercontent.com/novinary/Insta-Clone-React/novina-pun/instagram/src/images/InstaClone-componentStructure.jpg)
- Dummy data should be imported to app.js, and then passed as props to each PostContainer.
- Each PostContainer should then be passing data to a CommentSection via props as well.
- The props being passed to each component should be typed checked using propTypes and defaultProps.
- The comment section should add a comment to the post

** Milestone II **
- Use lifecycle methods
In app.js use componentDidMount() to set your data to the component's state. Use the state object to pass data to your PostContainer component.

- Adding comments
Create a function in app.js called addNewComment that takes in an event and an index number. The function will add the comment that is on the event object to the post that is at that index number.
Pass the addNewComment function down the component tree to where ever you have your 'Add a comment...' input.
The 'Add a comment...' input should be wrapped in a <form></form> element. Using that form's onSubmit event handler, invoke the addNewComment function and pass it the required arguments it needs to add a new comment.
Update your state with the new comment (This should trigger your component tree to "re-render" with your new comment on that post).

- Liking posts
This will be set up a lot like the 'Add a comment...' input. Pass a function down to where your heart icon is, and use onClick event handler to increment that post's likes.

- Search
Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term  passed in, then update the state with the resulting data.


** Milestone III **
- Today I will be building a "Higher Order Component" (HOC)
- The HOC will not let users see the posts until they have logged in. (Our login system for this will be faked using LocalStorage).
- The job of the HOC will be to render a login page if the user is not logged in, then render the posts after the user is logged in.

- Create a <PostsPage /> component in your components/PostsContainer directory.
I'll have to move a lot of what is rendered in app.js to this new component
Render the PostsPage component in app.js

- Building the High Order Component
Create a directory called Authentication
Inside that directory create a component called <Authenticate />. This is where all of the magic is going to happen.
This component should be able to take in a component as an argument, and it will return a class component.
Inside of <Authenticate />'s render method, return the Component that gets passed into it.
Be sure to export out this component.
Head over to App.js and import in our new Authenticate Higher Order Component and pass in App.

- Build out the LoginPage component. 
In my components directory, create a directory called Login and add a new file called Login.js.
There should be a username input, a password input, and a Login button.
The component should invoke the login function in app.js when a user logs in.
This login function should set a username on localStorage. I'll need to check local storage to see if a user is logged in.
Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.

- Extending the functionality of the HOC to conditionally render the LoginPage or the App
Inside of Authenticate we need to add a constructor to hold our state data.
On state we need a user loggedIn boolean flag.
On componentDidMount we need to check localStorage to see if a user is logged in.
Inside of the render function we will check if a user is logged in
If a user is logged in we will return the <App />, else we will return the <LoginPage>


Milestone III - Add styled-components
- Change everything to be a Styled Component. (Except for where I need to reference your icon classNames.)

- Re-factor SearchBar to use styled-components.

- Create a Header styled-component.header that wraps your entire SearchBar.
Work left to right so begin changing out styles on the instagram logo.
Create a LogoHeader styled-component.div
Create a LogoImage styled-component.img that fills in the background of my choice

- Re-factor PostContainer component using only styled components
Start with the UserThumbnail and Username
Note that the Username styles could most certainly be used by my CommentSection component as well.
To achieve this, I'll simply just build out my reusable styled-component inside of a Styles/Reusables directory. This is where I could store all of my reusable styled components and export them out of their respective files to then import them for reuse.
Notice that the Username on top of the Post is a bit bolder than the Username's found in the comment section. If there is a way to make this reusable styled component accept a prop that will distinguish it from being now is the time to figure that out.














