import React, { useEffect, useRef, useState } from "react";
import { getClickCount } from "../utils/getClickCount";
import { useScrollStore } from "../stores/useScroll";
import { applyBounceEffect } from "../utils/applyBounceEffect";

export const Count = () => {
  const [clickCount, setClickCount] = useState(null);
  const countIndicatorRef = useRef();

  useEffect(() => {
    const fetchClickCount = async () => {
      const count = await getClickCount();
      if (count !== null) {
        setClickCount(count);
      }
    };
    fetchClickCount();
  }, []);

  const isScrolling = useScrollStore((state) => state.isScrolling);

  useEffect(() => {
    applyBounceEffect(countIndicatorRef.current, isScrolling);
  }, [isScrolling]);

  return (
    <div
      ref={countIndicatorRef}
      className="py-1 px-2 bg-white bg-opacity-50 m-2 rounded-md select-none "
    >
      <p className="font-KarlaLight text-base ">
        Times people changed my look:
        {/* <span className="font-Karla ml-1"> */}
        <span className="font-RecoletaBlack ml-1 text-lg">
          {clickCount !== null && clickCount}
        </span>
      </p>
    </div>
  );
};
