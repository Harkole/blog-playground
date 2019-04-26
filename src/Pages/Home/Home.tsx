import React from 'react';

const ApplicationBar = React.lazy(() => import('../../Containers/AppBar/AppBar'));
const RecentPosts = React.lazy(() => import('../../Containers/RecentPosts/RecentPosts'));

const Home = () => {

    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(true);

    return (
        <React.Fragment>
            <ApplicationBar isAuthenticated={isAuthenticated} />
            <RecentPosts />
        </React.Fragment>
    )
}

export default Home;