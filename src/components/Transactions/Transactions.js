import React, { useEffect, useState } from "react";

import Transaction from "../Transaction";

const Transactions = ({ data }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(data);
  }, [data]);

  return (
    <section>
      <h2>Transactions</h2>
      <hr></hr>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} data={transaction} />
      ))}
    </section>
  );
};

export default Transactions;
