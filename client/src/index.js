import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyles from "./styles";
import Pages from "./pages";

const root = createRoot(document.getElementById("root"));

/** confure our client */
const client = new ApolloClient({
    // uri: specify the loaction of GraphQL server
    uri: "http://localhost:4000",
    // cache: enalbes  to store and reuse query results so it doesn't have to make as many network requests
    cache: new InMemoryCache(),
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <GlobalStyles />
            <Pages />
        </ApolloProvider>
    </React.StrictMode>
);
