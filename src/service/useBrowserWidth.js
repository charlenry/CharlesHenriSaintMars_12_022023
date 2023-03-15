import { useState, useEffect } from "react";


/**
 * A custom hook that returns the current width of the browser.
 * It occurs after a page rendering or when resizing the browser width.
 * 
 * @function
 * @name useBrowserWidth
 * @kind function
 * @param {any} props
 * @returns {number} dimension
 */
const useBrowserWidth = (props) => {
  const [dimension, setDimension] = useState();

  useEffect(() => {
    window.addEventListener("resize", retrieveSize);

    function retrieveSize() {
      setDimension(window.innerWidth);
    }
    retrieveSize();

    return () => {
      window.removeEventListener("resize", retrieveSize);
    }
  }, []);

  return dimension;
};

export default useBrowserWidth;
