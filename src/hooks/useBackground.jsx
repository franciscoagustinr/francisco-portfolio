import { useCallback } from "react";

export const useHatBackground = () => {
  const getHexBackground = useCallback((hatName) => {
    switch (hatName) {
      case "NoneHat":
        return "#ec4899";
      case "OktopusHat":
        return "#9C2B7C";
      case "BatmanHat":
        return "#414AF0";
      case "ChineseHat":
        return "#DF9930";
      case "MickeyHat":
        return "#C39642";
      case "CowboyHat":
        return "#F49E00";
      case "SharkHat":
        return "#09CEFF";
      default:
        return "#ec4899";
    }
  }, []);

  const getGradientBackground = useCallback((hatName) => {
    switch (hatName) {
      case "NoneHat":
        return "linear-gradient(to bottom right, rgb(53, 190, 214), rgb(53, 190, 214))";
      case "OktopusHat":
        return "linear-gradient(to bottom right, #ee43be, #9e2ba8)";
      case "BatmanHat":
        return "linear-gradient(to bottom, #1d2167, #0f0f0f)";
      case "ChineseHat":
        return "linear-gradient(to bottom right, #b99c70, #8a7345)";
      case "MickeyHat":
        return "linear-gradient(to bottom, #bed95f, #f2ba52)";
      case "CowboyHat":
        return "linear-gradient(to bottom right, #f6bc4e, #f2a65e)";
      case "SharkHat":
        return "linear-gradient(to bottom left, #047692, #0476ff)";
      default:
        return "linear-gradient(to bottom right, rgb(53, 190, 214), rgb(53, 190, 214))";
    }
  }, []);

  return { getHexBackground, getGradientBackground };
};
