import React, { Suspense } from 'react';

// Lazy load Components/Modules
const AppBar = React.lazy(() => import('./Components/AppBar/AppBar'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppBar />
    </Suspense>
  );
}

export default App;
