## Questions

### Please provide instructions on how to run your project in a bulleted list below.

- Clone down the repo
- From the root folder, in the terminal, run 'npm i' --  This will install necessary node modules
- From the root folder, in the terminal, run 'docker compose up' -- This will set up and run a docker container with the DB for this project
- From the root folder, in the terminal, run 'npm run start' -- This will concurrently run scripts "npm run dev -- --open" and "node ./server/index.js" to launch the fullstack webapp
- On launch, you should be at a login screen. With the included database, valid logins are any integer, 1 - 11
- Once logged in, use the buttons on the center of the page to navigate, or sign out with the button in the top right corner.
- For additional details and help, refer to README.md

### Were there any pieces of this project that you were not able to complete that you'd like to mention?

At the time of this writing, I am unable to auth into the docker database with my application, or from my OS.
Because of this, the app is designed to simulate functionality even if it doesn't have a working database connection.
My greatest concern is that my authentication issues are somehow unique and local to my system, and authentication will work correctly on another person's machine, which is a circumstance I've been completely unable to test. Because of this, my backend may not work correctly IF database authentication IS working correctly.

At time of writing, I'm waiting on a response from another developer to see if this is a known issue to them.

### If you were to continue building this out, what would you like to add next?

### If you have any other comments or info you'd like the reviewers to know, please add them below.