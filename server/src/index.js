
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');
const SpaceCatsAPI = require('./datasources/spacecats-api');

/*const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(12)],
        spaceCats: () => [...new Array(10)]
    }),
    SpaceCat: () => ({
      id: () => 'spacecat_01',
      title: () => 'spacecat pioneer',
      age: () => 2,
      missions: () => {
        return {
            id: () => 'mission_01',
            name: () => 'First space mission',
            description: () => 'This is the fucking first cat in the space'
        };
      }
    }),
    Track: () => ({
        id: () => 'track_01',
        title: () => 'Astro Kitty, Space Explorer',
        author: () => {
            return {
            name: 'Grumpy Cat',
            photo:
                'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
            };
        },
        thumbnail: () =>
            'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => 1210,
        modulesCount: () => 6
    })
  };*/

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            trackAPI: new TrackAPI(),
            spaceCatsAPI: new SpaceCatsAPI()
        };
    }
    //mocks
});

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at https://studio.apollographql.com/dev
    `);
})