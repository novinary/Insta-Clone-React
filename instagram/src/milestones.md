Milestone I
At this point I have a working app with a component tree that is setup kind of like this (note that this is not a design spec!):
![alt text](https://raw.githubusercontent.com/novinary/Insta-Clone-React/novina-pun/instagram/src/images/InstaClone-componentStructure.jpg)
- Dummy data should be imported to app.js, and then passed as props to each PostContainer.
- Each PostContainer should then be passing data to a CommentSection via props as well.
- The props being passed to each component should be typed checked using propTypes and defaultProps.
- The comment section should add a comment to the post

Milestone II
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
Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term passe
