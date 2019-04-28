import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Lazy load Components/Modules
const Home = React.lazy(() => import('./Pages/Home/Home'));
const ApplicationBar = React.lazy(() => import('./Containers/AppBar/AppBar'));
const NewPost = React.lazy(() => import('./Pages/NewPost/NewPost'));

const App: React.FC = () => {

  const isAuthenticated: boolean = true;

  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <ApplicationBar isAuthenticated={isAuthenticated} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/NewPost" component={NewPost}></Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
