import PropTypes from "prop-types";
import React from "react";

const Amount = (props) => {
  const { value, currency_iso } = props;
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
  value: PropTypes.string,
  currency_iso: PropTypes.string,
};

export default Amount;
