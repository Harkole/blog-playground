import React, { Suspense } from 'react';

// Lazy load Components/Modules
const ApplicationBar = React.lazy(() => import('./Components/AppBar/AppBar'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationBar isAuthenticated={true} />
    </Suspense>
  );
}

export default App;
