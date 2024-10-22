import { useCallback, useEffect, useState } from "react";
import throttle from "../utils/throttle";

export default function useWindowDimensions(
  throttleDelay: number | undefined = 500
) {
  const getWindowDimensions = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    const throttledHandleResize = throttle(handleResize, throttleDelay);

    window.addEventListener("resize", throttledHandleResize);
    return () => window.removeEventListener("resize", throttledHandleResize);
  }, [getWindowDimensions, throttleDelay]);

  return windowDimensions;
}
