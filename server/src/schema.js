const gql = require("graphql-tag");

const typeDefs = gql`
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "the track's title"
        title: String!
        "the tack's main author"
        author: Author!
        "the track's main illustration to display in track car or track page detail"
        thumbail: String
        "the track's approximate length to complete, in minutes"
        length: Int
        "the number of modules this track contains"
        moduleCount: Int
    }

    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last Name"
        name: String!
        "Author's procile picture url"
        photo: String
    }

    type Query {
        "Query to get tracks array for the homepage grid"
        tracks: [Track!]!
    }
`;

module.exports = typeDefs;
