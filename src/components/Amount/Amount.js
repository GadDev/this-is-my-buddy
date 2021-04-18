import PropTypes from "prop-types";
import React from "react";

const Amount = ({ amount }) => {
  const { value, currency_iso } = amount;
  return (
    <div>
      <p>
        {value}
        {currency_iso}
      </p>
    </div>
  );
};

Amount.propTypes = {
  amount: PropTypes.shape({
    value: PropTypes.number,
    currency_iso: PropTypes.string,
  }),
};

export default Amount;
