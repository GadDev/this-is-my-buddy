import PropTypes from "prop-types";
import React from "react";

import Amount from "../Amount";

const Transaction = ({ data }) => {
  const { date, description, category_title, amount } = data;
  return (
    <article>
      <h2>{category_title}</h2>
      <time>{date}</time>
      <p>{description}</p>
      <Amount amount={amount} />
    </article>
  );
};

Transaction.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    category_title: PropTypes.string,
    category_title: PropTypes.string,
    amount: PropTypes.shape({
      value: PropTypes.number,
      currency_iso: PropTypes.string,
    }),
  }),
};

export default Transaction;
