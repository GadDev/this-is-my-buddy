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
        .filter((item) => item.amount.value < 0)
        .sort((a, b) => b.amount.value - a.amount.value)
        .slice(0, 9)
        .map((transaction) => (
          <Transaction key={transaction.id} data={transaction} />
        ))}
    </section>
  );
};

export default Transactions;
