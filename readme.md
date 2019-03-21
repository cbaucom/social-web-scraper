## Web Scraper to track Instagram and Twitter Followers

This app uses Node.js, Express, and lowdb on the backend and React, Next, and Recharts on the frontend.

You can edit the URL for your own twitter and instargram urls in `backend/scraper.js`

### Running the backend
1. Run `yarn dev` from the backend directory
This kicks off a cron job that runs every 30 minutes and saves the results to `db.json`.

The data can be viewed at http://localhost:8444/data

### Running the frontend
1. Run `yarn dev` from the frontend directory
2. Visit http://localhost:3000/ to view the application

