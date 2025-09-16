"use client";

import { Suspense, lazy } from 'react';
import LoadingScreen from './loading-screen';

// This is the corrected syntax for lazy loading a default export.
// It waits for the import to finish, then manually extracts the 
// 'default' property from the loaded module.
const Invitation = lazy(() => 
  import('./invitation').then(module => ({ default: module.default }))
);

export default function Page() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Invitation />
    </Suspense>
  );
}