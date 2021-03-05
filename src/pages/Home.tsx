// import { gql, useQuery } from '@apollo/client';
import React from 'react'


// import { usePostsQuery } from '../generated/graphql';
import HomeTemplate from '../templates/Home.template';

interface HomeProps {

}



const Home: React.FC<HomeProps> = () => {
    // const { loading, error, data } = usePostsQuery();
    // console.log(data);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
    return (
        <HomeTemplate />
    );

}

export default Home;