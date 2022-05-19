const {gql} = require('apollo-server');

const typeDefs = gql`
    type SpaceCat {
        id: ID!
        name: String!
        age: Int
        missions: [Mission]
    }

    type Mission {
        id: ID!
        name: String!
        description: String!
    }

     # A track is a group of Modules that teaches about a specific topic
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
        modules: [Module!]!
    }

    type Module {
        id: ID!
        title: String
        length: Int
    }

        # Author of a complete Track
    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Query {
        spaceCats: [SpaceCat]
        tracksForHome: [Track!]!
        track: Track
    }
`;

module.exports = typeDefs;