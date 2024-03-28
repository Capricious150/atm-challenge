# ATM Machine Interface

This project is a fullstack, mock ATM interface, which uses the following stack:
- React
- Node
- Express
- PostgreSQL

It is a mostly front-end project with a lightweight, easy to maintain express server. 
This project is part of a challenge provided by Advisors Excel during a role application.

## To Install & Run:

This project is designed to be run in development mode. Additionally, this project requires that a user have Docker installed.
To install and run:
1. Clone down the repo
2. From the root folder, in the terminal, run 'npm i' --  This will install necessary node modules
3. From the root folder, in the terminal, run 'docker compose up' -- This will set up and run a docker container with the DB for this project
4. From the root folder, in the terminal, run 'npm run start' -- This will concurrently run scripts "npm run dev -- --open" and "node ./server/index.js" to launch the fullstack webapp

If you followed these steps you should have the following:
1. The database docker container, running and forwarded on http://localhost:5432,
2. The ExpressJS server, listening on http://localhost:3000,
3. The React Client, which should have automatically opened in your default browser, and is accessed at http://localhost:5173

On launch, you should be at a login screen. With the included database, valid logins are any integer, 1 - 11
Once logged in, use the buttons on the center of the page to navigate, or sign out with the button in the top right corner.

The different options will have the following behaviors:

#### View Balance:
- Outputs the customer's available balance
- For credit accounts, also outputs the customer's credit limit

#### Deposit:
- A customer cannot deposit more than $1000 in a single transaction.
- For credit accounts, the customer cannot deposit more in their account than is needed to 0 out the account.

#### Withdraw:
- A customer can withdraw no more than $200 in a single transaction.
- A customer can withdraw no more than $400 in a single day. 
- A customer can withdraw any amount that can be dispensed in $5 bills.
- A customer cannot withdraw more than they have in their account, unless it is a credit account, in which case they cannot withdraw more than their credit limit.


## The Blocker:

At the time of this writing, I am unable to auth into the docker database from outside of the container. This includes authentication attempts being made by my app.
Because of this, the app is designed to simulate functionality even if it doesn't have a working database connection.
My greatest concern is that my authentication issues are somehow unique and local to my system, and authentication will work correctly on another person's machine, which is a circumstance I've been completely unable to test. Because of this, my backend may not work correctly IF database authentication IS working correctly.

At time of writing, I'm waiting on a response from another developer to see if this is a known issue to them.