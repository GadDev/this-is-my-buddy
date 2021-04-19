import PropTypes from "prop-types";
import React from "react";

import Amount from "../Amount";
import { Wrapper } from "../App.styled";
import { DateLabel, TransactionItem } from "./Transaction.styled";

const Transaction = ({ data }) => {
  const { date, description, category_title, amount } = data;
  return (
    <TransactionItem>
      <DateLabel>{date}</DateLabel>
      <Wrapper>
        <div>
          <h5>{description}</h5>
          <p>{category_title}</p>
        </div>
        <Amount amount={amount} />
      </Wrapper>
    </TransactionItem>
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
