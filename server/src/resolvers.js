const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track: (_, { id }, {dataSources}) => {
            return dataSources.trackAPI.getTrack(id);
        },
        spaceCats: (_, __, { dataSources }) => {
            return dataSources.spaceCatsAPI.getSpaceCats();
        },
        spaceCat: (_, { id }, {dataSources}) => {
            return dataSources.spaceCatsAPI.getSpaceCat(id);
        }, 
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    },
    SpaceCat: {
        missions: ({catId}, _, {dataSources}) => {
            return dataSources.spaceCatsAPI.getMissions(catId);
        }
    }
};

module.exports = resolvers;