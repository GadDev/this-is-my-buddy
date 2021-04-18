import PropTypes from "prop-types";
import React from "react";

const Balance = ({ balance }) => {
  const { amount, currency_iso } = balance;
  return (
    <div>
      <h3>Balance</h3>
      <p>
        {amount}
        {currency_iso}
      </p>
    </div>
  );
};

Balance.propTypes = {
  balance: PropTypes.shape({
    amount: PropTypes.number,
    currency_iso: PropTypes.string,
  }),
};

export default Balance;
