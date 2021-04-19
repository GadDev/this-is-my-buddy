import React, { useEffect, useRef, useState } from "react";

import { useFetch } from "../hooks/useFetch";

import Balance from "./Balance";
import Provider from "./Provider";
import Transactions from "./Transactions";
import Layout from "./Layout";

const initialState = {
  id: null,
  provider: {},
  balance: {},
  transactions: [],
};

const App = () => {
  const [state, setState] = useState(initialState);
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "https://www.mocky.io/v2/5c62e7c33000004a00019b05",
    {},
    isComponentMounted,
    []
  );

  useEffect(() => {
    setState((prevState) => ({ ...prevState, ...data }));
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
  console.log(state);
  return (
    <Layout>
      <h1>Welcome back buddy!</h1>
      <Provider provider={state.provider} />
      <Balance balance={state.balance} />
      <Transactions data={state.transactions} />
    </Layout>
  );
};

export default App;
