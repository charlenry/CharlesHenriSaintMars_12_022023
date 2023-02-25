import { useState, useEffect } from "react";

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
