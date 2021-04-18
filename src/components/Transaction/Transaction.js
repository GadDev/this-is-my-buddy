import PropTypes from "prop-types";
import React from "react";

import Amount from "../Amount";
const Transaction = (props) => {
  const { date, description, category_title, amount } = props;
  return (
    <article>
      <h2>Transaction</h2>
      <h2>{category_title}</h2>
      <date>{date}</date>
      <p>{description}</p>
      <Amount data={amount} />
    </article>
  );
};

Transaction.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  category_title: PropTypes.string,
  category_title: PropTypes.string,
  amount: PropTypes.shape({
    value: PropTypes.string,
    currency_iso: PropTypes.string,
  }),
};

export default Transaction;
