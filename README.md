# Track Chooser Client

### App Explanation

The app makes it easy for users to keep track of their favorite tracks and lets
them store information about the tracks such as the Key Signature and the Tempo
(in beats per minute).  This information is especially helpful for DJs who are
working to put together a set and need tracks with a certain bpm.
Users can create a track resource using a form with respective inputs.
Users can update the tracks using a similar form that pre-populates with the
existing information.

Also, users are able to delete songs from their list of tracks as well as view
a list of all of their saved tracks. Only the title and artist of the tracks are
visible in this state. To see all attributes of a single track, users must view
that specific track.

 ### Project Links

 1.  [ ]  Front-End Repo: https://github.com/rrbixler/track-chooser-client
 1.  [ ]  Back-End Repo: https://github.com/rrbixler/track-chooser-api

 1.  [ ]  Front-End Deployed Site: https://rrbixler.github.io/track-chooser-client/#/sign-in
 1.  [ ]  Back-End: https://shielded-cove-86358.herokuapp.com/

 ### Technologies Used

 React, React-Bootstrap, Javascript, SCSS, Ruby on Rails

 ### Unsolved Problems that would be fixed in future iterations

I would like to have a search function that connects to a third party api (spotify)
With this search function, users can search for tracks this way instead of having
to manually enter information.

 ### Planning Documentation, Process and Problem Solving strategy
 My initial plan was to implement spotify's third party API the whole time.  However, I  ran into
 problems on Day 1 with my back-end and had to make an entire new back end repository and heroku.
 At that point I decided to put off the third-party API until after project week.  I ran into countless
 error messages while figuring out the ins and outs of react but Googling my error messages and using the
 issue cue helped me to overcome most of these roadblocks.

 One of my problems I ran into: when i originally scaffolded out my resource for tracks, I used "key" as a keyword to reopresent 'key signature' which I eventually had to change to "keysig".  This was creating errors in which the key signature of the song (represented as a number) was being read by the console as the actual data key for the track and not the representation of the key signature.

### Wireframes

https://imgur.com/Jfku5lp
https://imgur.com/us5dUZp

### User Stories

1.  [ ]  as a user I want to sign up to use the Track Finder app
1.  [ ]  as a user I want to sign in to use the Track Finder app
1.  [ ]  as a user I want to change my password
1.  [ ]  as a user I want to sign out of use the Track Finder app
1.  [ ]  as a user I want to view a single track by id
1.  [ ]  as a user I want to view all the tracks in my collection by title and artist
1.  [ ]  as a user I want to create a track
1.  [ ]  as a user I want to edit a track by id
1.  [ ]  as a user I want to delete tracks from my collection
#### Version 2 goals:
1.  [ ]  as a user I want to sign in to use the Spotify's API
1.  [ ]  as a user I want to search spotify for tracks and query searh to include searching by bpm
1.  [ ]  as a user I want to add properties of search result tracks to a new track in my colleciton

 ### Set Up and Installation Instructions
To use the app, simply sign up with a fake email account and password of your choice.
There is no other

<img width="1109" alt="Screen Shot 2019-06-07 at 6 42 14 AM" src="https://user-images.githubusercontent.com/48069692/59099235-95e74100-88f0-11e9-8630-7a691ea4e1c9.png">
