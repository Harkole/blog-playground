import React, { Suspense } from 'react';

// Lazy load Components/Modules
const Home = React.lazy(() => import('./Pages/Home/Home'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;
