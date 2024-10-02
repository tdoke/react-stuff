import React from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function Loader() {
  console.log('rendering loader');
  React.useEffect(() => {
    return () => {
      console.log('unmounting loader');
    };
  }, []);
  return 'loading....'
}
export default function MyComponent() {
  return (
    // Displays <Loader> until OtherComponent loads
    <React.Suspense fallback={<Loader />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
