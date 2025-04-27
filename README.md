![Softruck project overview](https://github.com/luccaromaniello/softruck-challenge/blob/main/challenge/public/overview.png?raw=true)

# Softruck Code Challenge

You can read the challenge instructions in the `instructions` folder.

## Setting up

First, create a `.env` file inside the `challenge` folder. This file should have a Google Maps API KEY, so your content should look like this:

`GOOGLE_MAPS_API_KEY="<YOUR_API_KEY_HERE>"`

If you don't know how to generate your API key, please refer to the [documentation](https://developers.google.com/maps/documentation/javascript).

### Run project

If you're not already in the `challenge` folder:

`cd challenge`

Install dependencies:

`npm install`

Run server:

`npm run dev`

## Considerations

This app was made in Next.js (with Typescript) and SCSS. While the last was a specification of the challenge, Next.js was chosen based on personal preference and experience.

Styles were maintained with one single file to keep it short, based on the project size.

The animation of the car depends on the provided coordinates to make it smoother. Please have that in mind that if we had more updated positions (more entries in GPS coordinates array), then it should be a lot more assertive.

I've also tried to add a drawing path following the car's movement, but unfortunately this API is very cost restricted (Google Maps Direction Service). I also started a manual line path, but I've opted to remove it.

Responsiveness is not being taken into consideration due to ponctual deadlines. Ideally, we would have to take it into consideration when displaying such visualization for users.

I18n was added, but it was not applied to the map language. This is a minor technical debt I've added due to deadline constraints.

## Assumptions

I've assumed that based on the challenge instructions (which can be vague) the main goal was to take the "gps" object from the provided JSON and map the car position, while using its "direction" in degrees to know the expected car movement.

