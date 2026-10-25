import { useEffect, useRef } from 'react';
import { useScrollStore } from '../stores/useScroll';
import { usePopupStore } from '../stores/usePopUp';
import { applyBounceEffect } from '../utils/applyBounceEffect';

export const useBounceOnScroll = (getTarget) => {
  const targetRef = useRef(getTarget);
  targetRef.current = getTarget;

  useEffect(() => {
    const run = () => {
      applyBounceEffect(
        targetRef.current(),
        useScrollStore.getState().isScrolling,
        usePopupStore.getState().isPopUpOpen
      );
    };

    const unsubscribeScroll = useScrollStore.subscribe((state, prev) => {
      if (state.isScrolling !== prev.isScrolling) run();
    });
    const unsubscribePopUp = usePopupStore.subscribe((state, prev) => {
      if (state.isPopUpOpen !== prev.isPopUpOpen) run();
    });

    return () => {
      unsubscribeScroll();
      unsubscribePopUp();
    };
  }, []);
};
