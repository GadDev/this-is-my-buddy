import React, { useEffect, useState } from "react";

import Transaction from "../Transaction";

const Transactions = ({ data }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(data);
  }, [data]);

  return (
    <section>
      {transactions
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((transaction) => (
          <Transaction key={transaction.id} data={transaction} />
        ))}
    </section>
  );
};

export default Transactions;
