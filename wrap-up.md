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

At the time of this writing, I am unable to auth into the docker database from outside of the container. This includes authentication attempts being made by my app.
Because of this, the app is designed to simulate functionality even if it doesn't have a working database connection.

My greatest concern is that my authentication issues are somehow unique and local to my system, and authentication will work correctly on another person's machine, which is a circumstance I've been completely unable to test. Because of this, my backend may not work correctly IF database authentication IS working correctly.

Right now there are a number of design choices in this project that I only made because I can't auth into the database. Those would need to be fixed. The two biggest changes would be:

- Actually signing out when a user signs out, rather than toggling a boolean flag
- Calculating totals and daily balances on the backend (ideally in the database itself) rather than in the frontend

### If you were to continue building this out, what would you like to add next?

Today this project's context is very simple, and is easy to manage with React's built in context management tools. However, if this were a project that I expected would expand meaningfully in size and complexity, I would probably switch from using React's createContext to using Redux. This is because having a single immutable state object which can only be interacted with in a strict order would be easier to troubleshoot and maintain over time. 

If this project were to move beyond being a proof-of-concept, I would also want to make sure I'm using industry standard security, encryption, and obfuscation within the app. I'd also want to add receipt printing functionality.

Also, this project was built with the belief that no on-screen keyboard is needed, but if this were to be used in standard ATM terminals, that's something that would need to be added.

### If you have any other comments or info you'd like the reviewers to know, please add them below.

[Inspiration for page layout](https://www.pinterest.ph/pin/168673948522477798/)
