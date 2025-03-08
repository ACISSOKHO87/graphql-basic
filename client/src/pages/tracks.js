import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
const GET_TRACKS = gql`
    query Tracks {
        tracks {
            id
            title
            thumbnail
            length
            modulesCount
            author {
                id
                name
                photo
            }
        }
    }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const { loading, error, data } = useQuery(GET_TRACKS);

    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={data}>
                {data?.tracks?.map((track, index) => {
                    return (
                        <TrackCard key={`track.id-${index}`} track={track} />
                    );
                })}
            </QueryResult>
        </Layout>
    );
};

export default Tracks;
