import React, { useEffect, useRef, useState } from "react";

import MyImage from "../assets/image.jpeg";
import { useFetch } from "../hooks/useFetch";

const App = () => {
  const [state, setState] = useState({});
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "http://www.mocky.io/v2/5c62e7c33000004a00019b05",
    {},
    isComponentMounted,
    []
  );

  useEffect(() => {
    setState(data);
  }, [data]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>There is a error with your request</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to my buddy account</h1>
    </div>
  );
};

export default App;
