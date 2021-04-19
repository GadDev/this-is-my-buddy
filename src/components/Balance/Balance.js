import PropTypes from "prop-types";
import React from "react";

import { Wrapper } from "../App.styled";

const Balance = ({ balance }) => {
  const { amount, currency_iso } = balance;
  return (
    <Wrapper>
      <h4>Balance</h4>
      <p>
        {amount}
        {currency_iso}
      </p>
    </Wrapper>
  );
};

Balance.propTypes = {
  balance: PropTypes.shape({
    amount: PropTypes.number,
    currency_iso: PropTypes.string,
  }),
};

export default Balance;
