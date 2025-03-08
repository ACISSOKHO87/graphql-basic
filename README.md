# GRAPHQL-BASICS

## FEATURE DATA REQUIREMENTS

Based on the mockup, it looks like we'll need the following information for each learning track:

-   Title
-   Thumbnail image
-   Length (estimated duration)
-   Module count
-   Author name
-   Author picture

## SCHEMA DEFINITION LANGUAGE

Schema is a collection of type and fields

-   type can be a String, Int Float, null or non null
-   field: exemple userName, age and also ...

```
    type SpaceCat{
        name: String!
        age; Int
        missions [Mission]
    }
```

Don't forgot to document uour schema, it's a good pratice and helpful to comment comment your code

## BUILDING OUR SCHEMA

create au folder server for the Backend

### BACKEND

-   Receive an incoming GraphQL query from our client
-   Validate that query against our newly created schema
-   Populate the queried schema fields with mocked data
-   Return the populated fields as a response

### DEPENDENCIES

Install the packages we need: @apollo/server, graphql and graphql-tag.

-   The @apollo/server package provides a full-fledged, spec-compliant GraphQL server.
-   The graphql package provides the core logic for parsing and validating GraphQL queries.
-   he graphql-tag package provides the gql template literal that we'll use in a moment.

```
npm install @apollo/server graphql graphql-tag
```

## APOLLO SERVER

To create our server, we'll use the @apollo/server package that we installed previously.
We'll only need the named export ApolloServer
We'll also need to use the startStandaloneServer function, which we can import from the @apollo/server/standalone package.
(confer to the src/index.js)

### MOCKING DATA

```
npm install @graphql-tools/mock @graphql-tools/schema
```

At the top, we'll import addMocksToSchema and makeExecutableSchema.

```
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
```

The server will be like:

```
const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
  }),
});
```
