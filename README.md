# PokemonTCG-React

PokemonTCG-React is GUI for https://api.pokemontcg.io/v1.
The documentation for this api can be found here https://docs.pokemontcg.io/.

## Requisites

NPM and Node installed

## To Run

```bash
git clone https://github.com/jaimindarji88/PokemonTCG-gui.git
cd PokemonTCG-gui
npm i
```

Run the tests

```bash
npm test
```

Start the dev server on localhost:8080

```bash
npm start
```

Make a production build

```bash
npm run build
```

## Design Decisions

Decided not to use [create-react-app](https://github.com/facebook/create-react-app), as I believe adding to the webpack configuration as needed is much better in the long run for maintenance concerns, and overall less complexity if you ever need to eject the create-react-app to add more custom configuration.

I decided to use [Bulma](https://github.com/jgthms/bulma) as my CSS library. This allowed me to focus completly on creating the React app and able to use the different styles from Bulma for both mobile and web.

A state-management library such as [redux](https://github.com/reduxjs/redux) did not need to be used because there were not many components Of those components you did not need to globally manage the state, as this would add too much complexity to a simple React app. If this app needed many components with different states, Redux becomes useful and very powerful.

I started testing just the bare minimum, but if this was a larger more complex app testing would be necessary to make sure everything works as expected. I used [jest](https://github.com/facebook/jest) and [enzyme](https://github.com/airbnb/enzyme).

For the interesting facts, there was no facts about the pokemon available from the pokemontcg.io api. So to meet this requirement I found the pokedex entries of each pokemon found in the api, through https://pokemondb.net/, and scraped each entry and put it into a JS object that will be used from the app. I made a python script to be able to do this and the methods used can be used in the scripts folder.
