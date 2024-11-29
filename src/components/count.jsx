import React, { useEffect, useState } from "react";
import { getClickCount } from "../utils/getClickCount";

export const Count = () => {
  const [clickCount, setClickCount] = useState(null);

  useEffect(() => {
    const fetchClickCount = async () => {
      const count = await getClickCount();
      if (count !== null) {
        setClickCount(count);
      }
    };

    fetchClickCount();
  }, [clickCount]);

  return (
    <div>
      <p className="font-KarlaLight py-1 px-2 bg-white bg-opacity-50 m-2 rounded-md select-none">
        Times I changed my look:{" "}
        <span className="font-Karla">{clickCount !== null && clickCount}</span>
      </p>
    </div>
  );
};
