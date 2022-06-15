# Welcome to Project Purple Cow!

## Description:

This is a simple counting application that fetches a number of "hits" from CountAPI and reveals it to the user whenever a button is pressed.

## Deployment:

This application can be locally deployed using Docker, by navigating to the root /purple-cow directory and typing the command `docker compose up` or `npm up`. This will run the app from its Docker image at localhost:3000. To exit, type "ctrl+C" into the command line to stop the react server, then `docker compose down` or `npm down`.

If you need to change the port locally, you can modify the frontend port in the docker-compose.yml file to "${your port here}:3000".

## Future Updates:

### Updating the hit count

I have used the CountAPI docs to construct an "endpoints.set" URL in the useCountAPI custom hook which, if placed in the fetch request along with a "newValue" parameter, would reset the hit count to the provided parameter.  This might come in handy if the app were to include a "reset" button, for instance, with a hardcoded paramenter of 1 or 0.

It would also be easy to create a "hit" URL endpoint using the same process (``${BASE_URL}/hit/${API_NAMESPACE ? API_NAMESPACE + "/" : ""}${API_KEY}``) which would increment the hit count by one each time the request was sent.  This could allow the counter to track how many times the button has been pressed.

### Testing

This application was built quickly, and I spent a lot of that time studying Docker since I didn't have experience setting it up myself.  Because of this, I only made a couple rudimentary tests instead of taking the time to think through using TDD principles, or writing tests for all of the logic branches in the app.

### Building out the application

This app only includes a react front end constructed with create-react-app in the react-app folder.  I have left a package.json file in the root purple-cow folder and have included the very simple docker-compose file with only one service, the "frontend", to make it easy to expand this app and include a back end service, a database, or any other process.

### Docker

Given that I don't have much prior Docker experience, I chose leave the "build" key commented out in my yaml file.  That way, in case I've made a mistake, the option exists to remove the "image" and un-comment the "build" line instead, which takes a little longer but also worked on my machine.

I also realized once I had it in working order that I'd used the `npm start` shortcut instead of `npm build`.  I'm sure that once I practice more with Docker, my work will be a bit more consisten when it comes to creating something that is meant to be run in development mode vs. in production mode.  For the time being, I left it as-is lest I wind up in a rabbithole trying to make optimizations to something that's currently working. 
