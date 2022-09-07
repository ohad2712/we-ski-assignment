# we-ski-assignment
A basic hotel search web app. The app integrates with an API provider to fetch hotels’ availability.

## Usage
### Install
Run in both root and `client/` directory:
```bash
npm ci
```

### Start the server side
```bash
npm start
```

### Start the client side server
```bash
npm start
```

## What's left or not working:
1. The UI part is quite far from being done. Most elements, components and necessary logic is already there. However, things are not connected to each other at the moment, hence the app cannot be seen.
2. Due to some technical issues which minimized the quite limited amount time given for this assignment, some hacks and hard-coded values were used in the server-side. I couldn't check yet if the search works properly as it uses a socket connection for each provider, and that would have been checked via the UI by searching for hotel rooms.
3. Tests are obviously missing, and same goes for CSS, and some other small refactoring I'd probably do when given the time.

It's not the best implementation result I could come up with regarding a running app, but I am feeling quite comfortable with the ideas and the structure of the service. 
