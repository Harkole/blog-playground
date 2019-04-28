import React from 'react';

const RecentPosts = React.lazy(() => import('../../Containers/RecentPosts/RecentPosts'));

const Home = () => {

    return (
        <React.Fragment>
            
            <RecentPosts />
        </React.Fragment>
    )
}

export default Home;