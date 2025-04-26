# Softruck Code Challenge

You can read the challenge instructions in the `instructions` folder.

## Setting up

First, create a `.env` file inside the `challenge` folder. This file should have a Google Maps API KEY, so your content should look like this:

`GOOGLE_MAPS_API_KEY="<YOUR_API_KEY_HERE>"`

If you don't know how to generate your API key, please refer to the [documentation] (https://developers.google.com/maps/documentation/javascript).

### Run project

If you're not already in the `challenge` folder:

`cd challenge`;

Install dependencies:

`npm install`;

Run server:

`npm run dev`;

## Considerations

This app was made in Next.js (with Typescript) and SCSS. While the last was a specification of the challenge, Next.js was chosen based on personal preference and experience.

Styles were maintained with one single file to keep it short, based on the project size.

The animation of the car depends on the provided coordinates to make it smoother. Please have that in mind that if we had more updated positions (more entries in GPS coordinates array), then it should be a lot more assertive.
