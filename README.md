[![Netlify Status](https://api.netlify.com/api/v1/badges/743e5c07-40dd-4b18-a5ff-57aeb38dbc81/deploy-status)](https://app.netlify.com/sites/practical-bardeen-9293fa/deploys)

# HANDY.505

Handy.505 is a Pokémon Trading Card Games catalogue.
Live [here](https://practical-bardeen-9293fa.netlify.com/).

> Handy505 is the name of the model of the first Pokedex.

## Deploying

It's already deployed and avaliable at https://practical-bardeen-9293fa.netlify.com/.
To manually deploy it follow the instructions:

```
npm install
npm run build
```

Or, to development mode:

```
npm run serve 
```

## About this project

### Motivation
So, I decided to start studying React and I took Brian Holt's classes at [FrontendMasters](https://frontendmasters.com/) ([Complete Intro to React v4](https://frontendmasters.com/courses/complete-react-v4/)) and Brian did a pet adoption app on his course.
Based on it, I created Handy505, to exercise and go further with what I learned.

### The "Bricks"

It's a simple and pure [React](https://reactjs.org/) application that consumes [Pokémon TCG API](https://pokemontcg.io/) with [axios](https://github.com/axios/axios). Besides that, I use [ReactDOM](https://reactjs.org/docs/react-dom.html), [React Context API](https://reactjs.org/docs/context.html), [Reach Router](https://reach.tech/router), [Babel 6](https://babeljs.io/docs/en/6.26.3/index.html), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and to lazy load images [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component) (go and give it a star by the way).

For styling  it relies on [NES.css](https://nostalgic-css.github.io/NES.css/) and [Sass](https://sass-lang.com/).

And, finally, [Parcel](https://parceljs.org/) to bundle then all and delivery it.

### Development

I've spent about 12 hours to get this result, see [here](https://wakatime.com/@joelxr/projects/athjjaxxgc?start=2019-01-03&end=2019-01-09) my WakaTime report.

As a new developer in React environment I think that's very impressive, of course, having experience with Vue.js and Angular helped a little, for instance, axios is an old friend of mine.
