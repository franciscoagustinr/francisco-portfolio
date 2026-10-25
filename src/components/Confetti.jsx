import React, { lazy, Suspense } from 'react';

const Confetti = lazy(() => import('react-confetti-explosion'));

export const ConfettiExplosion = (props) => (
  <Suspense fallback={null}>
    <Confetti {...props} />
  </Suspense>
);
