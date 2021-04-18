import React, { useRef } from "react";

import MyImage from "../assets/image.jpeg";
import { useFetch } from "../hooks/useFetch";

const App = () => {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "http://www.mocky.io/v2/5c62e7c33000004a00019b05",
    {},
    isComponentMounted,
    []
  );

  console.log(data);
  return (
    <div>
      <h1>Welcome to my-webpack-react-starter</h1>
      <img src={MyImage} />
    </div>
  );
};

export default App;
