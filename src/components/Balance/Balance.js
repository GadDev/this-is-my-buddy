import React from "react";

import Amount from "../Amount";
const Balance = ({ amount }) => {
  return (
    <div>
      <Amount amount={amount} />
    </div>
  );
};

export default Balance;
